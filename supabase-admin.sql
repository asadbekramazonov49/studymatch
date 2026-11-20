-- Studymatch admin + fixes. Run once in Supabase -> SQL Editor (after supabase.sql and supabase-update.sql).

create table if not exists public.admins (user_id uuid primary key);
create table if not exists public.bans (user_id uuid primary key, created_at timestamptz default now());
alter table public.admins enable row level security;
alter table public.bans enable row level security;

create or replace function public.is_admin() returns boolean
language sql security definer set search_path = public stable
as $$ select exists (select 1 from public.admins where user_id = auth.uid()) $$;

create or replace function public.is_banned() returns boolean
language sql security definer set search_path = public stable
as $$ select exists (select 1 from public.bans where user_id = auth.uid()) $$;

-- Ban: removes everything the user created and blocks new posts.
create or replace function public.ban_user(target uuid) returns void
language plpgsql security definer set search_path = public
as $$ begin
  if not public.is_admin() then raise exception 'not allowed'; end if;
  delete from public.docs where owner = target;
  insert into public.bans(user_id) values (target) on conflict do nothing;
end $$;

create or replace function public.unban_user(target uuid) returns void
language plpgsql security definer set search_path = public
as $$ begin
  if not public.is_admin() then raise exception 'not allowed'; end if;
  delete from public.bans where user_id = target;
end $$;

create or replace function public.list_bans() returns table(user_id uuid, created_at timestamptz)
language plpgsql security definer set search_path = public
as $$ begin
  if not public.is_admin() then raise exception 'not allowed'; end if;
  return query select b.user_id, b.created_at from public.bans b order by b.created_at desc;
end $$;

-- Policies (replace the earlier ones)
drop policy if exists "docs_insert" on public.docs;
create policy "docs_insert" on public.docs for insert to authenticated with check (
  owner = auth.uid()
  and not public.is_banned()
  and (collection <> 'members' or id = auth.uid()::text)
  and (collection not in ('msgs','requests','sessions') or data->>'from' = auth.uid()::text)
  and (collection not in ('uni_info','tests') or public.is_admin())
  and (collection not like 'data/users/%' or collection = 'data/users/' || auth.uid()::text)
);

drop policy if exists "docs_update" on public.docs;
create policy "docs_update" on public.docs for update to authenticated
  using (owner = auth.uid() or public.is_admin() or (collection in ('requests','sessions') and data->>'to' = auth.uid()::text))
  with check (owner = auth.uid() or public.is_admin() or (collection in ('requests','sessions') and data->>'to' = auth.uid()::text));

drop policy if exists "docs_delete" on public.docs;
create policy "docs_delete" on public.docs for delete to authenticated using (
  owner = auth.uid() or public.is_admin() or (collection in ('requests','sessions') and data->>'to' = auth.uid()::text)
);

-- Make yourself admin AFTER you create your admin user (Authentication -> Users -> Add user).
-- Replace the id with that user's UID, then run:
-- insert into public.admins (user_id) values ('PASTE-YOUR-UID-HERE');
