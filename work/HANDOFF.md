# HANDOFF BRIEF — Portfolio v2 Phase 2

**Fecha de última actualización:** Abril 2026  
**URL en producción:** https://davidgmendieta.vercel.app  
**Repo GitHub:** https://github.com/blacklynxmx/portfolio (branch: main)

---

## Estado actual — qué está publicado y funcionando

| Caso | Archivo EN | Archivo ES | Estado |
|---|---|---|---|
| 01 · Compartamos Banco | `work/compartamos.html` | `es/work/compartamos.html` | ✅ Anchor story — completo |
| 02 · OCC Mundial | `work/occ.html` | `es/work/occ.html` | ✅ Publicado y completo |
| 03 · Whisper BI | `work/whisper.html` | `es/work/whisper.html` | ✅ Nuevo — completo |
| 04 · Santander Neo Jupiter | — | — | ⬜ Coming soon |
| 05 · Movistar | — | — | ⬜ Coming soon |
| 06 · FOVISSSTE | — | — | ⬜ Coming soon |

---

## Cambios Phase 2 aplicados en este ZIP

### CSS (portfolio-extras.css)
- `.impact-grid` / `.impact-card` / `.impact-num` / `.impact-label` / `.impact-detail` — fix a los números de resultado que se veían como lista plana
- `.container-wide` — contenedor ancho para grids de métricas
- `.case-hero-logo` — clase explícita para logos en hero
- `.phone-trio` — flex row de 3 pantallas móviles, reemplaza inline styles
- `.lb-overlay` + `figure[data-zoomable]` — lightbox CSS

### scripts/lightbox.js (nuevo)
- Clic en cualquier `<figure data-zoomable>` abre overlay a pantalla completa
- Cierra con Escape o clic fuera de la imagen

### Compartamos (EN + ES)
- Sección nueva: **Gestor de Prospectos** (3 pantallas del CC prospect manager)
- Journey maps con `data-zoomable` + "Click to expand"
- VoC dashboards con `data-zoomable`
- Phone trio corregido a clase `.phone-trio`
- lightbox.js incluido vía `<script defer>`
- 28 assets en `/assets/cases/compartamos/`

### Home grid (EN + ES)
- **Compartamos → Case 01 Anchor story** (featured card con `app-home.png`)
- **OCC → Case 02** (card regular, link activo)
- **Whisper BI → Case 03** (activo con link, sin "coming soon")

### Whisper BI (nuevo)
- `work/whisper.html` + `es/work/whisper.html`
- 6 secciones: Context → Research → Product → Onboarding → GTM → Impact
- 6 assets en `/assets/cases/whisper/`

---

## Assets disponibles en `/assets/cases/compartamos/` (28)

**Phase 1 originales:**
app-home.png, cc-datos-capturados.png, cc-editar-datos.png, cc-tipificar-llamada.png,
ds-buttons.png, ds-fields.png, indicadores-cartera.jpg, indicadores-portafolio.jpg

**Phase 2 nuevos:**
app-clientes.jpg, app-renovacion.jpg, app-subgerentes.jpg,
cc-mi-perfil.png, cc-registro-existente.png,
ds-push.png, ds-sms-code.png,
gestor-busqueda-perfilamiento.png, gestor-busqueda-resultados.png, gestor-busqueda-vacia.png,
journey-cambaceo.png, journey-mis-clientes.png, journey-nueva-contratacion-a.png,
journey-nueva-contratacion-b.png, journey-perfil-capper.png, journey-renovacion.png,
voc-comparativa.png, voc-jalisco.png, voc-occidente.png, voc-toluca.png

---

## Flujo de actualización

1. Descarga y descomprime `portfolio-v2-phase2.zip`
2. Copia contenido a tu repo local (sobreescribir todo)
3. `git add . && git commit -m "feat: phase 2 — Compartamos + Whisper BI + anchor swap" && git push`
4. Vercel despliega en ~1 minuto

---

## Reglas que NO cambian

- `base.css` y `case.css` — NO tocar nunca
- Whisper BI siempre: "Head of Product & UX Research" — nunca co-founder, nunca S.A.S.
- Portfolio URL: https://davidgmendieta.vercel.app

---

## Backlog consciente (pendiente)

| Tarea | Por qué espera |
|---|---|
| Compartamos ES: VoC con análisis detallado | Menor prioridad, narrativa cubierta |
| Upgrade journey maps a Figma hi-res (9420px) | Delta visual bajo |
| Vistas Subgerente de indicadores | Caso ya tiene suficiente profundidad |
| Santander Neo Jupiter | Requiere sesión propia |
| Movistar | Requiere sesión propia |
| FOVISSSTE | Requiere sesión propia |

---

## PROMPT PARA LA SIGUIENTE CONVERSACIÓN

Continúa el portfolio. Adjunto el ZIP con el estado actual.
Leer HANDOFF.md antes de hacer cualquier cosa.
