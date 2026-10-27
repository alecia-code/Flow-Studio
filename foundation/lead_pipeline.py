"""Demo-only lead pipeline. No external services or messages."""
import json
from pathlib import Path
from datetime import datetime, timedelta, timezone

ROOT = Path(__file__).resolve().parent
def load(name):
    return json.loads((ROOT / "demo" / (name + ".json")).read_text())

def validate():
    clients = {x["id"] for x in load("clients")}
    contacts = {x["id"]: x for x in load("contacts")}
    inquiries = load("inquiries")
    appointments = {x["id"]: x for x in load("appointments")}
    for contact in contacts.values():
        assert contact["client_id"] in clients
    for inquiry in inquiries:
        assert inquiry["client_id"] in clients
        assert contacts[inquiry["contact_id"]]["client_id"] == inquiry["client_id"]
    for appointment in appointments.values():
        assert contacts[appointment["contact_id"]]["client_id"] == appointment["client_id"]
    for transaction in load("transactions"):
        assert transaction["client_id"] in clients
        assert contacts[transaction["contact_id"]]["client_id"] == transaction["client_id"]
        if transaction.get("appointment_id"):
            assert appointments[transaction["appointment_id"]]["client_id"] == transaction["client_id"]
    assert len({i["id"] for i in inquiries}) == len(inquiries)
    return len(clients), len(contacts), len(inquiries)

def pipeline(as_of="2026-10-27T17:00:00Z", sla_minutes=120):
    validate()
    now = datetime.fromisoformat(as_of.replace("Z","+00:00"))
    output = []
    for inquiry in load("inquiries"):
        received = datetime.fromisoformat(inquiry["received_at"].replace("Z","+00:00"))
        response = inquiry.get("first_response_at")
        overdue = not response and inquiry["status"] not in ("booked","lost") and now > received + timedelta(minutes=sla_minutes)
        output.append({
            "inquiry_id": inquiry["id"],
            "client_id": inquiry["client_id"],
            "status": inquiry["status"],
            "next_action": "escalate_overdue" if overdue else ("await_response" if not response else "review_qualification"),
            "send_message": False,
            "dedupe_key": "inquiry:" + inquiry["id"]
        })
    return output

if __name__ == "__main__":
    print("Validated clients, contacts, inquiries:", validate())
    print(json.dumps(pipeline(), indent=2))
