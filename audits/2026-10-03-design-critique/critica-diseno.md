# Crítica de diseño visual e interacción · Portfolio David G. Mendieta

**Fecha:** 3 de octubre de 2026
**Alcance:** diseño visual e interacción (jerarquía, tipografía, color y contraste, ritmo de espaciado, grid, consistencia de componentes, tratamiento de figuras, legibilidad de casos largos, wayfinding, motion, tema oscuro, craft móvil, accesibilidad). No repite nada de `audits/2026-10-03-auditoria-ux.md`.
**Método:** recorrido en Chromium (Playwright) a 390×844 y 1440×900 sobre `localhost:8766`, contraste calculado a partir de estilos computados, prueba de teclado, menú móvil, lightbox y `prefers-reduced-motion`. Lentes: `interface-craft`, `interface-redesign`, `design-system`, `design-styles` y `ux-product-auditor` (formato y severidad).
**Restricción respetada:** todo lo propuesto se implementa en `styles/portfolio-extras.css` o en HTML (y, donde se indica, en `scripts/lightbox.js`). `base.css` y `case.css` no se tocan.

> **Nota sobre fuentes:** Google Fonts no cargó en el sandbox (`document.fonts` sin ninguna fuente cargada). Las capturas usan los fallbacks (Times/serif para Fraunces, DejaVu/system para Inter y JetBrains Mono). No juzgo el dibujo tipográfico. Los tamaños, colores, contrastes y layout sí son los reales, porque no dependen de la fuente. Donde la fuente cambia una medición (caracteres por línea) lo aclaro.


> **Nota de versión:** las capturas se tomaron antes del commit `7198453` (M1 a M5 de la auditoría UX) y, en parte, antes de `2309bd9` (H3 y H4). Por eso todavía se ven la numeración vieja ("Case 02 / 06"), las erratas del lede de Compartamos y el hero del home sin la fila de resultados. Los hallazgos de esta crítica no dependen de esos cambios.

---

## Veredicto

La dirección visual (editorial oscura, Fraunces + Inter + Mono) es correcta para el perfil, pero la ejecución se rompe justo donde un hiring manager busca evidencia: los artefactos de research se ven a un tercio de su tamaño legible, siete de ocho casos tienen el hero sin estilos y el texto de metadatos no pasa AA.

---

## Lo que funciona (no tocar)

- **Dirección de estilo coherente.** Encaja en "minimalist editorial" del skill `design-styles`: casi monocromo, jerarquía por tamaño tipográfico, superficies planas con hairlines de 0.5px. Es la dirección correcta para un perfil cuyo producto es el contenido.
- **Focus visible y consistente.** `a:focus-visible, button:focus-visible` con outline de 2px `#3B82F6` y offset de 2px (`base.css:795`). Se ve bien en nav, botones y tarjetas completas (screenshot `03`). Muchos portfolios lo eliminan.
- **`prefers-reduced-motion` bien resuelto.** `base.css:801` anula transiciones, animaciones y smooth scroll; `.reveal` queda en opacity 1. `main.js:64` respeta la preferencia en el scroll de anclas. Verificado con `reducedMotion: 'reduce'`: reveal opacity 1, scroll-behavior auto.
- **Body text con buen contraste.** `--text-secondary #9FA3B8` sobre `#0B0D17` da 7.75:1; sobre `--surface` 7.15:1. El blanco no es puro (`#EDEDF2`) y el fondo no es negro puro, como pide `interface-craft` para dark mode.
- **Medida de párrafo razonable.** 70 a 75 caracteres por línea en los párrafos de caso (680px) con la fuente de fallback. Con Inter real la cifra subirá unos 10 a 15%, ver L3.
- **Componentes bien resueltos en OCC:** personas con dl/dt (screenshot no incluido), browser frames con barra de URL, before/after. OCC es la referencia de craft del sitio.
- **Sin scroll horizontal** en ninguna página probada.

---

## Escala de severidad (estricta)

| Nivel | Criterio en este contexto |
|---|---|
| Critical | Impide ver la evidencia o excluye a un grupo de usuarios del sitio completo |
| High | Afecta la percepción de seniority o la lectura de evidencia para la mayoría de visitantes, o rompe el piso de accesibilidad de forma sistémica |
| Medium | Fricción en un camino concreto, inconsistencia visible, o barrera con workaround |
| Low | Pulido, consistencia interna, preferencia |

**No hay hallazgos Critical.** Todo se ve y todo se puede leer de alguna forma.

## Resumen

| # | Sev. | Hallazgo | Esfuerzo |
|---|---|---|---|
| H1 | High | Los artefactos de research y UI se muestran a un tercio de su tamaño legible | 2 a 4 h |
| H2 | High | Metadatos, eyebrows y labels rojos no pasan AA (17 combinaciones) | 30 min |
| H3 | High | 7 de 8 casos usan clases de hero que no existen en el CSS | 20 min |
| H4 | High | Casos de 24,000 a 30,000 px sin índice, sin progreso y con los resultados al final | 1 a 3 h |
| M1 | Medium | La cascada pisa dos componentes: labels de método y títulos de roadmap | 15 min |
| M2 | Medium | El sistema de callouts perdió su código de color (y uno usa una variable inexistente) | 30 min |
| M3 | Medium | Los figcaption gritan más que el texto del caso | 20 min |
| M4 | Medium | El lightbox no funciona con teclado, no existe en OCC y no aporta en móvil | 1 a 2 h |
| M5 | Medium | El rojo marca números positivos y las tags usan tres colores sin significado | 30 min |
| M6 | Medium | El grid del home es una pared de tarjetas de texto, sin imagen en móvil | 1 a 2 h |
| M7 | Medium | Tres anchos de columna distintos dentro del mismo caso | 20 min |
| L1 | Low | Dos fotos y dos tratamientos de retrato distintos entre Home y About | 15 min |
| L2 | Low | Menú móvil y navegación por teclado: sin Esc, sin skip link, targets de 16px | 30 min |
| L3 | Low | Deriva de la escala tipográfica: 13 tamaños en una página | 1 h |
| L4 | Low | Franja de logos casi invisible | 5 min |
| L5 | Low | Acento rojo saturado sobre fondo casi negro, usado para todo | ver H2 |

