# HANDOFF · Portfolio v2

**Última actualización:** 3 de octubre de 2026
**Producción:** https://davidgmendieta.vercel.app (Vercel, deploy automático desde `main`)
**Repo:** https://github.com/blacklynxmx/portfolio
**Flujo de trabajo:** commits directos en el repo. El flujo anterior de ZIP y sobrescritura ya no aplica.

**Decisiones vigentes (3 de octubre de 2026):**
- **Sin dominio propio.** La URL oficial es `https://davidgmendieta.vercel.app` en canonical, hreflang, OG, sitemap, CV y LinkedIn.
- **El sitio no se indexa.** `noindex, nofollow` en todas las páginas y `Disallow: /` en `robots.txt` se quedan así a propósito. El portfolio se comparte solo por link directo.

Antes de tocar cualquier cosa, lee la auditoría UX ([`audits/2026-10-03-auditoria-ux.md`](audits/2026-10-03-auditoria-ux.md)) y la crítica de diseño ([`audits/2026-10-03-design-critique/critica-diseno.md`](audits/2026-10-03-design-critique/critica-diseno.md)).

---

## Estado de los casos

Los 7 casos y el showcase de UI están publicados en EN y ES.

| # (home) | Caso | EN | ES | Notas |
|---|---|---|---|---|
| 01 · Anchor | Compartamos Banco · originación de crédito | `work/compartamos.html` | `es/work/compartamos.html` | Featured card |
| 02 | OCC Mundial · job-ad commerce | `work/occ.html` | `es/work/occ.html` | |
| 03 | Whisper BI · zero-to-one | `work/whisper.html` | `es/work/whisper.html` | |
| 04 | Santander · Neo Jupiter CRM | `work/santander.html` | `es/work/santander.html` | Vía Leo Burnett |
| 05 | Movistar · landing pages dinámicas | `work/movistar.html` | `es/work/movistar.html` | Vía Accenture |
| 06 | Compartamos · ResearchOps y gobierno de diseño | `work/compartamos-ops.html` | `es/work/compartamos-ops.html` | |
| 07 | FOVISSSTE · experiencia ciudadana | `work/fovissste.html` | `es/work/fovissste.html` | Vía INFOTEC. Sin marcas de autoría (auditoría L4) |
| ↗ | UI Design & Systems (showcase) | `work/ui-design.html` | `es/work/ui-design.html` | |

Otras rutas:

- `about.html` / `es/about.html`: bio, timeline, toolbox y botón de descarga del CV.
- `assets/cv/David_Mendieta_CV.pdf`: CV vigente (actualizado el 29 de abril de 2026). Cita el portfolio como `davidgmendieta.vercel.app`.
- `demo/stspe-uteq-d3m0-x7k42/`: mockup del portal STSPE-UTEQ (julio de 2026). Usa una URL no adivinable y no aparece en ningún link del sitio.
- `/private/`: reservado para versiones largas con material sensible. Hoy no existe.

## Pendientes conocidos (de la auditoría del 3 de octubre de 2026)

Prioridad en este orden. El detalle de cada uno está en la auditoría.

