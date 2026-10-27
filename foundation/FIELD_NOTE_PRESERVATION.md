# Existing Field Note: preservation and verification

Verified from the repository's `main` source before creating this branch:
- Active route: `/field-note` -> `FieldNoteEmbed` in `src/app/routes.ts`.
- Embedded Tally form ID: `PdeLB5`, defined in `src/app/pages/FieldNoteEmbed.tsx`.
- Direct form fallback: `https://tally.so/r/PdeLB5`.
- Other routes: `/field-note/lumen-pilates` and `/field-note/thanks`.
- `src/app/pages/FieldNoteRequest.tsx` is an older unmounted form; its submit handler navigates to thanks without sending the form data. Do not activate it without implementing a backend.
- Current embed copy claims submission reaches Airtable/automation. This is NOT verified by GitHub source alone.

## Preservation strategy
1. Do not change `src/app/pages/FieldNoteEmbed.tsx`, `src/app/routes.ts`, or any active website file in this foundation branch.
2. Back up the Tally form configuration and Make scenario separately in their respective services (not in public Git).
3. Run a test submission with a clearly marked TEST name and unique timestamp.
4. Verify Tally receipt, Airtable record, Make scenario execution and any notifications. Record timestamps and failure details.
5. Confirm no duplicate records, and verify consent/notification behavior.
6. Confirm mobile iframe and direct-form fallback.
7. Only after those checks, migrate branding or intake routing on a separate reviewed change.

## Status
Source-level preservation: complete. End-to-end external integration test: NOT RUN. Live deployment validation: NOT RUN.