---

## Hallazgos

### H1 · High · Los artefactos de evidencia se ven a un tercio de su tamaño legible

- **Dónde:**
  - `work/compartamos.html`, sección 02 Research, los 4 journey maps (`.figure.figure-wide.figure-frame[data-zoomable]`).
  - `work/compartamos.html`, sección 03, `.phone-trio`.
  - `work/ui-design.html`, todos los `.asset-frame`.
  - Causa raíz en `portfolio-extras.css:111-123`: `.figure-wide { width:100%; max-width:100%; overflow:hidden }` anula el "breakout" que `case.css:267` le da a `.figure-wide`. Las figuras "anchas" miden 716px, igual que la columna de texto.
- **Qué se ve:**
  - Desktop: el journey map "Nueva Contratación" ocupa 716×143px (los textos internos son ilegibles).
  - Móvil: `.figure-frame` mantiene 32px de padding por lado, así que el mapa queda en ~260px de ancho y el caption es más alto que la imagen (screenshot `06`).
  - En `ui-design.html` una imagen de 1,795px nativos se muestra a 344×80 en desktop y 324×75 en móvil (factor 5:1). Las tres capturas del phone trio se ven a 134px de ancho en desktop (screenshot `12`) y a ~680px de alto cada una en móvil, con dos tercios de pantalla vacía. El problema está invertido en cada breakpoint.
- **Por qué importa:** en un portfolio de research, el journey map **es** la prueba de que hiciste el trabajo de campo. El copy dice "when a Risk director said 'the process works fine,' we put the journey map on the screen". El recruiter recibe una franja rosa y gris que no puede leer. La página de UI craft muestra la UI a escala de miniatura, lo que contradice su propio propósito.
- **Propuesta:**
  1. Restaurar el breakout solo en desktop y quitar padding al marco en móvil.
  2. Para mapas muy apaisados en móvil, scroll horizontal explícito con pista visual en lugar de reducir.
  3. En HTML, envolver cada mapa en un enlace al PNG original (`<a href="...png" target="_blank">Ver en tamaño completo</a>`) para quien no use el lightbox.

```css
/* portfolio-extras.css · al final del archivo */
@media (min-width: 1100px) {
  .case-section .figure-wide {
    width: min(1080px, calc(100vw - 4rem));
    max-width: none;
    margin-left: 50%;
    transform: translateX(-50%);
  }
}
@media (max-width: 640px) {
  .figure-frame { padding: 0.75rem; }
  .figure-wide.figure-frame { overflow-x: auto; -webkit-overflow-scrolling: touch; }
  .figure-wide.figure-frame img { width: 720px; max-width: none; }
  .figure-wide.figure-frame::after {
    content: "Desliza para ver el mapa completo →";
    display: block; margin-top: .5rem;
    font: 500 .75rem/1.4 var(--font-mono); color: var(--text-secondary);
  }
  .phone-trio { flex-direction: row; overflow-x: auto; scroll-snap-type: x mandatory; }
  .phone-trio .figure { flex: 0 0 70%; scroll-snap-align: center; max-width: none; }
}
@media (min-width: 641px) {
  .phone-trio .figure.figure-frame { padding: 0.75rem; flex-basis: 220px; }
}
```

- **Esfuerzo:** 2 h el CSS, más 1 a 2 h para revisar cada figura (en especial `ui-design.html`, que usa su propio `.asset-frame` y necesita el mismo tratamiento).
- **Screenshots:** [`06-compartamos-mobile-journey-maps-ilegibles.png`](06-compartamos-mobile-journey-maps-ilegibles.png), [`12-compartamos-desktop-phone-trio-diminuto.png`](12-compartamos-desktop-phone-trio-diminuto.png), [`13-ui-design-desktop-exhibit-escala.png`](13-ui-design-desktop-exhibit-escala.png).

### H2 · High · El texto de metadatos y los acentos rojos no pasan WCAG AA

- **Dónde:** todo el sitio. Raíz en dos tokens usados como color de texto pequeño: `--text-tertiary #6E7289` y `--brand #E11D48` (`base.css:16`, `base.css:19`).
- **Qué se ve (contraste medido sobre estilos computados; AA texto normal exige 4.5:1):**

