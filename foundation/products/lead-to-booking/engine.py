"""Lead-to-Booking v1: deterministic, no-network demo engine."""
import json,sqlite3,uuid
from datetime import datetime,timedelta,timezone
def connect():
 d=sqlite3.connect(':memory:');d.row_factory=sqlite3.Row
 d.executescript("""
 PRAGMA foreign_keys=ON;
 CREATE TABLE clients(id TEXT PRIMARY KEY,name TEXT);
 CREATE TABLE contacts(id TEXT PRIMARY KEY,client_id TEXT REFERENCES clients(id),UNIQUE(id,client_id));
 CREATE TABLE inquiries(id TEXT PRIMARY KEY,client_id TEXT REFERENCES clients(id),contact_id TEXT,source TEXT,external_id TEXT,status TEXT CHECK(status IN ('new','contacted','qualified','booked','lost')),received_at TEXT,first_response_at TEXT,UNIQUE(client_id,source,external_id),FOREIGN KEY(contact_id,client_id) REFERENCES contacts(id,client_id));
 CREATE TABLE appointments(id TEXT PRIMARY KEY,inquiry_id TEXT REFERENCES inquiries(id),starts_at TEXT);
 CREATE TABLE followups(inquiry_id TEXT UNIQUE REFERENCES inquiries(id),due_at TEXT,status TEXT);
 """)
 return d
def dt(x):
 d=datetime.fromisoformat(x.replace('Z','+00:00'))
 if d.tzinfo is None:raise ValueError('Timezone required')
 return d.astimezone(timezone.utc)
def seed(d):
 d.executemany('INSERT INTO clients VALUES(?,?)',[('pilates','Harbor Pilates FICTIONAL'),('hvac','Cedar Home Services FICTIONAL')])
 d.executemany('INSERT INTO contacts VALUES(?,?)',[('a','pilates'),('b','hvac')])
def ingest(d,client,contact,source,event_id,received):
 received=dt(received)
 existing=d.execute('SELECT id FROM inquiries WHERE client_id=? AND source=? AND external_id=?',(client,source,event_id)).fetchone()
 if existing:return existing['id'],False
 id=str(uuid.uuid4())
 with d:
  d.execute("INSERT INTO inquiries VALUES(?,?,?,?,?,'new',?,NULL)",(id,client,contact,source,event_id,received.isoformat()))
  d.execute("INSERT INTO followups VALUES(?,?,'pending')",(id,(received+timedelta(hours=2)).isoformat()))
 return id,True
def advance(d,id,status,at):
 at=dt(at).isoformat()
 row=d.execute('SELECT status FROM inquiries WHERE id=?',(id,)).fetchone()
 transitions={'new':{'contacted','lost'},'contacted':{'qualified','booked','lost'},'qualified':{'booked','lost'},'booked':set(),'lost':set()}
 if not row or status not in transitions[row['status']]:raise ValueError('Invalid transition')
 with d:
  d.execute("UPDATE inquiries SET status=?,first_response_at=CASE WHEN ?='contacted' AND first_response_at IS NULL THEN ? ELSE first_response_at END WHERE id=?",(status,status,at,id))
  if status in ('contacted','booked','lost'):d.execute("UPDATE followups SET status='closed' WHERE inquiry_id=?",(id,))
def book(d,id,starts):
 dt(starts)
 row=d.execute('SELECT status FROM inquiries WHERE id=?',(id,)).fetchone()
 if not row or row['status'] not in ('contacted','qualified'):raise ValueError('Not ready')
 advance(d,id,'booked',starts)
 d.execute('INSERT INTO appointments VALUES(?,?,?)',(str(uuid.uuid4()),id,dt(starts).isoformat()))
def overdue(d,as_of):
 return [dict(x) for x in d.execute("SELECT f.inquiry_id,f.due_at FROM followups f WHERE f.status='pending' AND f.due_at<=?",(dt(as_of).isoformat(),))]
def metrics(d,client):
 x=d.execute("SELECT count(*) total,sum(case when status='booked' then 1 else 0 end) booked FROM inquiries WHERE client_id=?",(client,)).fetchone()
 return {'leads':x['total'],'booked':x['booked'] or 0,'conversion':round((x['booked'] or 0)/x['total'],3) if x['total'] else 0}
def demo():
 d=connect();seed(d)
 a=ingest(d,'pilates','a','website','P001','2026-10-26T14:00:00Z')
 duplicate=ingest(d,'pilates','a','website','P001','2026-10-26T14:00:00Z')
 b=ingest(d,'hvac','b','website','H001','2026-10-26T15:00:00Z')
 advance(d,b[0],'contacted','2026-10-26T15:15:00Z')
 advance(d,b[0],'qualified','2026-10-26T15:20:00Z')
 book(d,b[0],'2026-10-29T16:00:00Z')
 return {'duplicate_prevented':not duplicate[1],'overdue':len(overdue(d,'2026-10-27T17:00:00Z')),'pilates':metrics(d,'pilates'),'hvac':metrics(d,'hvac'),'outbound_messages_sent':0}
if __name__=='__main__':print(json.dumps(demo(),indent=2))
