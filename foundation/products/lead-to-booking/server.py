"""Local demo server: durable SQLite, loopback only, no external messaging."""
import json, os, sqlite3, threading
from datetime import datetime, timezone, timedelta
from http.server import ThreadingHTTPServer, BaseHTTPRequestHandler
from pathlib import Path
from urllib.parse import urlparse, parse_qs

ROOT=Path(__file__).resolve().parent
DB=Path(os.environ.get("LTB_DB",str(ROOT/"demo.sqlite3")))
LOCK=threading.RLock()
STATUSES={"new":["contacted","lost"],"contacted":["qualified","lost"],"qualified":["booked","lost"],"booked":[],"lost":[]}
def utc(value):
 d=datetime.fromisoformat(value.replace("Z","+00:00"))
 if d.tzinfo is None:raise ValueError("Timezone required")
 return d.astimezone(timezone.utc).isoformat()
def connect():
 db=sqlite3.connect(DB,timeout=10)
 db.row_factory=sqlite3.Row
 db.execute("PRAGMA foreign_keys=ON")
 return db
def init():
 with LOCK,connect() as db:
  db.executescript("""
  CREATE TABLE IF NOT EXISTS clients(id TEXT PRIMARY KEY,name TEXT NOT NULL);
  CREATE TABLE IF NOT EXISTS contacts(id INTEGER PRIMARY KEY AUTOINCREMENT,client_id TEXT NOT NULL REFERENCES clients(id),name TEXT NOT NULL,UNIQUE(id,client_id));
  CREATE TABLE IF NOT EXISTS inquiries(id INTEGER PRIMARY KEY AUTOINCREMENT,client_id TEXT NOT NULL REFERENCES clients(id),contact_id INTEGER NOT NULL,source TEXT NOT NULL,external_id TEXT NOT NULL,status TEXT NOT NULL DEFAULT 'new' CHECK(status IN ('new','contacted','qualified','booked','lost')),received_at TEXT NOT NULL,first_response_at TEXT,UNIQUE(client_id,source,external_id),FOREIGN KEY(contact_id,client_id) REFERENCES contacts(id,client_id));
  CREATE TABLE IF NOT EXISTS appointments(id INTEGER PRIMARY KEY AUTOINCREMENT,inquiry_id INTEGER NOT NULL UNIQUE REFERENCES inquiries(id),starts_at TEXT NOT NULL,service TEXT NOT NULL,status TEXT NOT NULL DEFAULT 'scheduled' CHECK(status IN ('scheduled','completed','cancelled','no_show')));
  """)
  db.execute("INSERT OR IGNORE INTO clients VALUES('pilates','Harbor Pilates (Demo)')")
  db.execute("INSERT OR IGNORE INTO clients VALUES('hvac','Cedar Home Services (Demo)')")
def all_data(client):
 with connect() as db:
  leads=[dict(x) for x in db.execute("""SELECT i.*,c.name, a.id appointment_id,a.starts_at appointment_at,a.service,a.status appointment_status FROM inquiries i JOIN contacts c ON c.id=i.contact_id LEFT JOIN appointments a ON a.inquiry_id=i.id WHERE i.client_id=? ORDER BY i.id DESC""",(client,))]
  total=len(leads);booked=sum(x["status"]=="booked" for x in leads)
  now=datetime.now(timezone.utc)
  overdue=sum(x["status"]=="new" and now-datetime.fromisoformat(x["received_at"])>timedelta(hours=2) for x in leads)
  return {"leads":leads,"metrics":{"total":total,"booked":booked,"conversion":round(100*booked/total) if total else 0,"overdue":overdue}}
def create(data):
 client=data.get("client_id");name=str(data.get("name","")).strip();source=str(data.get("source","")).strip();external=str(data.get("external_id","")).strip()
 if client not in ("pilates","hvac") or not all((name,source,external)) or max(map(len,(name,source,external)))>120:raise ValueError("Invalid inquiry")
 received=utc(data.get("received_at") or datetime.now(timezone.utc).isoformat())
 with LOCK,connect() as db:
  existing=db.execute("SELECT id FROM inquiries WHERE client_id=? AND source=? AND external_id=?",(client,source,external)).fetchone()
  if existing:return {"id":existing["id"],"created":False}
  cur=db.execute("INSERT INTO contacts(client_id,name) VALUES(?,?)",(client,name))
  lead=db.execute("INSERT INTO inquiries(client_id,contact_id,source,external_id,received_at) VALUES(?,?,?,?,?)",(client,cur.lastrowid,source,external,received))
  return {"id":lead.lastrowid,"created":True}
