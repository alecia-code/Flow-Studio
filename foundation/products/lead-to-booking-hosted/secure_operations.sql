-- Secure mutations for Lead-to-Booking, callable only by authenticated members.
revoke insert,update,delete on public.ltb_businesses,public.ltb_memberships,public.ltb_contacts,public.ltb_inquiries,public.ltb_appointments from anon,authenticated;
grant select on public.ltb_businesses,public.ltb_memberships,public.ltb_contacts,public.ltb_inquiries,public.ltb_appointments to authenticated;
create or replace function public.ltb_capture(p_business uuid,p_name text,p_source text,p_external text)
returns jsonb language plpgsql security definer set search_path='' as $$
declare v_contact uuid;v_id uuid;v_existing uuid;
begin
 if auth.uid() is null or not private.ltb_is_member(p_business) then raise exception 'Not authorized' using errcode='42501';end if;
 if length(btrim(coalesce(p_name,''))) not between 1 and 120 or length(btrim(coalesce(p_source,''))) not between 1 and 80 or length(btrim(coalesce(p_external,''))) not between 1 and 120 then raise exception 'Invalid inquiry';end if;
 select id into v_existing from public.ltb_inquiries where business_id=p_business and source=btrim(p_source) and external_id=btrim(p_external);
 if v_existing is not null then return jsonb_build_object('id',v_existing,'created',false);end if;
 insert into public.ltb_contacts(business_id,name) values(p_business,btrim(p_name)) returning id into v_contact;
 insert into public.ltb_inquiries(business_id,contact_id,source,external_id) values(p_business,v_contact,btrim(p_source),btrim(p_external)) on conflict(business_id,source,external_id) do nothing returning id into v_id;
 if v_id is null then
  delete from public.ltb_contacts where id=v_contact;
  select id into v_id from public.ltb_inquiries where business_id=p_business and source=btrim(p_source) and external_id=btrim(p_external);
  return jsonb_build_object('id',v_id,'created',false);
 end if;
 return jsonb_build_object('id',v_id,'created',true);
end $$;
create or replace function public.ltb_advance(p_inquiry uuid,p_status text)
returns void language plpgsql security definer set search_path='' as $$
declare v public.ltb_inquiries%rowtype;
begin
 select * into v from public.ltb_inquiries where id=p_inquiry for update;
 if not found or auth.uid() is null or not private.ltb_is_member(v.business_id) then raise exception 'Not authorized' using errcode='42501';end if;
 if not ((v.status='new' and p_status in ('contacted','lost')) or (v.status='contacted' and p_status in ('qualified','lost')) or (v.status='qualified' and p_status='lost')) then raise exception 'Invalid transition';end if;
 update public.ltb_inquiries set status=p_status,first_response_at=case when p_status='contacted' and first_response_at is null then now() else first_response_at end where id=p_inquiry;
end $$;
create or replace function public.ltb_book(p_inquiry uuid,p_starts timestamptz,p_service text)
returns uuid language plpgsql security definer set search_path='' as $$
declare v public.ltb_inquiries%rowtype;v_id uuid;
begin
 select * into v from public.ltb_inquiries where id=p_inquiry for update;
 if not found or auth.uid() is null or not private.ltb_is_member(v.business_id) then raise exception 'Not authorized' using errcode='42501';end if;
 if v.status not in ('contacted','qualified') then raise exception 'Lead must be contacted or qualified';end if;
 if p_starts is null or length(btrim(coalesce(p_service,''))) not between 1 and 120 then raise exception 'Invalid appointment';end if;
 insert into public.ltb_appointments(business_id,inquiry_id,starts_at,service) values(v.business_id,p_inquiry,p_starts,btrim(p_service)) returning id into v_id;
 update public.ltb_inquiries set status='booked' where id=p_inquiry;
 return v_id;
end $$;
create or replace function public.ltb_appointment_status(p_appointment uuid,p_status text)
returns void language plpgsql security definer set search_path='' as $$
declare v public.ltb_appointments%rowtype;
begin
 select * into v from public.ltb_appointments where id=p_appointment for update;
 if not found or auth.uid() is null or not private.ltb_is_member(v.business_id) then raise exception 'Not authorized' using errcode='42501';end if;
 if v.status<>'scheduled' or p_status not in ('completed','cancelled','no_show') then raise exception 'Invalid appointment transition';end if;
 update public.ltb_appointments set status=p_status where id=p_appointment;
end $$;
revoke all on function public.ltb_capture(uuid,text,text,text),public.ltb_advance(uuid,text),public.ltb_book(uuid,timestamptz,text),public.ltb_appointment_status(uuid,text) from public,anon;
grant execute on function public.ltb_capture(uuid,text,text,text),public.ltb_advance(uuid,text),public.ltb_book(uuid,timestamptz,text),public.ltb_appointment_status(uuid,text) to authenticated;