| Elemento (selector) | Página | Color / fondo | Tamaño | Ratio | AA |
|---|---|---|---|---|---|
| Body `p` | casos | #9FA3B8 / #0B0D17 | 16px | 7.75 | Pasa |
| Callout `p` | casos | #9FA3B8 / #13162A | 15px | 7.15 | Pasa |
| `.hero-lede` | home | #9FA3B8 / #0B0D17 | 20px | 7.75 | Pasa |
| `.btn-primary` | home | #FFF / #E11D48 | 15px 500 | 4.70 | Pasa justo |
| `.btn-ghost`, links | home | #3B82F6 / #0B0D17 | 15px | 5.27 | Pasa |
| `.section-eyebrow`, `.authorship` | casos | #3B82F6 / #0B0D17 | 11.2 a 12px | 5.27 | Pasa |
| `.tag-tech`, `.impact-label`, `.callout.for-research .callout-label` | home/casos | #3B82F6 / #13162A | 11.2 a 12px | 4.86 | Pasa |
| `.eyebrow-brand` (rol en hero) | home | #E11D48 / #0B0D17 | 12px | **4.12** | **Falla** |
| `.exhibit-num`, `.timeline-period` | ui-design, about | #E11D48 / #0B0D17 | 11.2 a 12px | **4.12** | **Falla** |
| `.case-card-num`, `.tag-brand`, `.case-card-link` | home | #E11D48 / #13162A | 11.2 a 12px | **3.80** | **Falla** |
| `.callout.for-business .callout-label` | occ, whisper | #E11D48 / #13162A | 11.2px | **3.80** | **Falla** |
| `.case-hero-meta`, `.case-hero-meta-row .label` | casos | #6E7289 / #0B0D17 | 11 a 12px | **4.09** | **Falla** |
| `.experience-label`, `.footer p`, `.footer-meta`, `.quote-cite`, `.before-after-label`, `.lang-toggle` inactivo | varios | #6E7289 / #0B0D17 | 11 a 14px | **4.09** | **Falla** |
| `.case-nav-card .label`, `.metric-sublabel`, `.persona dt` | casos | #6E7289 / #13162A | 11px | **3.77** | **Falla** |

- **Por qué importa:** el rol del hero ("Senior UX Design / Research…"), el número de cada caso, el año y el "Role / Duration / Team" son justo lo que escanea un recruiter, y todo eso está en el par de colores que falla. Además, alguien que se presenta como especialista en WCAG (caso FOVISSSTE) no puede fallar AA en su propio sitio; un hiring manager técnico lo revisa con una extensión en 10 segundos.
- **Propuesta:** dos tokens nuevos en `portfolio-extras.css` y redirigir solo los usos de texto. `--brand` se queda para fondos (botón primario) porque ahí sí pasa.

```css
:root {
  --text-tertiary: #8B8FA8;   /* 6.08 sobre bg, 5.61 sobre surface, 4.89 sobre surface-hover */
  --brand-ink: #FB7185;       /* 7.20 sobre bg, 6.64 sobre surface */
}
.eyebrow-brand, .case-card-num, .case-card-link, .tag-brand,
.callout.for-business .callout-label, .timeline-item.current .timeline-period,
.before-after-label.after, .roadmap-step.highlight .roadmap-step-label { color: var(--brand-ink); }
.tag-brand { border-color: color-mix(in srgb, var(--brand-ink) 45%, transparent); }
```

  Redefinir `--text-tertiary` en extras es un cambio de token a nivel sistema (el skill `design-system` lo trata como cambio de API): revisa que ningún elemento dependa de que el terciario sea "casi invisible" a propósito. En las capturas no encontré ninguno.
- **Esfuerzo:** 30 min.
- **Screenshot:** [`01-home-desktop-hero-foto.png`](01-home-desktop-hero-foto.png) (eyebrow rojo), [`04-compartamos-desktop-hero-sin-estilo.png`](04-compartamos-desktop-hero-sin-estilo.png) (meta y labels terciarios).

### H3 · High · Siete de ocho casos tienen el hero sin estilos

- **Dónde:** `work/compartamos.html`, `whisper`, `santander`, `movistar`, `compartamos-ops`, `fovissste` y `ui-design` (y sus espejos ES) usan `h1.case-hero-title` y `p.case-hero-lede`. Esas clases no existen en ningún CSS. `case.css:55` y `case.css:67` definen `.case-title` y `.case-lede`, que solo usa `work/occ.html`.
- **Qué se ve:** en Compartamos (el caso ancla) el H1 cae al `h1` base sin `max-width: 22ch`, y el lede queda como párrafo gris de 16px a 7.75:1. En OCC el lede es de 22px, peso 300, `#EDEDF2`. Lado a lado, OCC parece el caso principal y Compartamos un borrador (screenshots `04` y `05`). Además, el logo `.case-hero-logo` tampoco tiene regla propia.
- **Por qué importa:** el primer pantallazo de cada caso define si el lector sigue. El caso ancla, con el mejor resultado del portfolio, tiene el hero más débil. Es un hallazgo "sistémico" en términos de `interface-redesign`: un componente que existe en dos variantes por accidente.
- **Propuesta:** alias en extras (no requiere tocar HTML):

```css
.case-hero-title { font-size: clamp(2.25rem, 5vw, 3.75rem); line-height: 1.05; letter-spacing: -0.025em; max-width: 22ch; margin-top: .5rem; }
.case-hero-lede  { font-size: clamp(1.125rem, 2vw, 1.375rem); line-height: 1.5; color: var(--text-primary); max-width: 60ch; font-weight: 300; }
.case-hero-logo  { height: 32px; width: auto; }
```

  Mejor a mediano plazo: unificar el HTML a `.case-title` / `.case-lede` en los 14 archivos.
