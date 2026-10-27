-- Jenna Alecia Studios reusable foundation v1 (PostgreSQL/Supabase compatible)
-- Use separate databases per client initially. Never put real customer data in public Git.
create table if not exists clients (
 id uuid primary key, name text not null, industry text not null,
 status text not null default 'prospect' check(status in ('prospect','onboarding','active','paused','closed')),
 timezone text not null default 'America/Chicago', created_at timestamptz not null default now()
);
create table if not exists contacts (
 id uuid primary key, client_id uuid not null references clients(id),
 full_name text not null, email text, phone text,
 lifecycle_status text not null default 'lead' check(lifecycle_status in ('lead','customer','inactive')),
 email_consent boolean not null default false, sms_consent boolean not null default false,
 opted_out_at timestamptz, external_id text,
 created_at timestamptz not null default now(), unique(client_id,external_id)
);
create table if not exists inquiries (
 id uuid primary key, client_id uuid not null references clients(id),
 contact_id uuid not null references contacts(id), source text not null,
 status text not null default 'new' check(status in ('new','contacted','qualified','booked','lost')),
 received_at timestamptz not null, first_response_at timestamptz,
 assigned_to text, estimated_value numeric(12,2), lost_reason text, external_id text,
 unique(client_id,external_id)
);
create table if not exists appointments (
 id uuid primary key, client_id uuid not null references clients(id),
 contact_id uuid not null references contacts(id), inquiry_id uuid references inquiries(id),
 starts_at timestamptz not null, status text not null check(status in ('scheduled','completed','cancelled','no_show')),
 service_name text, external_id text, unique(client_id,external_id)
);
create table if not exists transactions (
 id uuid primary key, client_id uuid not null references clients(id),
 contact_id uuid references contacts(id), appointment_id uuid references appointments(id),
 amount numeric(12,2) not null, currency char(3) not null default 'USD',
 status text not null check(status in ('pending','paid','refunded','void')),
 paid_at timestamptz, external_id text, unique(client_id,external_id)
);
create table if not exists campaigns (
 id uuid primary key, client_id uuid not null references clients(id),
 name text not null, status text not null check(status in ('draft','active','paused','completed')),
 channel text not null check(channel in ('email','sms','manual')),
 inactivity_days integer check(inactivity_days > 0)
);
create table if not exists activities (
 id uuid primary key, client_id uuid not null references clients(id),
 contact_id uuid references contacts(id), inquiry_id uuid references inquiries(id),
 campaign_id uuid references campaigns(id), activity_type text not null,
 status text not null check(status in ('pending','completed','failed')),
 scheduled_at timestamptz, completed_at timestamptz, notes text
);
create table if not exists automation_events (
 id uuid primary key, client_id uuid not null references clients(id),
 event_type text not null, source text not null, source_event_id text not null,
 status text not null check(status in ('received','processing','succeeded','failed')),
 attempt_count integer not null default 0, error_message text, occurred_at timestamptz not null default now(),
 unique(client_id,source,source_event_id)
);
create table if not exists field_note_submissions (
 id uuid primary key, source text not null default 'tally',
 source_submission_id text unique, business_name text, contact_name text,
 email text, submitted_at timestamptz not null default now(),
 review_status text not null default 'new' check(review_status in ('new','reviewing','responded','qualified','archived')),
 recommended_product text check(recommended_product in ('lead_to_booking','business_pulse','retention_reactivation') or recommended_product is null)
);
create index if not exists idx_inquiries_client_status on inquiries(client_id,status);
create index if not exists idx_appointments_client_date on appointments(client_id,starts_at);
create index if not exists idx_activities_client_schedule on activities(client_id,status,scheduled_at);
-- IMPORTANT: This schema does not configure RLS. Before shared/multi-tenant hosting,
-- implement and test row-level security and server-side authorization for EVERY table.
