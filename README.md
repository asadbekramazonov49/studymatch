# Studymatch

Study partners and co-founders for students in Uzbekistan and beyond.
React + TypeScript + Vite + Tailwind CSS, Supabase for data. English, Russian and Uzbek.

## Run locally
```bash
npm install
npm run dev
```
Without Supabase keys the site runs in demo mode (data stays in your browser).

## Supabase
1. Create a project, enable **Authentication → Sign In / Providers → Allow anonymous sign-ins**.
2. In **SQL Editor** run `supabase.sql`, then `supabase-update.sql` (connection requests, bookings, private chats).
3. Add two repository secrets on GitHub: `VITE_SUPABASE_URL` (just `https://xxxx.supabase.co`) and `VITE_SUPABASE_ANON_KEY`.
4. Push to `main`; the workflow builds and deploys to GitHub Pages.

## Notes
- Calls use WebRTC with Supabase Realtime for signalling and a public STUN server. Some strict networks need a TURN server.
- University ranks come from QS World University Rankings 2027 (top 100 and ties). Extend the list in `src/App.tsx` (`QS` block).
- Texts live in `src/i18n.ts` (UI) and `src/data.ts` (majors, guides, schools).