- **Esfuerzo:** 10 min el alias, 20 min si se unifica el HTML.
- **Screenshots:** [`04-compartamos-desktop-hero-sin-estilo.png`](04-compartamos-desktop-hero-sin-estilo.png), [`05-occ-desktop-hero-referencia.png`](05-occ-desktop-hero-referencia.png).

### H4 · High · Casos de 24,000 a 30,000 px sin wayfinding y con los resultados al final

- **Dónde:** todas las páginas de caso. Con imágenes cargadas, Compartamos mide ~27,000 px en desktop y ~29,700 px en móvil; OCC ~24,600 px en móvil. La única navegación es el nav global y el `case-nav` al pie.
- **Qué se ve:**
  - No hay índice de secciones, barra de progreso ni "volver arriba". En 1440px hay ~360px vacíos a cada lado de la columna de 716px, espacio desperdiciado que podría alojar un índice.
  - La sección "05 · Results" de Compartamos empieza a ~22,000 px.
  - En el hero, `.case-hero-meta-row` (`case.css:75`, `auto-fit minmax(160px)`) acomoda 3 columnas en 716px y el cuarto dato, "Headline impact", cae solo en una segunda fila (screenshot `04`). El dato más importante queda en la posición menos visible.
- **Por qué importa:** quien revisa portfolios por volumen lee el hero, salta a resultados y decide si vuelve a leer el proceso. Hoy, para llegar a los números, hay que hacer scroll durante 20 pantallas. Todas las secciones ya tienen `id` (todas tienen `#impact`), así que la solución es barata.
- **Propuesta:**
  1. **Quick win HTML:** un enlace "Ver resultados ↓" en `.case-hero-meta-row` apuntando a `#impact`.
  2. **Quick win CSS:** que "Headline impact" ocupe la fila completa y con más peso.
  3. **Medio:** índice sticky en desktop ≥1280px, en el gutter izquierdo, generado en HTML con los `id` existentes.

```css
.case-hero-meta-row > div:last-child { grid-column: 1 / -1; }
.case-hero-meta-row > div:last-child .value { font-family: var(--font-display); font-size: 1.375rem; line-height: 1.3; }

.case-toc { display: none; }
@media (min-width: 1280px) {
  .case-toc { display: block; position: fixed; top: 120px; left: max(2rem, calc(50% - 600px)); width: 180px; }
  .case-toc a { display: block; padding: .375rem 0; font: .75rem/1.4 var(--font-mono); color: var(--text-secondary); }
  .case-toc a:hover, .case-toc a[aria-current="true"] { color: var(--text-primary); }
}
```

```html
<nav class="case-toc" aria-label="En este caso">
  <a href="#before">01 · Problema</a><a href="#research">02 · Research</a>
  <a href="#design">03 · Diseño</a><a href="#compliance">04 · Compliance</a>
  <a href="#impact">05 · Resultados</a><a href="#reflection">06 · Reflexión</a>
</nav>
```

  Resaltar la sección activa con `IntersectionObserver` es opcional (unas 15 líneas en `main.js`).
- **Esfuerzo:** 15 min los dos quick wins; 2 a 3 h el índice en los 14 archivos.
- **Screenshot:** [`04-compartamos-desktop-hero-sin-estilo.png`](04-compartamos-desktop-hero-sin-estilo.png) (fila de meta con el dato huérfano).

### M1 · Medium · La cascada pisa dos componentes

- **Dónde:**
  - `.method-label` (`portfolio-extras.css:50`, especificidad 0,1,0) pierde contra `.method p` (`case.css:493`, 0,1,1). Resultado medido: label de 14px gris en lugar de 11.2px azul.
  - `.roadmap-step-title` y `.roadmap-step-period` (`case.css:641-655`) pierden contra `.roadmap-step p` (`case.css:657`). Título, periodo y descripción salen al mismo tamaño (13px) y el mismo gris.
- **Qué se ve:** en las tarjetas de método, el label en mayúsculas ("ETHNOGRAPHIC RESEARCH") es más grande y visible que el H4 ("Field shadowing"), con la jerarquía invertida (screenshot `07`). En el roadmap de OCC, "E-commerce rebuild Replatformed the commerce engine…" se lee como una sola frase corrida (screenshot `08`).
- **Por qué importa:** son los dos componentes que resumen método y secuencia, lo que un hiring manager de research quiere escanear sin leer párrafos.
- **Propuesta:**

```css
.method p.method-label { font-size: .6875rem; color: var(--tech); letter-spacing: .08em; }
.roadmap-step p.roadmap-step-period { font-family: var(--font-display); font-size: 1.125rem; color: var(--text-primary); margin-bottom: 4px; }
.roadmap-step p.roadmap-step-title  { font-size: .9375rem; font-weight: 500; color: var(--text-primary); margin-bottom: 6px; }
```

- **Esfuerzo:** 15 min.
- **Screenshots:** [`07-compartamos-mobile-method-label-invertido.png`](07-compartamos-mobile-method-label-invertido.png), [`08-occ-desktop-roadmap-cascada.png`](08-occ-desktop-roadmap-cascada.png).

### M2 · Medium · El sistema de callouts perdió su código de color

