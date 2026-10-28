-- Studymatch: run this once in Supabase -> SQL Editor

create table if not exists public.docs (
  collection text not null,
  id text not null,
  data jsonb not null default '{}',
  owner uuid not null default auth.uid(),
  created_at timestamptz not null default now(),
  primary key (collection, id)
);

alter table public.docs enable row level security;

-- Everyone signed in can read profiles, materials and essays.
-- Chats are readable only by the sender and the receiver.
-- "Saved messages" (data/users/<id>) are readable only by their owner.
create policy "docs_read" on public.docs for select to authenticated using (
  case
    when collection like 'data/users/%' then owner = auth.uid()
    when collection = 'msgs' then (data->>'from' = auth.uid()::text or data->>'to' = auth.uid()::text)
    else true
  end
);

create policy "docs_insert" on public.docs for insert to authenticated with check (
  owner = auth.uid()
  and (collection <> 'members' or id = auth.uid()::text)
  and (collection <> 'msgs' or data->>'from' = auth.uid()::text)
  and (collection not like 'data/users/%' or collection = 'data/users/' || auth.uid()::text)
);

create policy "docs_update" on public.docs for update to authenticated
  using (owner = auth.uid()) with check (owner = auth.uid());

create policy "docs_delete" on public.docs for delete to authenticated
  using (owner = auth.uid());

-- Live updates
alter publication supabase_realtime add table public.docs;

-- File storage for photos, files, essays and voice messages
insert into storage.buckets (id, name, public) values ('uploads', 'uploads', true)
on conflict (id) do nothing;

create policy "uploads_insert" on storage.objects for insert to authenticated with check (
  bucket_id = 'uploads' and (storage.foldername(name))[1] = auth.uid()::text
);