def transition(data):
 lead_id=int(data["id"]);status=data.get("status")
 with LOCK,connect() as db:
  lead=db.execute("SELECT status FROM inquiries WHERE id=?",(lead_id,)).fetchone()
  if not lead:raise ValueError("Inquiry not found")
  if status not in STATUSES[lead["status"]] or status=="booked":raise ValueError("Use appointment creation to book")
  db.execute("UPDATE inquiries SET status=?,first_response_at=CASE WHEN ?='contacted' AND first_response_at IS NULL THEN ? ELSE first_response_at END WHERE id=?",(status,status,datetime.now(timezone.utc).isoformat(),lead_id))
  return {"updated":True}
def book(data):
 lead_id=int(data["inquiry_id"]);start=utc(str(data["starts_at"]));service=str(data.get("service","")).strip()
 if not service or len(service)>120:raise ValueError("Service required")
 with LOCK,connect() as db:
  lead=db.execute("SELECT status FROM inquiries WHERE id=?",(lead_id,)).fetchone()
  if not lead or lead["status"] not in ("contacted","qualified"):raise ValueError("Contact or qualify lead before booking")
  cur=db.execute("INSERT INTO appointments(inquiry_id,starts_at,service) VALUES(?,?,?)",(lead_id,start,service))
  db.execute("UPDATE inquiries SET status='booked' WHERE id=?",(lead_id,))
  return {"appointment_id":cur.lastrowid}
def appointment_status(data):
 appointment_id=int(data["id"]);status=data.get("status")
 if status not in ("completed","cancelled","no_show"):raise ValueError("Invalid appointment status")
 with LOCK,connect() as db:
  a=db.execute("SELECT status FROM appointments WHERE id=?",(appointment_id,)).fetchone()
  if not a or a["status"]!="scheduled":raise ValueError("Only scheduled appointments can be updated")
  db.execute("UPDATE appointments SET status=? WHERE id=?",(status,appointment_id))
  return {"updated":True}
class Handler(BaseHTTPRequestHandler):
 def respond(self,status,payload):
  b=json.dumps(payload).encode();self.send_response(status);self.send_header("Content-Type","application/json");self.send_header("Content-Length",str(len(b)));self.send_header("Cache-Control","no-store");self.end_headers();self.wfile.write(b)
 def do_GET(self):
  path=urlparse(self.path)
  if path.path=="/": 
   b=(ROOT/"app.html").read_bytes();self.send_response(200);self.send_header("Content-Type","text/html; charset=utf-8");self.send_header("Content-Length",str(len(b)));self.end_headers();self.wfile.write(b);return
  if path.path=="/api/data":
   client=parse_qs(path.query).get("client",["pilates"])[0]
   if client not in ("pilates","hvac"):return self.respond(400,{"error":"Invalid client"})
   return self.respond(200,all_data(client))
  self.respond(404,{"error":"Not found"})
 def do_POST(self):
  if self.path not in ("/api/inquiries","/api/status","/api/appointments","/api/appointment-status"):return self.respond(404,{"error":"Not found"})
  try:
   size=int(self.headers.get("Content-Length","0"))
   if size<2 or size>16384:raise ValueError("Invalid request size")
   data=json.loads(self.rfile.read(size))
   if not isinstance(data,dict):raise ValueError("Expected object")
   result={"/api/inquiries":create,"/api/status":transition,"/api/appointments":book,"/api/appointment-status":appointment_status}[self.path](data)
   self.respond(200,result)
  except (ValueError,KeyError,sqlite3.IntegrityError) as e:self.respond(400,{"error":str(e)})
  except Exception:self.respond(500,{"error":"Server error"})
if __name__=="__main__":
 init();print("Open http://127.0.0.1:8765");ThreadingHTTPServer(("127.0.0.1",8765),Handler).serve_forever()