- **Dónde:** `portfolio-extras.css:56-62`. Conteo en `work/*.html`: 17 `for-ops`, 13 `for-research`, 8 `for-business`, 4 `for-engineering`.
- **Qué se ve:**
  - `.callout.for-engineering` usa `var(--accent)`, que no existe. El color computado es `#EDEDF2`: barra y label blancos, el callout más llamativo del caso sin razón (screenshot `11`).
  - `for-research` pasa a `--tech`, el mismo azul de links, eyebrows, tags y `[My call]`. `base.css:29-32` define colores de audiencia propios (violeta `#A78BFA` 7.12:1, ámbar `#FBBF24` 11.6:1) que extras ya no usa.
  - `for-ops` en gris es el callout por defecto; en Compartamos hay tres seguidos con el mismo estilo (secciones 04 y 05).
- **Por qué importa:** los callouts por audiencia son una idea fuerte ("para negocio", "para research"), pero sin color distinguible el lector no aprende el código y todo se vuelve caja gris. Tres cajas iguales seguidas leen como relleno, que es la señal de "uniform spacing, nothing groups" del skill `interface-redesign`.
- **Propuesta:** volver a los tokens de audiencia (que ya pasan AA) y bajar el número de callouts consecutivos a uno por bloque. Los que son listas de decisiones (KYC, LFPDPPP, RBAC) funcionan mejor como `dl` o como `.methods`.

```css
.callout.for-research { border-left-color: var(--audience-research); }
.callout.for-research .callout-label { color: var(--audience-research); }
.callout.for-ops { border-left-color: var(--audience-ops); }
.callout.for-ops .callout-label { color: var(--audience-ops); }
.callout.for-engineering { border-left-color: #60A5FA; }
.callout.for-engineering .callout-label { color: #60A5FA; }   /* 7.02 sobre surface */
.callout + .callout { margin-top: -1.25rem; border-top: 0.5px solid var(--border); border-radius: 0; }
```

- **Esfuerzo:** 30 min.
- **Screenshot:** [`11-whisper-desktop-callout-engineering-y-caption.png`](11-whisper-desktop-callout-engineering-y-caption.png).

### M3 · Medium · Los figcaption gritan más que el texto del caso

- **Dónde:** Compartamos, Whisper, Santander, Movistar. Las figuras son `<div class="figure figure-frame">` con un `<figcaption>` dentro. Es HTML inválido (figcaption solo vale dentro de `<figure>`) y ninguna regla le da estilo. OCC usa `.figure-caption` y se ve bien.
- **Qué se ve:** caption a 16px en `#EDEDF2` (15.3:1) pegado a la imagen sin margen. El párrafo del caso está a 16px en `#9FA3B8`, así que el pie de foto tiene más peso que el texto principal. En móvil el caption mide 250px de alto junto a una imagen de 150px (screenshots `06` y `11`).
- **Por qué importa:** la jerarquía se invierte en cada figura, y hay 25 figuras en Compartamos. El ojo salta de caption en caption y pierde el hilo.
- **Propuesta:** CSS inmediato y, en HTML, cambiar `div.figure` por `figure.figure` (reemplazo mecánico).

```css
.figure figcaption {
  margin-top: .75rem; max-width: var(--max-width-prose);
  font: 400 .8125rem/1.55 var(--font-body); color: var(--text-secondary);
}
.figure figcaption strong { color: var(--text-primary); font-weight: 500; }
.figure figcaption em { color: var(--text-tertiary); font-style: normal; }
```

- **Esfuerzo:** 5 min el CSS, 15 min el HTML.
- **Screenshots:** [`06-compartamos-mobile-journey-maps-ilegibles.png`](06-compartamos-mobile-journey-maps-ilegibles.png), [`11-whisper-desktop-callout-engineering-y-caption.png`](11-whisper-desktop-callout-engineering-y-caption.png).

### M4 · Medium · El lightbox no sirve con teclado, falta en OCC y no aporta en móvil

- **Dónde:** `scripts/lightbox.js`, `[data-zoomable]` en 6 casos, `work/occ.html`.
- **Qué se ve:**
  - Los `[data-zoomable]` tienen `tabIndex -1` y no tienen rol, así que no se alcanzan con Tab.
  - Al abrir, el foco se queda en `BODY`; un Tab lleva a `.case-nav-card` detrás del overlay. Hay `aria-modal="true"`, pero sin trampa de foco ni retorno del foco. Esc sí cierra.
  - `work/occ.html` tiene 3 figuras `data-zoomable` con cursor `zoom-in` (regla en extras), pero no carga `lightbox.js`: el clic no hace nada. Una affordance falsa.
  - En móvil el overlay muestra el mismo mapa a 320px de ancho (screenshot `15`); no aporta nada. El botón cerrar mide 35×40px.
- **Por qué importa:** "Click to expand" está escrito en los captions, pero no funciona para quien navega con teclado ni en OCC. Es el criterio de `interface-craft` "never ship a hover state without the matching focus state".
- **Propuesta:**
  1. HTML: agregar `<script src="/scripts/lightbox.js" defer></script>` a `work/occ.html` y `es/work/occ.html`.
  2. JS: en `init`, `el.tabIndex = 0; el.setAttribute('role','button'); el.setAttribute('aria-label','Ampliar imagen')` y abrir con Enter/Espacio. En `open`, guardar `document.activeElement` y hacer `btn.focus()`; en `close`, devolver el foco.
  3. En móvil, abrir el PNG original en una pestaña nueva (zoom nativo con pellizco) en lugar del overlay: `if (matchMedia('(max-width: 640px)').matches) { window.open(img.src); return; }`.
  4. CSS: `.lb-close { min-width: 44px; min-height: 44px; }` y `[data-zoomable]:focus-visible { outline: 2px solid var(--tech); outline-offset: 4px; }`.
