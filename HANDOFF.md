# HANDOFF BRIEF — Portfolio v2 Phase 1 close-out

**Objective of next conversation:** apply 3 remaining changes to the portfolio, re-package the ZIP, deliver via `present_files`. No re-architecture, no re-writing of existing content. Surgical edits only.

---

## Context (one-paragraph read)

David G. Mendieta — senior UX Research / Product Strategy lead — is building a bilingual static portfolio for an active job search. **Primary target: Citi Hub CDMX** where he's in advanced interview rounds and needs to show "one-man-army" capability including functional design. Portfolio Phase 1 is complete code-wise and lives at `/home/claude/portfolio-v2/`. It's hand-rolled HTML + 3 CSS files + vanilla JS, deploys to Vercel free tier. 6 HTMLs total (home, about, OCC case study × EN/ES). The OCC case is the anchor story fully written. 5 other cases show as "Coming soon" placeholders.

In the previous conversation David confirmed 4 content decisions. **3 of them were applied successfully. 3 are pending** (one decision produced 4 pending edits because Whisper BI shows in 2 places and the Reflection rework requires transverse `[Yo]/[Equipo]` separators throughout OCC).

**Phase 2** (separate future work): produce Figma-based design proposals for Compartamos DS + OCC backend + Santander screens. Not this conversation's job. He'll pay 1 month of Figma Professional and use Figma MCP for that phase.

---

## Applied changes — do NOT redo

| # | Change | Status |
|---|---|---|
| 1 | Tagline EN broadened to "complex workflows — regulated finance, legacy systems, high-stakes operations" + lede + meta + OG across `index.html` and `about.html` | ✅ Done |
| 2 | Tagline ES same broadening across `es/index.html` and `es/about.html` | ✅ Done |
| 3a | Whisper BI named explicitly in EN timeline (`about.html` line 158) and ES timeline (`es/about.html` line 155) | ✅ Done |

---

## Pending changes — THIS is the work

### Pending 3b · Replace "Confidential · B2B SaaS" with "Whisper BI" in 2 home case cards

**File 1: `/home/claude/portfolio-v2/index.html` line 167**

Current:
```html
            <span class="case-card-client">Confidential · B2B SaaS</span>
```

Replace with:
```html
            <span class="case-card-client">Whisper BI · B2B SaaS</span>
```

**File 2: `/home/claude/portfolio-v2/es/index.html` line 157**

Current:
```html
            <span class="case-card-client">Confidencial · B2B SaaS</span>
```

Replace with:
```html
            <span class="case-card-client">Whisper BI · B2B SaaS</span>
```

Straightforward `str_replace`. Both instances.

---

### Pending 4 · Rework OCC Reflection section — "Otras propuestas desarrolladas"

**Rationale from David (verbatim from previous conversation):**

> "no manejes 'cosas honestas que haría diferente' sino 'otras propuestas desarrolladas' en este y en otros casos, una pregunta recurrente será 'que hiciste, y que hizo tu equipo' asi se señala claramente que cosa es mia. (como todas las pantallas propuestas de occ)"

**Claude's accepted proposal from previous turn (verbatim):**

> "Para OCC específicamente, las 'otras propuestas' naturales son exactamente las pantallas de la Fase 2 que vamos a hacer en Figma — el nuevo backend del reclutador. Por ahora, sin las pantallas listas, lo que puedo poner es un teaser narrativo: 'Aquí están las direcciones que planteé para siguientes iteraciones — las pantallas se publican en cuanto estén listas'. Con 2-3 bullets describiendo las propuestas (nuevo backend, self-serve analytics, pricing UI dinámico) y un placeholder visual discreto."

**What to change:**

In `/home/claude/portfolio-v2/work/occ.html` around line 510-540, the current section is titled "Honest note · What I'd do differently" with 2 `.callout.for-ops` blocks ("Start the research toolkit earlier" / "Split candidate and recruiter research functions sooner").

Replace the entire `<section class="case-section" id="reflection">...</section>` block with a new section titled "06 · Other proposals developed" (English) with:

- Short intro paragraph explaining these are directions David proposed individually that extended the core CAJA delivery but weren't shipped as production features during his tenure
- 2-3 callouts or impact-list items describing:
  - **Recruiter backend redesign** — a proposal for a new recruiter workspace (dashboard, job-ad builder, candidate inbox, analytics) extending CAJA into a full self-serve admin experience. "Publishing soon — screens in design phase."
  - **Self-serve recruiter analytics** — a proposed analytics module letting recruiters see their own ad performance vs. their segment benchmark without sales involvement. Describes the research behind it (Track B segmentation showed Micro/SME segments never asked for reports because they didn't know they could).
  - **Dynamic pricing UI** — the visible output of the Flex Pricing research from section 03, proposing how a recruiter would see contextual pricing without perceiving it as dynamic. Ties directly to the "users must never understand they are being priced dynamically" constraint.
- Closing line positioning these as "David's individual proposals" vs. "team-shipped work"

**For `/home/claude/portfolio-v2/es/work/occ.html` line 518:** same rework in native Mexican Spanish. Section title: "06 · Otras propuestas desarrolladas". Same 3 bullets translated.

---

### Pending 5 · Introduce `[Yo]` / `[Equipo]` separator across OCC narrative

**Rationale from David (verbatim):**

> "una pregunta recurrente será 'que hiciste, y que hizo tu equipo' asi se señala claramente que cosa es mia"

**Claude's accepted proposal from previous turn (verbatim):**

> "Para el separador 'yo vs. equipo' — va a aparecer no solo en Reflection sino embebido en todo el caso (secciones de Research, Roadmap, After). Te pongo una convención visual simple: donde es ejecución de equipo, en prosa normal. Donde es decisión/artefacto mío, con un marcador sutil — mono-font + prefijo `[Mi decisión]` o `[Yo]`. No invasivo, pero trazable."

**Implementation guidance:**

- Use a small inline `<span>` with a mono-font style — suggest a new CSS class `.authorship` to add to `portfolio-extras.css` with something like:
  ```css
  .authorship {
    font-family: var(--font-mono);
    font-size: 0.6875rem;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--tech);
    margin-right: 6px;
    white-space: nowrap;
  }
  .authorship.team {
    color: var(--text-tertiary);
  }
  ```
- Markers: `[Mi decisión]` / `[Yo]` / `[My call]` for individual work. `[Equipo]` / `[Team]` for collective execution. Keep usage sparse — only at moments where the distinction materially matters for a Citi interviewer.
- Candidate placement examples in EN OCC case:
  - Section 02 Research opening: "My first argument to leadership was structural" → already clearly first-person. Could add `<span class="authorship">[My call]</span>` at the start of "I proposed splitting the research effort into two tracks".
  - Section 03 Roadmap: "The Flex Pricing study" section — the methodology design was David personally. Mark as `[My call]`. The POC test execution was team. Mark as `[Team]` where team execution is described.
  - Section 02 Track A methods grid: interviews were team execution (moderated by David but synthesized collaboratively). Track B data analysis was David solo. Worth distinguishing.
- **Do not over-mark.** 4-6 total markers across the case is the right density. 15+ markers becomes noise.
- Mirror in `es/work/occ.html` with `[Mía]` / `[Mi decisión]` / `[Yo]` and `[Equipo]`.

---

## Final delivery

After the three pending changes:

```bash
cd /home/claude
rm -f portfolio-v2.zip
zip -r portfolio-v2.zip portfolio-v2/ -x "*.DS_Store" "*/.git/*"
cp portfolio-v2.zip /mnt/user-data/outputs/portfolio.zip
```

Then `present_files` with `/mnt/user-data/outputs/portfolio.zip`.

In the chat response, briefly summarize what was changed and link David back to the original DEPLOY.md instructions for upload to Vercel (no need to rewrite them — they're in the ZIP and were explained in the previous conversation).

---

## Things to NOT touch (scope discipline)

- Do NOT rewrite the OCC case from scratch. It's ~870 lines and David approved the current narrative.
- Do NOT rewrite the about.html timeline. Already done.
- Do NOT touch `base.css` or `case.css` — those are David's stylesheets, untouched by design.
- Do NOT change the tagline again — it's already applied and approved.
- Do NOT add new sections or cases. Phase 2 (Figma-based design proposals) is a separate future conversation.
- Do NOT re-package the ZIP until all 3 pending changes are done.

---

## Files the next conversation needs

The portfolio working directory is at `/home/claude/portfolio-v2/` in the current Claude environment. In a new conversation David will need to upload the existing ZIP (`portfolio.zip` from the previous `present_files` delivery, which he can re-download from this chat's shared files). The new conversation unzips it back to `/home/claude/portfolio-v2/` and applies the pending changes.

**Alternative:** if David uploads this brief + the current ZIP to a fresh conversation at the same time, Claude in that conversation:
1. Extracts ZIP to `/home/claude/portfolio-v2/`
2. Reads this brief
3. Applies the 4 string replacements (one for each "Confidential" case card + the 2 Reflection reworks)
4. Applies 4-6 authorship markers across both OCC files
5. Re-packages and delivers

Total estimated turns: 2-4 assistant turns.