| ID | Pendiente | Estado |
|---|---|---|
| H1 | Los `.md` se publicaban en producción | ✅ `.vercelignore` agregado. Falta confirmar que `/HANDOFF.md` y `/DEPLOY.md` den 404 después del deploy |
| H3 | Métrica de Whisper | ✅ Ahora dice "28% → 40% (+12 pts)" en home, About, meta, OG, hero, callout, impact card y reflexión, EN y ES. El CV no mencionaba el 40% |
| H4 | Palabras mutiladas por la limpieza de guiones | ✅ 22 correcciones en home, About ES, Compartamos EN/ES y OCC EN/ES (incluye "América Latin", "mobile-firs", "Blueprin", "carrearía"). Ya no queda ningún `&nbsp;` suelto en el copy |
| H2 | `davidgmendieta.com` no existe | ✅ Reemplazado por `vercel.app` en los 5 HTML afectados y en `sitemap.xml`. Se verificó que las og:image responden 200 |
| H5 | Indexación | ✅ Decidido: no se indexa. `robots.txt` deja pasar solo a los bots de vista previa (LinkedIn, Facebook, WhatsApp, X, Slack, Telegram, Discord) y bloquea a todos los demás. El `noindex` sigue en cada página. Revisar con LinkedIn Post Inspector después del merge |
| M1 | Evidencia en el primer viewport | ✅ Fila de 3 resultados enlazados bajo el lede (8 días → 2 h, 0.24% → 2.84%, 28% → 40%), H1 más chico en desktop, foto de 140 px en móvil y franja de logos pegada al hero. En 1440×900 se ven los resultados y los CTAs sin hacer scroll |
| M2 | Navegación entre casos | ✅ Cadena 01 → 07 → UI showcase → home, en EN y ES |
| M3 | Numeración | ✅ "Case NN / 07" en el orden del home, EN y ES |
| M4 | Fórmula de rol | ✅ "Senior UX Researcher & Product Strategist" en title, OG, eyebrow, teaser y footer del home, y en About EN. Falta alinear el headline de LinkedIn (fuera del repo). El CV ya usa la misma fórmula |
| M5 | CV accesible | ✅ "CV" en la nav de las 20 páginas y "Download CV" como CTA secundario del home (reemplaza "About me", que sigue en la nav) |
| L1 a L4 | og:image faltantes, lede del grid, logo de Gentera, autoría en FOVISSSTE | ⬜ |
| Diseño · ola 1 | Hero de casos (alias `.case-hero-*`), contraste AA (`--text-tertiary`, `--brand-ink`), method/roadmap, figcaptions, callouts por audiencia, "Headline impact" en fila propia, lightbox en OCC | ✅ |
| Diseño · ola 2 | Figuras legibles (breakout en desktop, scroll lateral de journey maps en móvil, phone trio en carrusel, láminas de `ui-design` a fila completa), link "Ver resultados ↓" en los 14 casos, métricas y tags en neutro, línea de métrica en las tarjetas del home, visual destacado en móvil, columnas alineadas, skip link, menú con Esc, lightbox con teclado, logos legibles, marco redondo del retrato | ✅ |
| Diseño · ola 3 | Índice sticky por caso, rehacer exhibits de `ui-design`, escala tipográfica en tokens, unificar `div.figure` → `<figure>`, decidir si los casos deben medir ~27,000 px | ⬜ |
| Editorial · Compartamos | Capas aplicadas en EN y ES: ~1305 palabras y 6 imágenes visibles (antes ~2,930 y 25). Altura en desktop de ~27,000 a ~10,000 px. Secundario en `<details>`. Sección 06 (Toolkit, VoC y gobierno CX) y la tarjeta 300% se movieron al caso 06, que ahora muestra los dashboards de VoC | ✅ |
| Diseño · L1 | Usar el mismo retrato en Home y About (decisión de David; hoy solo se corrigió el marco) | ⬜ Decisión de David |

## Backlog previo (sigue vigente)

| Tarea | Por qué espera |
|---|---|
| Journey maps en Figma hi-res (9420 px) | Poco cambio visual |
| Vistas de Subgerente en indicadores | El caso ya tiene suficiente profundidad |
| Rutas `/private/` | Solo si una aplicación lo pide |
| Revisar Vercel Analytics: tráfico por caso y rebote | Pendiente desde el deploy inicial |

## Reglas que no cambian

- `styles/base.css` y `styles/case.css` no se tocan. Todo lo nuevo va en `styles/portfolio-extras.css`.
- Rol en Whisper BI: "Head of Product & UX Research" en todo el material público.
- Logos públicos: un logo por tarjeta, solo de cliente final. Las agencias y holdings se mencionan en texto.
- Si cambias `styles/portfolio-extras.css`, `scripts/main.js` o `scripts/lightbox.js`, sube el `?v=` de su `<link>`/`<script>` en las 20 páginas: `vercel.json` cachea CSS y JS como `immutable` por un año.
- Sin em dashes ni patrones de redacción de IA en el copy (ver los commits del 29 de abril de 2026). Al reemplazarlos, revisa que no se coma letras (ver H4).
- ES en español mexicano nativo, no traducción literal.
- Deploy solo en Vercel, en `davidgmendieta.vercel.app`, sin dominio propio.
- El sitio no se indexa: no quites `noindex` ni el `Disallow: /` para `User-agent: *`. Solo los bots de vista previa tienen `Allow`.
- Los archivos internos (`*.md`, `audits/`) no se publican. Si agregas otro tipo de archivo interno, súmalo a `.vercelignore`.

## Prompt para la siguiente sesión

> Continúa el portfolio en blacklynxmx/portfolio. Lee HANDOFF.md y audits/2026-10-03-auditoria-ux.md antes de hacer cualquier cosa. Sigue con los Low de la auditoría UX (L1 a L4) o con la ola 3 de la crítica de diseño. No cambies las decisiones de dominio e indexación.
