# Lead-to-Booking v1: persistent local demo

A local-only, Python 3 standard-library demo. Fictional businesses, no real customer information, and **no outbound notifications**. Not an authenticated or production-ready system.

## Run

```bash
cd foundation/products/lead-to-booking
python3 -m unittest discover -p test_server.py -v
python3 server.py
```

Open **http://127.0.0.1:8765** on the same computer. Stop the server with Ctrl+C. The `demo.sqlite3` file stores inquiries and appointments across page refreshes and server restarts. To reset, stop the server and delete `demo.sqlite3`.

## Included

- Two fictional businesses with separate lead views
- Inquiry capture with `(business_id, source, submission_id)` duplicate protection
- Status progression `new → contacted → qualified → booked`, or `lost`
- Booking creates a separate appointment record with date, service, and status
- Scheduled appointments can become `completed`, `cancelled`, or `no_show`
- Business-specific inquiry, booking, conversion, and overdue-response metrics
- Responsive dashboard, local SQLite persistence, and seven backend tests

## Important limits

- Demo is bound to `127.0.0.1`, not available publicly; no authentication, CSRF defense, audit log, or production-grade tenant authorization. Do not deploy it as a public server or enter real PII.
- The lead's `booked` status represents a booking created; appointment cancellations are tracked separately and do not automatically reopen the lead. Metrics report lead-to-booking conversion, not attendance or net active appointments.
- This is a standalone SQLite demonstration; it does not execute the shared PostgreSQL schema and does not integrate with Tally, Airtable, or Make.
- There are no automated follow-up messages, only overdue counts.
- `server.py` and `app.html` are the persistent version. Earlier `dashboard.html` and `engine.py` remain prototype references.
