# Lead-to-Booking v1 | isolated demonstration

This folder contains an executable Python 3 standard-library demo. It does not call Tally, Airtable, Make, or any messaging provider. It does not modify the website.

Run:
```bash
cd foundation/products/lead-to-booking
python3 -m unittest -v
python3 engine.py
```

## Flow
1. Seed two fictional clients and their fictional contacts.
2. Ingest inquiries with idempotency key `(client, source, external_id)`.
3. Queue a two-hour response deadline.
4. Mark contacted, qualified, and booked; record a booking.
5. Surface overdue inquiries and per-client conversion metrics.

## Boundaries
- This is a demo engine, not a hosted API, visual CRM, or production integration.
- SQLite uses an in-memory database, reset on every run.
- No emails or texts are sent.
- A production version needs authenticated API, durable storage, permissions, audit logs, consent, retries, client-specific rules, and real integration tests.
- The pre-existing `foundation/schema.sql` is a separate PostgreSQL design; it is **not** the schema executed by this demo.
