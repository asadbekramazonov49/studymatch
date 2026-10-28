# Studymatch

Study partners and startup co-founders for students. React + TypeScript + Vite + Tailwind CSS.

## Run locally
```bash
npm install
npm run dev
```

## Publish on GitHub Pages
```bash
git init
git add .
git commit -m "Studymatch"
git branch -M main
git remote add origin https://github.com/USERNAME/studymatch.git
git push -u origin main
```
Then on GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
After the workflow finishes, your site is at `https://USERNAME.github.io/studymatch/`.

To use your own domain (for example StudyMatch.com): buy it, then add it under **Settings → Pages → Custom domain** and set the DNS records GitHub shows.

## Data
`src/shim.ts` is a demo backend that keeps data in the visitor's browser, so people do not see each other's profiles.
To share profiles, chat and files between users, replace the `db`, `assets`, `downloads` and `user` functions in `src/shim.ts` with Supabase or Firebase.