- **Esfuerzo:** 1 a 2 h.
- **Screenshot:** [`15-compartamos-mobile-lightbox.png`](15-compartamos-mobile-lightbox.png).

### M5 · Medium · El rojo marca números positivos y las tags usan tres colores sin significado

- **Dónde:** `work/occ.html:501-526` (`.metric-value .accent` y `.tech`), tags del home (`.tag-tech`, `.tag-brand`, neutra).
- **Qué se ve:** en las métricas de OCC, "+34%" y "+22%" van en rojo, "+10%" y "+15" en azul, "106" en blanco con el "%" rojo y "#1" en rojo (screenshot `10`). Ningún criterio explica la alternancia. Cada tarjeta del home lleva tres estilos de tag (azul, neutro, rojo) en el mismo renglón.
- **Por qué importa:** la audiencia es fintech y banca, donde el rojo significa pérdida o alerta. Un "+34%" en rojo frente a un director de producto de un banco genera una lectura contradictoria de medio segundo. `interface-craft` lo dice así: "color is the weakest hierarchy tool and the most overused"; con tres colores por renglón, ninguno destaca.
- **Propuesta:** valores en `--text-primary`, color solo para indicar dirección o la métrica protagonista. Tags en un solo estilo neutro; si quieres distinguir método de industria, usa el orden o un separador, no el color.

```css
.metric-value .accent, .metric-value .tech { color: inherit; }
.metric:first-child .metric-value { color: var(--brand-ink); } /* solo la métrica protagonista */
.case-card .tag-tech, .case-card .tag-brand { color: var(--text-secondary); border-color: var(--border-strong); }
```

- **Esfuerzo:** 30 min.
- **Screenshot:** [`10-occ-desktop-metricas-color-sin-significado.png`](10-occ-desktop-metricas-color-sin-significado.png).

### M6 · Medium · El grid del home es una pared de tarjetas de texto, sin imagen en móvil

- **Dónde:** `index.html`, `.case-grid`.
  - `portfolio-extras.css:27` oculta `.case-card-visual` a ≤860px.
  - `portfolio-extras.css:29` cambia la imagen a `height:auto` dentro de un contenedor `aspect-ratio: 4/3` (`base.css:637`).
- **Qué se ve:**
  - En desktop, 7 tarjetas idénticas de solo texto (meta, H3 de 3 líneas, párrafo de 5 líneas, 4 o 5 tags) después de la destacada.
  - En móvil no hay ni una imagen de producto en todo el home; la única imagen es el retrato.
  - En la tarjeta destacada, la captura no llena el marco 4:3 y deja una franja vacía de ~50px abajo (screenshot `03`).
- **Por qué importa:** el home es un índice; el lector necesita diferenciar casos en un vistazo. Con 7 bloques del mismo peso, ninguno es punto focal (`interface-craft`: "add weight by removing, not by adding"). Un hiring manager que llega desde el móvil (LinkedIn) no ve una sola pantalla diseñada por ti antes de entrar a un caso.
- **Propuesta:**
  1. Mostrar el visual en móvil y hacer que llene su marco.
  2. Cambiar el párrafo largo de cada tarjeta por una línea de métrica en Mono (por ejemplo "0.24% → 2.84% conversión") y limitar a 3 tags.

```css
.case-card-visual img { height: 100%; object-fit: cover; object-position: top center; }
@media (max-width: 860px) {
  .case-card-visual { display: block; aspect-ratio: 16/10; order: -1; }
}
.case-card:not(.featured) .case-card-lede { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
.case-card .tags .tag:nth-child(n+4) { display: none; }
```

- **Esfuerzo:** 30 min el CSS; 1 h añadir una línea de métrica por tarjeta en EN y ES.
- **Screenshot:** [`03-home-desktop-tarjeta-destacada-hueco-y-focus.png`](03-home-desktop-tarjeta-destacada-hueco-y-focus.png).

### M7 · Medium · Tres anchos de columna dentro del mismo caso

- **Dónde:** Compartamos, sección 05.
  - `.container-wide` (`portfolio-extras.css:68`) mide 1072px y arranca en x=184, mientras el H2 "The numbers." arranca en x=362 (columna de 716px).
  - Los callouts miden 680px (`case.css:178`) y las figuras 716px; los bordes derechos no coinciden (1042 contra 1078).
  - En móvil, `.container-wide` suma `max-width: calc(100% - 3rem)` y padding de 1.5rem, así que el gutter es de 48px contra 32px en el resto.
- **Qué se ve:** el título de resultados queda descolgado a la derecha de sus propias tarjetas (screenshot `09`); en móvil las tarjetas de impacto se ven más angostas que todo lo demás.
- **Por qué importa:** `interface-craft`: "everything lines up with something". Un desalineamiento de 178px en la sección de resultados es justo el tipo de detalle que un hiring manager de diseño nota.
- **Propuesta:** las tarjetas de impacto viven en la columna narrow y los callouts se alinean al ancho de la columna.

```css
.case-section .container-wide { max-width: var(--max-width-narrow); padding-left: 2rem; padding-right: 2rem; }
@media (max-width: 640px) { .case-section .container-wide { max-width: 100%; } }
.case-section .callout { max-width: 100%; }
```

