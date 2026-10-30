# JAS design queue integration (prototype)

This is an isolated, read-only first stage for the JAS Airtable → Canva workflow.

## Current behavior
- `GET /api/internal/design-queue` requires `Authorization: Bearer <JAS_QUEUE_API_KEY>`.
- Reads Airtable Agent Prospect Queue using `AIRTABLE_PAT`.
- Returns only records where Approval = `Approved for Draft`, Canva Design Status = `Ready for Design`, and Canva Design URL is empty.
- Does **not** modify Airtable, create Canva designs, send email, or touch the public website.
- Returns 503 until both secrets are configured.

## Setup (preview environment only)
Configure `AIRTABLE_PAT` with read-only access to the JAS Airtable base and `JAS_QUEUE_API_KEY` as a separate random secret in Vercel project settings. Do not commit secrets or put them in client-side `VITE_` variables. Use a preview deployment to test first.

## Canva blocker
Canva Connect API can copy designs (preview feature), but server-side personalization of editable text is provided by Autofill. Canva's Autofill endpoint requires an eligible Canva plan; the connected account's Autofill attempt returned a plan restriction. Canva MCP editing transactions used interactively in ChatGPT are **not** a documented substitute for unattended server-side text edits. Do not wire automatic design creation or set `Ready for Review` until a supported personalization route is confirmed and independently verified.

## Future stages
1. Confirm Canva account entitlement and OAuth access.
2. Add a protected worker using supported Canva APIs.
3. Verify final title, personalized content, and persistent design link.
4. Update Airtable status/link only after successful verification.
5. Add retry/idempotency and a controlled preview test. Keep sending manual.
