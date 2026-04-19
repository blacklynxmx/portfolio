# Portfolio — David G. Mendieta

Static bilingual portfolio. No framework, no build step. Hand-rolled HTML + CSS + vanilla JS. Deploys as a static site on Vercel free tier.

---

## What's built (Phase 1 — this ZIP)

- **EN home** (`/index.html`) — hero, 6 case cards (1 active, 5 publishing soon), experience strip, about teaser
- **EN about** (`/about.html`) — bio, "how I think about the work" (3 callouts), career timeline, toolbox with asterisk-marked primary stack, contact
- **EN OCC case** (`/work/occ.html`) — full narrative: Before → Research (Track A candidates + Track B recruiters) → Roadmap (CAJA + Flex Pricing) → After → Impact → Reflection
- **ES mirror** (`/es/index.html`, `/es/about.html`, `/es/work/occ.html`) — native Mexican Spanish, not literal translation
- **Deploy config** (`vercel.json`, `robots.txt`, `sitemap.xml`)

## What's NOT in this ZIP (Phase 2)

The 5 remaining case studies still publish as "Coming soon" placeholders on the home grid:

- Compartamos · Loan origination (8d → 2h anchor story)
- Whisper BI · Zero-to-one research practice
- Santander · Neo Jupiter CRM
- Movistar · Dynamic landing pages
- Compartamos · Research toolkit &amp; design governance

Each will need its own `work/[case].html` + `es/work/[case].html`. The OCC case is the template — same section structure (Before → Research → Roadmap → After → Impact → Reflection), same class vocabulary, same narrative density.

`/private/` and `/es/private/` are empty folders reserved for long-form versions with sensitive material. URL strategy is security-by-obscurity: non-guessable paths like `/private/occ-compartamos-full-k7b2w/`, plus `X-Robots-Tag: noindex` enforced by `vercel.json`.

---

## File structure

```
portfolio/
├── index.html                   EN home
├── about.html                   EN about
├── work/
│   └── occ.html                 EN OCC case study
├── es/
│   ├── index.html               ES home
│   ├── about.html               ES about
│   └── work/
│       └── occ.html             ES OCC case study
├── styles/
│   ├── base.css                 Design tokens + layout primitives (UNTOUCHED)
│   ├── case.css                 Case study components (UNTOUCHED)
│   └── portfolio-extras.css     Logo filter fix + timeline + sub-track components
├── scripts/
│   └── main.js                  Mobile nav, reveal-on-scroll, year injection (UNTOUCHED)
├── assets/
│   ├── images/
│   │   ├── david-portrait.png   Circular transparent portrait (home hero)
│   │   └── david-linkedin.jpg   Formal portrait (about hero)
│   ├── logos/
│   │   ├── accenture.svg        Agency (not used in public UI, kept for private routes)
│   │   ├── compartamos.svg      End client
│   │   ├── fovissste.svg        End client
│   │   ├── gentera.svg          Holding (not used in public UI)
│   │   ├── infotec.svg          Agency (not used in public UI)
│   │   ├── leo-burnett.svg      Agency (not used in public UI)
│   │   ├── movistar.svg         End client
│   │   ├── occ.svg              End client
│   │   └── santander.svg        End client
│   └── cases/
│       └── occ/                 11 images (before/after shots, roadmap, revenue chart, 3 JTBD reference pages)
├── robots.txt                   Allow all + Disallow /private/
├── sitemap.xml                  6 URLs with hreflang alternates
├── vercel.json                  Security headers + cache control + X-Robots-Tag for /private/
├── README.md                    this file
└── DEPLOY.md                    step-by-step Vercel deploy guide
```

---

## Key decisions locked this phase

