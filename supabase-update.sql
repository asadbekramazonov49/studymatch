-- Studymatch update: run once in Supabase -> SQL Editor.
-- Adds private visibility for connection requests and session bookings,
-- and lets the receiver answer them.

drop policy if exists "docs_read" on public.docs;
create policy "docs_read" on public.docs for select to authenticated using (
  case
    when collection like 'data/users/%' then owner = auth.uid()
    when collection in ('msgs','requests','sessions') then
      (data->>'from' = auth.uid()::text or data->>'to' = auth.uid()::text)
    else true
  end
);

drop policy if exists "docs_insert" on public.docs;
create policy "docs_insert" on public.docs for insert to authenticated with check (
  owner = auth.uid()
  and (collection <> 'members' or id = auth.uid()::text)
  and (collection not in ('msgs','requests','sessions') or data->>'from' = auth.uid()::text)
  and (collection not like 'data/users/%' or collection = 'data/users/' || auth.uid()::text)
);

drop policy if exists "docs_update" on public.docs;
create policy "docs_update" on public.docs for update to authenticated
  using (owner = auth.uid() or (collection in ('requests','sessions') and data->>'to' = auth.uid()::text))
  with check (owner = auth.uid() or (collection in ('requests','sessions') and data->>'to' = auth.uid()::text));

drop policy if exists "docs_delete" on public.docs;
create policy "docs_delete" on public.docs for delete to authenticated using (
  owner = auth.uid() or (collection in ('requests','sessions') and (data->>'to' = auth.uid()::text))
);
