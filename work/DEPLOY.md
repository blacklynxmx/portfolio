# Deploy Guide — Vercel

One deploy target, no alternatives. Vercel Hobby (free tier). 15–25 minutes end-to-end if you've never done it before, faster if you have.

---

## What you need before you start

1. A **GitHub account** (free). If you don't have one, [sign up here](https://github.com/join) — you'll create a repo for the portfolio.
2. A **Vercel account** (free). [Sign up here](https://vercel.com/signup) using the GitHub account from step 1 — this links them automatically.
3. A **domain** (optional but strongly recommended). `.com` is ~$12/year at Namecheap, Porkbun, or Cloudflare Registrar. If you don't buy one, Vercel gives you `davidgmendieta.vercel.app` for free — the site works, the URL is just less polished.

That's it. No credit card required for any of this.

---

## Step 1 — Pre-deploy cleanup (5 min)

Before uploading, replace the placeholder domain in three files:

### If you're buying `davidgmendieta.com` (or any custom domain)

In your unzipped portfolio folder, search and replace `davidgmendieta.com` with your actual domain in:

- `index.html`
- `about.html`
- `work/occ.html`
- `es/index.html`
- `es/about.html`
- `es/work/occ.html`
- `sitemap.xml`
- `robots.txt`

On macOS with `sed`:

```bash
cd path/to/portfolio
find . -type f \( -name "*.html" -o -name "*.xml" -o -name "*.txt" \) \
  -exec sed -i '' 's|davidgmendieta\.com|yourdomain.com|g' {} +
```

On Linux / WSL:

```bash
find . -type f \( -name "*.html" -o -name "*.xml" -o -name "*.txt" \) \
  -exec sed -i 's|davidgmendieta\.com|yourdomain.com|g' {} +
```

### If you're NOT buying a domain yet

Skip this step. The site will work on `your-project-name.vercel.app`. You can point a real domain later and re-deploy in 2 minutes. To update the URLs later, you'll run the same `sed` command above, then commit and push.

### Verify before moving on

Quick sanity check — open `index.html` in a browser. You should see:
- Hero with your name and tagline
- 5 logos in the experience strip (FOVISSSTE, Santander, Movistar, OCC, Compartamos) — they should be visible as light-grey silhouettes
- The OCC featured card at the top of the grid, 5 "Coming soon" cards below
- If you see cramped black text on black background, `portfolio-extras.css` isn't loading — check the path in the `<link>` tag

---

## Step 2 — Create a GitHub repo (5 min)

1. Go to [github.com/new](https://github.com/new).
2. Repository name: `portfolio` (or whatever you want — users will never see it).
3. **Public or private** — your call. Public is simpler for Vercel to connect; private also works but Vercel needs explicit permission. If this is your first deploy, go public.
4. Leave "Add a README file" **unchecked** — we have our own.
5. Click **Create repository**.

Then push the portfolio code. GitHub shows you the exact commands on the empty-repo page — they look like:

```bash
cd path/to/portfolio
git init
git add .
git commit -m "Initial portfolio — Phase 1"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

If `git` asks you to authenticate, install [GitHub CLI](https://cli.github.com/) (`brew install gh`, then `gh auth login`) — it handles the token dance automatically.

---

## Step 3 — Deploy to Vercel (3 min)

1. Go to [vercel.com/new](https://vercel.com/new).
2. Under "Import Git Repository" click **Import** next to your `portfolio` repo.
3. Vercel auto-detects it as a static site. You'll see a config screen with:
   - **Framework Preset** → "Other" (leave it)
   - **Root Directory** → `./` (leave it)
   - **Build Command** → empty (leave it)
   - **Output Directory** → empty (leave it)
4. Click **Deploy**.
5. Wait ~30 seconds. Vercel will show "Congratulations!" with a preview URL like `portfolio-abc123.vercel.app`.

Open the URL. Everything should look identical to your local preview. If not, see "Troubleshooting" below.

---

## Step 4 — Point your custom domain (10 min)

Skip this if you didn't buy a domain.

1. In Vercel, go to your project → **Settings** → **Domains**.
2. Type your domain (`davidgmendieta.com`) and click **Add**.
3. Vercel will show you DNS records to add. Two scenarios:

### If your domain is on Cloudflare, Namecheap, Porkbun, GoDaddy…

Add the records Vercel tells you to (typically an `A` record for root and a `CNAME` for `www`). Propagation takes 5–30 minutes. Vercel pings you when it's live.

### If your domain is on Cloudflare specifically

Set the Cloudflare DNS records to **DNS only** (grey cloud, not orange). Vercel's own edge handles HTTPS — you don't want Cloudflare proxying on top.

Once the domain resolves, Vercel issues an SSL certificate automatically within a couple of minutes. You'll have `https://yourdomain.com` live with no further action.

---

## Step 5 — Enable Vercel Analytics (1 min)

Free tier includes analytics with 2,500 events/month — plenty for a portfolio.

1. In your project → **Analytics** tab.
2. Click **Enable Analytics**.
3. For a purely-static site the script gets injected automatically — no code change needed.

---

## Step 6 — Post-deploy verification checklist

Visit the live site (yours or `*.vercel.app`) and verify:

- [ ] `/` shows the EN home, 5 logos visible in the strip
- [ ] `/es/` shows the ES home with Mexican Spanish
- [ ] `/about.html` and `/es/about.html` both render correctly
- [ ] `/work/occ.html` and `/es/work/occ.html` render the full OCC case
- [ ] Language toggle top-right actually swaps EN ↔ ES
- [ ] `/robots.txt` is reachable (`yourdomain.com/robots.txt`)
- [ ] `/sitemap.xml` is reachable (`yourdomain.com/sitemap.xml`)
- [ ] Open DevTools → Network, reload, confirm all 3 stylesheets load (`base.css`, `case.css`, `portfolio-extras.css`)
- [ ] Test OG preview: paste your link into LinkedIn post editor, Slack DM to yourself, or [opengraph.xyz](https://www.opengraph.xyz/) — you should see the portrait image and correct title/description
- [ ] Mobile check: open on your phone, nav menu should collapse into the "Menu" button, everything should reflow cleanly

**If anything fails**, go to Vercel → Deployments → click the latest deploy → **Logs** tab. Errors are explicit.

---

## Step 7 — Submit sitemap to Google (2 min, optional but recommended)

Once the site is live on your custom domain:

1. Go to [Google Search Console](https://search.google.com/search-console).
2. Add your property (domain verification via DNS TXT record — Vercel makes this painless).
3. Under **Sitemaps** → submit `https://yourdomain.com/sitemap.xml`.
4. Google indexes within 3–14 days. You can check indexing status in the same console.

---

## Updating the site after deploy

Every `git push` to `main` triggers a new Vercel deploy automatically. Typical update flow:

```bash
# Edit files locally
git add .
git commit -m "Add Compartamos loan origination case"
git push
```

Vercel picks it up within 30 seconds. You can preview pull requests on separate URLs if you want (set up automatic in Vercel).

---

## Adding `/private/` case studies later

When you have a sensitive-data case study ready:

1. Create a folder with a non-guessable slug: `/private/compartamos-loan-full-k7b2wx/`
2. Put `index.html` inside it (so the URL stays clean: `yourdomain.com/private/compartamos-loan-full-k7b2wx/`)
3. Push. `vercel.json` automatically applies `X-Robots-Tag: noindex, nofollow` to anything under `/private/`
4. Share the URL only in direct applications — never publicly, never on LinkedIn

The URL slug should be random enough that it can't be guessed or crawled. Use [1password.com/password-generator](https://1password.com/password-generator/) with "PIN" set to 8–12 alphanumeric chars, lowercase, and prefix it with a readable label. Example: `compartamos-loan-full-k7b2wx` or `santander-crm-deepdive-p9m3tz`.

If you ever need real password protection (not just obscurity), Vercel supports Edge Middleware with Basic Auth in ~15 lines. Optional Phase 3.

---

## Post-deploy actions (don't skip)

Once the site is live:

1. **Update LinkedIn** → Contact &amp; basic info → Website → `https://yourdomain.com`
2. **Update CV variants** (Master ATS, Regulated Financial, UX Design Engineering) → Contact header → add `yourdomain.com` next to the Notion portfolio link, then eventually retire the Notion link
3. **Update active applications in flight** — if you've sent CVs in the last 2 weeks that still point to the Notion portfolio, send a short follow-up with the new URL. Not everyone, just the ones that moved to interview stage
4. **Add to email signature** — small thing, compounds

---

## Troubleshooting

**"The site is live but the styles look broken"**
Three stylesheets have to load in order: `base.css` → `case.css` → `portfolio-extras.css`. Check DevTools Network tab. If one 404s, the path in the `<link>` tag is wrong.

**"Logos show up but they're invisible / black on black"**
`portfolio-extras.css` isn't loading. That file has the `brightness(0) invert(0.82)` filter that forces logos to light-grey silhouettes on dark background.

**"Fonts don't load / I see Times New Roman everywhere"**
Google Fonts URL changed or is blocked. Check the `<link>` in each HTML's `<head>`. The Fraunces/Inter/JetBrains Mono families should all load from `fonts.googleapis.com`.

**"The EN/ES toggle doesn't go anywhere"**
Hrefs are hardcoded. If you're previewing on `*.vercel.app` with a different base path, hrefs like `/es/` resolve to the root domain. That's expected behavior on production.

**"My custom domain works but `www.` doesn't (or vice versa)"**
In Vercel Domain settings add both `yourdomain.com` and `www.yourdomain.com`, then set one as primary — Vercel 301-redirects the other.

**"Vercel Analytics dashboard is empty"**
Takes ~30 minutes after the first visit to populate. Also check that you're not the only visitor and that you enabled Analytics on the project (not the team).

---

Done. Total time if nothing fights you: 20 minutes to a live portfolio on a custom domain with analytics.