| Decision | Resolution |
|---|---|
| Class naming | Kebab-case (David's `base.css` vocabulary). No BEM. |
| Logo strategy — public | One logo per card, end-client only. Agency/holding referenced in text. |
| Logo strategy — private | Agency text + end-client logo (e.g., "Santander · engagement delivered via Leo Burnett"). |
| Experience strip | 5 end-client logos only: FOVISSSTE, Santander, Movistar, OCC, Compartamos. |
| OCC narrative | 5 locked blocks (Before → Research → Roadmap → After → Impact) + optional Reflection. Track A/B sit inside Research as `.case-sub-track` components. |
| Bilingual voice | EN written for global/LatAm tech recruiters. ES written in native Mexican Spanish, not literal translation. |
| Deploy target | Vercel free tier — no Netlify, no alternatives. |
| `/private/` protection | Obscure URLs + `X-Robots-Tag: noindex, nofollow` via `vercel.json`. |
| Wordmark | "D.G.Mendieta" with brand-colored period dot. |
| Fonts | Fraunces (display), Inter (body), JetBrains Mono (meta) — loaded from Google Fonts. |

---

## How CSS is organized

Three stylesheets, loaded in this order in every HTML:

1. **`base.css`** — David's design tokens, reset, typography, nav, hero, case grid, experience strip, footer. **Untouched** from Phase 1.
2. **`case.css`** — David's case study components: case hero, section blocks, callouts, quotes, figures, before/after, metrics, methods, personas, roadmap, case nav. **Untouched** from Phase 1.
3. **`portfolio-extras.css`** — additive-only. Adds:
   - Logo filter fix for dark background (forces white silhouette so Santander/Accenture/etc. don't disappear). Overrides `base.css` `.experience-strip` filter rule.
   - `.timeline` component (about page).
   - `.toolbox` component (about page).
   - `.case-sub-track` component (OCC Research Track A/B grouping).
   - `.segments-table` (OCC Track B recruiter segments).
   - `.hero-photo.round` variant (home page).
   - `.case-card-client-logo` helper (home grid).
   - `.impact-list` component (reusable for future cases).

**No HTML file imports anything else.** If you want to fold `portfolio-extras.css` into `base.css` / `case.css` later, that's a clean merge — nothing is duplicated or overridden ambiguously.

---

## Class vocabulary (quick reference)

Using David's `base.css` + `case.css` exact names:

**Nav &amp; layout** — `.nav`, `.nav-inner`, `.nav-brand`, `.nav-links`, `.nav-toggle`, `.lang-toggle`, `.container`, `.container-narrow`, `.container-prose`, `.section`, `.section-tight`, `.divider`, `.footer`, `.footer-inner`, `.footer-meta`, `.footer-links`

**Hero** — `.hero`, `.hero-inner`, `.hero-title`, `.hero-title .accent`, `.hero-lede`, `.hero-ctas`, `.hero-photo`, `.hero-photo.round`

**Typography** — `.eyebrow`, `.eyebrow-brand`, `.lede`, `.meta`, `.muted`, `a.inline`

**Buttons** — `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-ghost`, `.arrow`

**Tags** — `.tag`, `.tag-tech`, `.tag-brand`

**Home work grid** — `.case-grid`, `.case-card`, `.case-card.featured`, `.case-card-meta`, `.case-card-num`, `.case-card-client`, `.case-card-client-logo`, `.case-card-lede`, `.case-card-tags`, `.case-card-link`, `.case-card-visual`

**Experience strip** — `.experience-strip`, `.experience-label`

**Case hero** — `.case-hero`, `.case-hero-meta`, `.divider-dot`, `.num`, `.case-hero-client`, `.client-name`, `.case-title`, `.case-title .accent`, `.case-lede`, `.case-hero-meta-row`, `.label`, `.value`

**Case sections** — `.case-section`, `.section-eyebrow`, `.callout.for-engineering`, `.callout.for-research`, `.callout.for-business`, `.callout.for-ops`, `.callout-label`, `.quote`, `.quote-cite`

**Figures** — `.figure`, `.figure-wide`, `.figure-frame`, `.figure-legacy`, `.figure-caption`, `.browser-frame`, `.browser-frame-bar`, `.browser-frame-dots`, `.browser-frame-url`, `.before-after`, `.before-after-label`, `.before-after-label.after`

**Data** — `.metrics`, `.metric`, `.metric-value`, `.metric-value .accent`, `.metric-value .tech`, `.metric-label`, `.metric-sublabel`, `.methods`, `.method`, `.method-label`

**Personas** — `.personas`, `.persona`, `.persona.determined`, `.persona.inexperienced`, `.persona.desperate`, `.persona-archetype`, `.persona-quote`

**Roadmap** — `.roadmap`, `.roadmap-step`, `.roadmap-step.highlight`, `.roadmap-step-label`, `.roadmap-step-period`, `.roadmap-step-title`

**Case nav** — `.case-nav`, `.case-nav-inner`, `.case-nav-card`, `.case-nav-card.next`

**Added by `portfolio-extras.css`** — `.timeline`, `.timeline-item`, `.timeline-item.current`, `.timeline-period`, `.timeline-role`, `.timeline-client`, `.timeline-client .agency`, `.timeline-description`, `.case-sub-track`, `.case-sub-track-label`, `.case-sub-track-label.track-b`, `.segments-table`, `.segments-table-row`, `.toolbox`, `.toolbox-group`, `.toolbox-group-label`, `.impact-list`

---

## Things to verify once deployed

- [ ] Fonts load correctly (Fraunces serif, Inter sans, JetBrains Mono) — should be noticeable; if you see system fonts you have a Google Fonts load issue
- [ ] Logo silhouettes render visible on the dark background (not black-on-black)
- [ ] Experience strip shows 5 logos in a row, greyed-out baseline, brightens on hover
- [ ] Language toggle top-right swaps between `/` ↔ `/es/`, `/about.html` ↔ `/es/about.html`, etc.
- [ ] Mobile nav toggle collapses the nav correctly under 720px
- [ ] All case hero images load (OCC hero screenshot, before/after pairs, roadmap, revenue chart)
- [ ] Reveal-on-scroll triggers for `.case-card.featured` once
- [ ] `/sitemap.xml` is reachable publicly
- [ ] `/robots.txt` is reachable publicly and shows `Disallow: /private/`
- [ ] OG preview shows portrait image when you paste a link in Slack / LinkedIn / WhatsApp

---

## Content still to review before going live

1. **Hero tagline EN** — "I translate complex financial workflows into products people *actually trust*." — does the voice match how you pitch yourself on calls? Adjust if too editorial or not enough.
2. **Hero tagline ES** — "Traduzco flujos financieros regulados en productos *en los que la gente sí confía*." — same check. The "sí" is doing work there; kill it if it reads too casual.
3. **About — "How I think about the work"** — three callouts articulating principles. If any feels too absolute, soften with a hedging clause.
4. **Timeline — Whisper BI framing** — currently "Confidential B2B SaaS engagement · Senior IC". Confirm this is how you want it shown publicly while job-searching.
5. **OCC — Reflection section** — two honest "what I'd do differently" items. If this level of self-critique reads as weakness to a specific recruiter segment, we can hide or tighten.
6. **Contact email** — `davidgerardom@gmail.com` hardcoded in 3 places per language. If you want a professional alias (`hello@davidgmendieta.com` once domain is live), search/replace in all 6 HTML files.

---

## Phase 2 roadmap (after initial deploy)

1. **5 remaining case studies** — use `/work/occ.html` as template. Each should hit 600–900 lines: Before → Research → Roadmap/Decisions → After → Impact → Reflection. Bilingual from day one.
2. **Private routes** — `/private/*` for material with sensitive client data (Compartamos loan flow with real customer journeys, Santander CRM screenshots, Whisper BI founder angle). Each gets an obscure URL you share privately in applications.
3. **LinkedIn alignment** — once live, update LinkedIn `Contact &amp; basic info → Website` with `davidgmendieta.com`. Update the 3 CV variants (Master ATS, Regulated Financial, UX Design Engineering) to cite the portfolio URL under Contact.
4. **Analytics review** — first 2 weeks after going live, check Vercel Analytics for which cases get traffic, where people bounce, and whether the OCC case completion rate is acceptable.