- **Esfuerzo:** 20 min (revisar Ops y FOVISSSTE, que también usan `.container-wide`).
- **Screenshot:** [`09-compartamos-desktop-impact-desalineado.png`](09-compartamos-desktop-impact-desalineado.png).

### L1 · Low · Dos retratos y dos tratamientos distintos

- **Dónde:** `index.html:78` (`.hero-photo.round`; la clase `round` no existe en el CSS) frente a `about.html`.
- **Qué se ve:** en el home, un recorte con pulgar arriba sobre un círculo azul eléctrico, dentro de un marco cuadrado (`base.css:405`, el `::before` es rectangular). El pulgar se sale del círculo. En About, un headshot corporativo cuadrado que sí llena el marco (screenshots `01` y `02`).
- **Por qué importa:** la combinación de círculo y cuadrado es un error de forma verificable: dos contenedores que no coinciden. Que la persona cambie de foto entre páginas resta coherencia de marca personal. **Opinión:** para bancos y B2B SaaS, el headshot de About transmite más seniority que el recorte con pulgar; el azul del círculo además compite con el rojo de marca.
- **Propuesta:** usar el mismo retrato en ambas páginas. Si te quedas con el recorte, darle marco circular: `.hero-photo.round::before { border-radius: 50%; }`.
- **Esfuerzo:** 15 min.
- **Screenshots:** [`01-home-desktop-hero-foto.png`](01-home-desktop-hero-foto.png), [`02-about-desktop-foto-distinta.png`](02-about-desktop-foto-distinta.png).

### L2 · Low · Menú móvil y navegación por teclado

- **Dónde:** `.nav-toggle`, `.nav-links` (`base.css:291-323`), `scripts/main.js:9-26`.
- **Qué se ve:**
  - El menú abierto no se cierra con Esc (verificado) y el botón sigue diciendo "Menu".
  - Los enlaces miden 35×16px. Cumplen WCAG 2.5.8 por el espaciado de 42px, pero quedan lejos de 44px y no ocupan la fila completa.
  - El toggle de idioma mide 34×30px.
  - No hay skip link: con teclado hay que pasar 6 elementos de nav en cada página antes del contenido (screenshot `14`).
  - Al enfocar un `.btn`, el outline se anima de 0 a 2px porque `.btn` usa `transition: all` (`base.css:429`). Es leve, pero el foco tarda 180ms en aparecer.
- **Propuesta:**

```css
@media (max-width: 720px) {
  .nav-links a { display: block; padding: .75rem 0; }
  .lang-toggle a { padding: .625rem .875rem; }
}
.btn { transition-property: background-color, border-color, color, transform; }
.skip-link { position: absolute; left: -9999px; }
.skip-link:focus { left: 1rem; top: 1rem; z-index: 200; background: var(--surface); padding: .5rem 1rem; border-radius: var(--radius-sm); }
```

  HTML: `<a class="skip-link" href="#main">Saltar al contenido</a>` y `id="main"` en el `header` del hero. JS: cerrar con Esc y cambiar el texto del botón a "Cerrar".
- **Esfuerzo:** 30 min.
- **Screenshot:** [`14-mobile-menu-abierto.png`](14-mobile-menu-abierto.png).

### L3 · Low · Deriva de la escala tipográfica y estilos paralelos

- **Dónde:** Compartamos usa 13 tamaños de fuente distintos (11, 11.2, 12, 12.48, 14, 15, 16, 17.6, 18, 22, 36, 44, 64 px). `case.css` usa `0.6875rem` para micro-labels y `portfolio-extras.css` usa `0.7rem`. `ui-design.html` trae su propio bloque `<style>` con `.exhibit-decision`, que replica `.callout`, y tiene 42 atributos `style=""`; Compartamos tiene 14.
- **Por qué importa:** `design-system` pide entre 4 y 6 pasos de escala. Cuatro tamaños entre 11 y 12.5px no se distinguen a simple vista y solo generan inconsistencia. Con Inter real (más angosto que el fallback), la columna de 680px pasará de ~74 a unos 82 caracteres por línea, por encima del rango de 60 a 75.
- **Propuesta:** definir en extras `--fs-micro: .75rem; --fs-small: .875rem; --fs-body: 1rem; --fs-lede: 1.25rem` y migrar por búsqueda y reemplazo. Limitar la prosa con `.case-section p, .case-section ul { max-width: 65ch; }`. Mover el `<style>` de `ui-design.html` a extras.
- **Esfuerzo:** 1 h.

### L4 · Low · Franja de logos casi invisible

- **Dónde:** `index.html`, `.experience-strip` (`base.css:663` opacity .65 y `base.css:671-672` grayscale con opacity .85, lo que da ~0.55 efectivo).
- **Qué se ve:** FOVISSSTE y Compartamos son manchas grises ilegibles a 26px en móvil; Santander domina por tamaño.
- **Propuesta:** `.experience-strip { opacity: 1; } .experience-strip img { opacity: .8; height: 28px; }` y normalizar el peso visual por logo (FOVISSSTE necesita ~36px).
- **Esfuerzo:** 5 min.

### L5 · Low · Acento rojo saturado sobre casi negro, usado para todo

