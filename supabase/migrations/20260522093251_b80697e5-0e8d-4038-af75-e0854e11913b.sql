create table public.lp_access_requests (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  name text,
  firm text,
  created_at timestamptz not null default now()
);

alter table public.lp_access_requests enable row level security;

create policy "Anyone can request LP access"
on public.lp_access_requests
for insert
to anon, authenticated
with check (true);
