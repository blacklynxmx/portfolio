# Auditoría UX del portfolio · 3 de octubre de 2026

**Sitio auditado:** https://davidgmendieta.vercel.app (producción idéntica a `main` @ `2e73f1b`)
**Método:** recorrido real en Chromium a 390×844 (móvil) y 1440×900 (desktop), revisión de código y metadatos de las 16 páginas EN/ES, y verificación de DNS y de los archivos servidos en producción.
**Lentes:** `product:ux-product-auditor` (formato de hallazgo y escala de severidad) y `people:hiring-and-interviewing` (cómo evalúa un hiring manager) del repo [cbrock84/headcount](https://github.com/cbrock84/headcount).
**Persona del recorrido:** recruiter o hiring manager de fintech, banca o B2B SaaS que llega desde LinkedIn o desde el CV, primera visita, con 60 a 90 segundos de atención antes de decidir si lee un caso completo.

## Estado al cierre (3 de octubre de 2026)

| # | Estado |
|---|---|
| H1 | ✅ Corregido con `.vercelignore`. Falta verificar en producción después del merge |
| H2 | ✅ Corregido. Decisión: sin dominio propio, todo apunta a `davidgmendieta.vercel.app` |
| H3 | ✅ Corregido: "28% → 40% (+12 pts)" en todas las menciones EN/ES |
| H4 | ✅ Corregido, con más casos de los listados aquí (22 en total) |
| H5 | ✅ Cerrado como decisión: el sitio no se indexa. `robots.txt` deja pasar solo a los bots de vista previa |
| M1 a M5 | ✅ Corregidos. Detalle en `HANDOFF.md` |
| L1 a L4 | Pendientes |

## Escala de severidad

| Nivel | Criterio |
|---|---|
| Critical | Bloquea la tarea principal, pierde datos o excluye a un grupo de usuarios |
| High | Cuesta de forma medible la conversión (aquí: pasar a entrevista) para muchos visitantes |
| Medium | Fricción con workaround, o afecta un camino más estrecho |
| Low | Pulido, inconsistencia o preferencia |

**No hay hallazgos Critical.** El sitio carga sin errores, sin imágenes rotas, sin errores JS y sin scroll horizontal en ninguna de las páginas probadas.

## Resumen

| # | Severidad | Hallazgo | Esfuerzo |
|---|---|---|---|
| H1 | High | `HANDOFF.md` y `DEPLOY.md` se publican en producción con reglas internas de framing | 5 min |
| H2 | High | El dominio `davidgmendieta.com` no existe y se usa en canonical, og:image, hreflang y sitemap | 15 min |
| H3 | High | La métrica de Whisper BI dice "40% lift" cuando el dato es 28% → 40% | 10 min |
| H4 | High | Restos de la limpieza de guiones en el caso ancla y en su tarjeta del home | 15 min |
| H5 | High | Todo el sitio es `noindex` y `robots.txt` bloquea `/` | Decisión + 5 min |
| M1 | Medium | Cero evidencia en el primer viewport: el primer caso empieza a ~1,700 px | 1 h |
| M2 | Medium | La cadena "siguiente caso" se rompe después del caso 02 | 15 min |
| M3 | Medium | Numeración de casos inconsistente entre home y páginas | 15 min |
| M4 | Medium | El título del rol cambia entre `<title>`, eyebrow y CV | 20 min |
| M5 | Medium | El CV solo se puede descargar desde About | 10 min |
| L1 | Low | 9 páginas sin `og:image` | 20 min |
| L2 | Low | El lede del home dice "Seven projects" y repite la idea dos veces | 5 min |
| L3 | Low | Logo de Gentera en el hero de Compartamos contradice la regla de logos | 2 min |
| L4 | Low | FOVISSSTE no tiene marcas `[My call]` / `[Team]` | 30 min |

## Hallazgos

### H1 · High · Documentos internos publicados en producción

- **Dónde:** `https://davidgmendieta.vercel.app/HANDOFF.md` y `/DEPLOY.md` responden 200. (`README.md` da 404 porque Vercel lo excluye por defecto.)
- **Qué pasa:** el `HANDOFF.md` publicado incluía reglas como "Whisper BI siempre: Head of Product & UX Research, nunca co-founder, nunca S.A.S." Cualquiera que pruebe la URL lee cómo decidiste presentar tu rol.
- **Por qué cuesta:** si un entrevistador lo encuentra, convierte una decisión legítima de framing en algo que parece ocultamiento. En roles de research, la credibilidad es el producto.
- **Fix:** `.vercelignore` que excluya `*.md` y `audits/`. **Aplicado en este cambio.** Hay que confirmar después del deploy que ambas URLs devuelven 404.

### H2 · High · Dominio inexistente en metadatos

- **Dónde:** `index.html`, `about.html`, `work/occ.html`, `es/index.html`, `es/work/occ.html`, `sitemap.xml` (59 referencias en total, contando README y DEPLOY).
- **Qué pasa:** `davidgmendieta.com` devuelve NXDOMAIN (no está registrado). Son los placeholders de `DEPLOY.md` paso 1, que nunca se reemplazaron. El `og:image` del home EN/ES, de About EN y de OCC apunta a ese dominio.
- **Por qué cuesta:** cuando pegas el link del home en LinkedIn, WhatsApp o Slack, la vista previa sale sin imagen. Y el home es justo la URL que más compartes. El canonical declara como "oficial" una URL que no existe.
- **Fix:** comprar el dominio o reemplazar `https://davidgmendieta.com` por `https://davidgmendieta.vercel.app` en los 6 archivos públicos. Si lo compras, el CV también se tiene que actualizar porque hoy cita `vercel.app`.

### H3 · High · La métrica de Whisper BI está mal enunciada

- **Dónde:** tarjeta 03 del home ("lifted conversion 40%"), meta description y og:description de `work/whisper.html`, fila "Headline impact" ("40% onboarding conversion lift"), y lo mismo en ES ("40% de mejora en conversión").
- **Qué pasa:** el propio caso explica que la conversión pasó de 28% a 40%. Eso es +12 puntos porcentuales, o +43% relativo. "40%" es la tasa final, no el lift.
- **Por qué cuesta:** un hiring manager de UX Research o Product va a leer el callout de medición y a notar la discrepancia. Es el error que más daño hace en un perfil cuyo argumento central es el rigor.
- **Fix:** usar "28% → 40% onboarding conversion (+12 pts)" en todos los lugares. También es más fuerte porque muestra el baseline.

### H4 · High · Palabras mutiladas por la limpieza de guiones

- **Dónde y qué:** al reemplazar los em dashes se comieron letras o quedaron espacios dobles.
  - Home EN, tarjeta 01 (la más visible del sitio): "rework costs more than discover:&nbsp; &nbsp;before a single wireframe".
  - `work/compartamos.html`: 3 casos, por ejemplo "mobile-first digital system;&nbsp;&nbsp; building the Design System" en el lede del hero.
  - `es/work/compartamos.html`: 6 casos, entre ellos "papeleo en s:" (sí), "Gestor de Prospectos dedicad:" (dedicado), "legalmente requerid:" (requerido).
- **Por qué cuesta:** está en el caso ancla y en el primer párrafo que lee un recruiter. Para un rol senior de diseño, una errata en la tarjeta principal se lee como falta de atención al detalle.
- **Fix:** corregir a mano. Para encontrarlos: `grep -nE '[a-z][:;,](&nbsp;| ){2,}|[a-z]:&nbsp;' -r work es index.html`.

### H5 · High · El sitio es invisible para buscadores (decisión a confirmar)

- **Dónde:** `<meta name="robots" content="noindex, nofollow">` en todas las páginas y `robots.txt` con `Disallow: /` (commit `df647e9`, "privacy").
- **Qué pasa:** si alguien googlea "David G. Mendieta UX", el portfolio no aparece. Además, varios crawlers de previews respetan `robots.txt`. Es probable, aunque no lo verifiqué, que LinkedIn no genere la vista previa por esto, aun con el dominio arreglado.
- **Por qué cuesta:** hay recruiters que buscan por nombre antes de abrir el CV. Esta decisión se tomó por privacidad; si sigue siendo la intención, está bien, pero hoy cuesta descubribilidad.
- **Fix sugerido:** indexar el home, About y los casos públicos, y dejar `noindex` solo en `/demo/` y `/private/`. Después, validar con [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/).

### M1 · Medium · El primer viewport no muestra evidencia

- **Dónde:** home, en móvil y en desktop.
- **Qué pasa:** el hero ocupa toda la pantalla con claims ("products people actually trust"). La franja de logos empieza a ~1,150 px y la primera tarjeta de caso a ~1,700 px. En desktop, el CTA "See the work" queda cortado en el borde inferior a 900 px de alto.
- **Por qué cuesta:** quien lee portfolios por volumen decide en el primer scroll. Hoy el sitio pide confianza antes de mostrar un solo resultado.
- **Fix:** una fila de 3 métricas bajo el lede (8 días → 2 horas · 0.24% → 2.84% · 28% → 40%), y la franja de logos pegada al hero. Bajar el tamaño del H1 en desktop para que el CTA quede completo.

### M2 · Medium · El recorrido entre casos se corta

- **Dónde:** `case-nav` al pie de cada caso.
- **Qué pasa:** Compartamos → OCC → **home**. Santander → **home** en lugar de Movistar. Movistar → **home** en lugar de Compartamos Ops. Solo Ops ↔ FOVISSSTE están encadenados.
- **Por qué cuesta:** el visitante más interesado, el que terminó un caso completo, regresa al grid en lugar de seguir leyendo.
- **Fix:** encadenar 01 → 02 → … → 07 → UI showcase en EN y ES.

### M3 · Medium · Numeración inconsistente

- **Qué pasa:** el home numera Compartamos 01 y OCC 02, pero las páginas dicen OCC "Case 01 / 06" y Compartamos "Case 02 / 06". Ops y FOVISSSTE dicen "/ 07"; los demás, "/ 06".
- **Fix:** alinear todo al orden del home y usar "/ 07".

### M4 · Medium · Posicionamiento inconsistente

- **Qué pasa:** el `<title>` y el og:title dicen "Senior UX Research, Product Designer". El eyebrow dice "Senior UX Design / Research · Product Strategy · Service Design". El CV dice "Senior UX Researcher & Product Strategist". Tus roles objetivo son UX Research, Product Strategy y CX/Service Design.
- **Por qué cuesta:** el og:title es lo que se ve en la tarjeta de LinkedIn, y dice "Product Designer", que no es lo que estás buscando.
- **Fix:** usar una sola fórmula en title, OG, eyebrow, CV y headline de LinkedIn. Por ejemplo: "Senior UX Researcher & Product Strategist · Fintech, Banking, B2B SaaS".

### M5 · Medium · El CV no está donde lo buscan

- **Qué pasa:** "Download CV" existe solo en About (EN y ES). En el home y en la navegación no hay forma de descargarlo.
- **Fix:** agregar "CV" en la nav o como CTA secundario en el hero del home.

### L1 · Low · Páginas sin og:image

`compartamos-ops`, `fovissste` y `ui-design` (EN y ES), más `es/work/movistar.html` y `es/work/santander.html`. Si compartes uno de esos links, la vista previa sale sin imagen.

### L2 · Low · Lede del grid

"Seven projects across microfinance, … Each case documents a different constraint: regulated banking, …" repite la misma lista dos veces, y el grid muestra 8 tarjetas. Dejar una sola frase.

### L3 · Low · Logo de holding

El hero de `work/compartamos.html` muestra el logo de Gentera. El README dice que en la UI pública solo van logos de cliente final.

### L4 · Low · FOVISSSTE sin marcas de autoría

Los demás casos usan `[My call]` / `[Team]`, que es justo la evidencia que busca un hiring manager ("qué hiciste tú"). FOVISSSTE y el showcase de UI no tienen ninguna.

## Lo que funciona y no hay que tocar

- **Las marcas `[My call]` / `[Team]`** responden la primera pregunta de un entrevistador estructurado. Pocos portfolios separan la autoría así de explícitamente.
- **Métricas con baseline y método** (Movistar 0.24% → 2.84%, el callout de cómo se midió Whisper). Es el estándar que H3 rompe.
- **Técnicamente limpio:** sin overflow en móvil, alt en todas las imágenes, assets ligeros (la imagen más pesada es de 976 KB) y un lightbox que funciona.
- **Bilingüe real:** la versión ES no es traducción literal.

## Orden de ataque recomendado

1. H1 (ya aplicado en este cambio; solo falta verificar después del deploy).
2. ~~H3 + H4~~ (resueltos).
3. ~~H2 + H5~~ (resueltos) + L1: agregar og:image a las 9 páginas que no tienen.
4. ~~M1 a M5~~ (resueltos).
5. Low cuando haya tiempo.
