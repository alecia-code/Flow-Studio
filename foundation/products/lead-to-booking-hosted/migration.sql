-- Lead-to-Booking v1 secure preview: Supabase/PostgreSQL migration.
-- Apply to a NEW Supabase project only. Do not run against Flow OS.
create extension if not exists pgcrypto;
create table if not exists public.ltb_businesses (
 id uuid primary key default gen_random_uuid(),
 name text not null check (length(name) between 1 and 120),
 created_at timestamptz not null default now()
);
create table if not exists public.ltb_memberships (
 business_id uuid not null references public.ltb_businesses(id) on delete cascade,
 user_id uuid not null references auth.users(id) on delete cascade,
 role text not null default 'owner' check (role in ('owner','staff')),
 primary key(business_id,user_id)
);
create table if not exists public.ltb_contacts (
 id uuid primary key default gen_random_uuid(),
 business_id uuid not null references public.ltb_businesses(id) on delete cascade,
 name text not null check(length(name) between 1 and 120)),
 unique(id,business_id)
);
create table if not exists public.ltb_inquiries (
 id uuid primary key default gen_random_uuid(),
 business_id uuid not null references public.ltb_businesses(id) on delete cascade,
 contact_id uuid not null,
 source text not null,
 external_id text not null,
 status text not null default 'new' check(status in ('new','contacted','qualified','booked','lost')),
 received_at timestamptz not null default now(),
 first_response_at timestamptz,
 unique(business_id,source,external_id),
 unique(id,business_id),
 foreign key(contact_id,business_id) references public.ltb_contacts(id,business_id)
);
create table if not exists public.ltb_appointments (
 id uuid primary key default gen_random_uuid(),
 business_id uuid not null references public.ltb_businesses(id) on delete cascade,
 inquiry_id uuid not null,
 starts_at timestamptz not null,
 service text not null check(length(service) between 1 and 120),
 status text not null default 'scheduled' check(status in ('scheduled','completed','cancelled','no_show')),
 unique(inquiry_id),
 foreign key(inquiry_id,business_id) references public.ltb_inquiries(id,business_id)
);
create or replace function public.ltb_is_member(target_business uuid)
returns boolean language sql stable security definer set search_path = ''
as $$ select exists(select 1 from public.ltb_memberships m where m.business_id=target_business and m.user_id=(select auth.uid())) $$;
revoke all on function public.ltb_is_member(uuid) from public;
grant execute on function public.ltb_is_member(uuid) to authenticated;
alter table public.ltb_businesses enable row level security;
alter table public.ltb_memberships enable row level security;
alter table public.ltb_contacts enable row level security;
alter table public.ltb_inquiries enable row level security;
alter table public.ltb_appointments enable row level security;
create policy ltb_business_select on public.ltb_businesses for select to authenticated using (public.ltb_is_member(id));
create policy ltb_memberships_select on public.ltb_memberships for select to authenticated using (public.ltb_is_member(business_id));
create policy ltb_contacts_member on public.ltb_contacts for all to authenticated using (public.ltb_is_member(business_id)) with check (public.ltb_is_member(business_id));
create policy ltb_inquiries_member on public.ltb_inquiries for all to authenticated using (public.ltb_is_member(business_id)) with check (public.ltb_is_member(business_id));
create policy ltb_appointments_member on public.ltb_appointments for all to authenticated using (public.ltb_is_member(business_id)) with check (public.ltb_is_member(business_id));
-- Bootstrap membership from trusted admin context only, never from an anonymous browser.
-- Before production, add audited server-side transition/booking RPCs and restrict direct updates
-- so clients cannot bypass allowed status transitions or booking invariants.
