# Protected Lead-to-Booking preview (pre-deployment scaffold)

This directory is intentionally separate from the Jenna Alecia Studios marketing app. Nothing here is deployed.

## Proposed stack
- Separate Vercel project (not the existing website project)
- Supabase Auth (email magic link or password)
- Supabase PostgreSQL with row-level security and membership-scoped access
- New isolated Supabase project, no Flow OS/Tally/Make integration

## Before hosting
1. Connect Supabase and create a dedicated development project.
2. Review and apply `migration.sql`.
3. Provision a demo user and business membership from an admin-only context.
4. Implement the authenticated browser client and server-side booking/status RPCs.
5. Test access denial without a session and between separate business accounts.
6. Create a separate Vercel project and configure only publishable URL and anon/publishable key. Never expose a Supabase service-role key.
7. Confirm preview deployment protection and test with fictional records before sharing.

The current Python/SQLite demo remains available at `../lead-to-booking/`. Do not deploy it publicly.