- **Dónde:** `--brand #E11D48` se usa en el eyebrow del hero, el acento del H1, los números de caso, el link "Read case study", tags, la barra de la cita, la fase destacada del roadmap, métricas y el número de exhibit.
- **Por qué importa:** `interface-craft` advierte que un color saturado pensado para fondo blanco "vibra" sobre fondo oscuro, y `interface-redesign` lista "one accent color used for every emphasis" entre las señales de producto genérico. **Opinión:** el rojo funciona en el italic del H1 y en el botón primario; en el resto le resta fuerza.
- **Propuesta:** se resuelve con `--brand-ink` de H2 y la reducción de M5. Reservar `--brand` para el CTA primario y el acento del H1.

---

## Plan de mejoras en tres olas

### Ola 1 · Quick wins (menos de 1 h en total, solo `portfolio-extras.css` y una línea de HTML)

1. H3: alias `.case-hero-title`, `.case-hero-lede`, `.case-hero-logo` (10 min).
2. H2: tokens `--text-tertiary` y `--brand-ink` y su reasignación (15 min).
3. M1: corrección de especificidad en method-label y roadmap (5 min).
4. M3: estilo de `figcaption` (5 min).
5. M2: callouts con los colores de audiencia y arreglo de `--accent` (10 min).
6. H4 parcial: "Headline impact" a fila completa (5 min).
7. M4 parcial: agregar `lightbox.js` a `occ.html` EN y ES (2 min).

Con solo esta ola el sitio pasa AA en todo el texto medido y el caso ancla queda al nivel visual de OCC.

### Ola 2 · Medio (medio día)

1. H1: breakout de figuras en desktop, scroll horizontal en móvil para journey maps, phone trio en carrusel, enlace al original.
2. M7: alinear impacto y callouts a la columna.
3. M5: color de métricas y tags.
4. M6: visual en tarjetas en móvil y una línea de métrica por tarjeta.
5. H4: enlace "Ver resultados ↓" a `#impact` en los 14 casos.
6. L2, L4, L1.

### Ola 3 · Estructural (1 a 2 días)

1. H4: índice sticky por caso con sección activa.
2. M4: lightbox accesible (foco, rol, teclado) y comportamiento distinto en móvil.
3. H1 en `ui-design.html`: rehacer los exhibits para mostrar la UI a escala legible (recortes por componente en vez de lámina completa).
4. L3: escala tipográfica en tokens, migrar `style=""` y el `<style>` de `ui-design.html` a extras, unificar `div.figure` a `<figure>`.
5. Revisar si los casos deben medir 27,000 px. Es una decisión editorial y queda fuera de esta crítica visual, pero ninguna mejora de wayfinding compensa del todo la longitud.

### Si solo hay una hora

La Ola 1 completa. Tiene el mayor impacto por minuto: arregla accesibilidad, el caso ancla y dos componentes rotos sin tocar contenido.

### Lo que deliberadamente no toco

La dirección de estilo (editorial oscura), la paleta base, la pareja tipográfica, la estructura de navegación y el orden de secciones de cada caso. Todo eso funciona; el problema está en la ejecución.

---

## Screenshots

Carpeta: `/tmp/claude-0/-home-user-portfolio/5e73b312-fb1e-5c94-b752-1a395d3b1866/scratchpad/critique/`

| Archivo | Ilustra |
|---|---|
| [`01-home-desktop-hero-foto.png`](01-home-desktop-hero-foto.png) | L1, H2 (eyebrow rojo) |
| [`02-about-desktop-foto-distinta.png`](02-about-desktop-foto-distinta.png) | L1 |
| [`03-home-desktop-tarjeta-destacada-hueco-y-focus.png`](03-home-desktop-tarjeta-destacada-hueco-y-focus.png) | M6 (hueco en visual), focus ring correcto |
| [`04-compartamos-desktop-hero-sin-estilo.png`](04-compartamos-desktop-hero-sin-estilo.png) | H3, H4 (Headline impact huérfano), H2 |
| [`05-occ-desktop-hero-referencia.png`](05-occ-desktop-hero-referencia.png) | H3 (referencia correcta) |
| [`06-compartamos-mobile-journey-maps-ilegibles.png`](06-compartamos-mobile-journey-maps-ilegibles.png) | H1, M3 |
| [`07-compartamos-mobile-method-label-invertido.png`](07-compartamos-mobile-method-label-invertido.png) | M1 |
| [`08-occ-desktop-roadmap-cascada.png`](08-occ-desktop-roadmap-cascada.png) | M1 |
| [`09-compartamos-desktop-impact-desalineado.png`](09-compartamos-desktop-impact-desalineado.png) | M7 |
| [`10-occ-desktop-metricas-color-sin-significado.png`](10-occ-desktop-metricas-color-sin-significado.png) | M5 |
| [`11-whisper-desktop-callout-engineering-y-caption.png`](11-whisper-desktop-callout-engineering-y-caption.png) | M2, M3 |
| [`12-compartamos-desktop-phone-trio-diminuto.png`](12-compartamos-desktop-phone-trio-diminuto.png) | H1 |
| [`13-ui-design-desktop-exhibit-escala.png`](13-ui-design-desktop-exhibit-escala.png) | H1 |
| [`14-mobile-menu-abierto.png`](14-mobile-menu-abierto.png) | L2 |
| [`15-compartamos-mobile-lightbox.png`](15-compartamos-mobile-lightbox.png) | M4 |

Las capturas en crudo (fold y full page de cada página en ambos viewports) están en `raw/`. Scripts de medición: `measure.js` (contraste), `inter.js` (teclado, menú, lightbox, reduced motion), `cap2.js` y `ui.js` (capturas por sección y tamaños de imagen).
