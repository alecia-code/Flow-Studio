# Jenna Alecia Studios | Shared foundation v1

This is a **non-production reference kit**, not a live CRM or deployed database. It is additive and does not alter the website.

## Contents
- `schema.sql`: PostgreSQL data model for all three product pilots plus separate studio Field Note submissions.
- `status-values.json`: controlled lifecycle values.
- `demo/*.json`: entirely fictional, non-contactable demonstration data.
- `config/client.example.json`: per-client settings template (never put credentials here).
- `FIELD_NOTE_PRESERVATION.md`: existing website route and intake verification.

## Design decisions
- `clients` means Jenna Alecia Studios' paying business customers. `contacts` means their end customers.
- `field_note_submissions` is separate from client inquiries.
- Status values are stable machine-readable identifiers. Map to friendly display labels in the UI.
- All timestamps are UTC; show them in each client's configured timezone.
- External source IDs and event IDs support deduplication and safe retries.
- Consent defaults to false. Demo mode sends no messages.
- Each real client should initially have isolated storage. Do not put actual PII in this public repository.
- SQL constraints validate statuses, but cross-client foreign-key consistency also needs enforcement before production.
- Shared database hosting requires tested row-level security, authorization, backups, secrets management and retention rules.

## Next step
Import fictional demo data into a local test database, test joins, ingestion and KPI definitions, then connect ONE real pilot only after privacy/security and access review. Do not assume the Tally-to-Airtable/Make pipeline works until an end-to-end test is completed.
