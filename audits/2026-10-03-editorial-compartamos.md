# Pasada editorial · Compartamos (caso 01)

**Fecha:** 3 de octubre de 2026
**Estado:** aplicada el 3 de octubre de 2026, con las decisiones de David:
1. No hay pantalla de la pre-verificación. La decisión 1 se describe con una frase y usa `app-home.png` como figura.
2. La sección 06 y el 300% se movieron al caso 06.
3. Sin versión privada: todo lo secundario queda en `<details>`.
4. Encabezados aprobados tal como estaban propuestos.

**Resultado medido (EN):** ~1305 palabras y 6 imágenes visibles. Altura de ~27,000 a 10,012 px en desktop y de ~29,700 a 11,920 px en móvil. Los resultados empiezan a ~8,000 px (antes ~22,000). Ops quedó en ~9,600 px con los 4 dashboards (1 visible y 3 en `<details>`).

Lo que no quedó en la página: los componentes del Design System, el SMS y el push (siguen en el showcase de UI), y Mi Perfil del Contact Center.
**Aplica a:** `work/compartamos.html` y su espejo `es/work/compartamos.html` (misma estructura).
**Criterio de corte:** por cada bloque, una pregunta: ¿esto cambia la decisión del hiring manager de llamarte? Si no la cambia, el bloque baja de capa. No se borra nada.

## Resumen

| | Hoy | Propuesta (capa pública) |
|---|---|---|
| Palabras visibles | ~2,930 | ~1,550 |
| Lectura | 12 a 13 min | 6 a 7 min |
| Imágenes visibles | 25 (+2 logos) | 7 |
| Altura en desktop | ~27,000 px | ~10,000 a 12,000 px (estimado, no medido) |

Las ~1,400 palabras y 18 imágenes que salen de la vista pública se reparten entre tres destinos:

- **`<details>` en la misma página:** siguen ahí, cerradas por defecto.
- **Caso 06 (Compartamos ResearchOps):** hoy no tiene una sola imagen, y los dashboards de VoC son justo su evidencia.
- **Versión privada completa:** la página actual tal cual, en `/private/` con `noindex`, para mandarla antes del panel.

## Dos hallazgos que pesan más que el largo

### 1. El mejor insight del caso nunca aparece en el producto

El callout de research dice que el insight que desbloqueó el diseño fue **mover la pre-verificación de riesgo al paso uno**. La sección 03 nunca muestra dónde quedó eso en la app ni en el flujo. Un hiring manager de research va a preguntar exactamente eso: "¿y cómo se ve esa decisión en el producto?".

**Necesito de ti:** ¿existe una pantalla o un paso del flujo donde se vea la pre-verificación (semáforo de probable aprobación, consulta de buró, pre-scoring)? Si existe, debe ser la primera figura de la sección 03. Si no hay pantalla, basta con una frase concreta: en qué paso quedó, quién la ve y qué cambia para el promotor.

### 2. La sección 06 repite el caso 06

"ResearchOps legacy" (Toolkit, VoC y CX Governance, 474 palabras y 4 dashboards) cuenta la misma historia que el caso 06. Además, la tarjeta de impacto "300% research capacity" pertenece a ese caso, no a la originación de crédito. Hoy el lector ve el mismo logro dos veces y el caso 06 se queda sin evidencia visual.

## Estructura propuesta, sección por sección

Leyenda de destinos: **Queda** (visible), **Details** (colapsado en la misma página), **Caso 06** (se mueve), **Showcase** (ya existe en `ui-design.html`, se enlaza), **Privada** (solo en la versión larga).

### Hero · 123 → ~110 palabras

| Bloque | Destino | Nota |
|---|---|---|
| Título, lede, meta, "Ver resultados ↓" | Queda | El lede puede perder "and the Contact Center tool from scratch" si hace falta aire |
| Logo de Gentera | Fuera | Contradice la regla de logos (solo cliente final). Ya estaba en la auditoría UX (L3) |

### 01 · El problema · 202 → ~170 palabras

| Bloque | Destino | Nota |
|---|---|---|
| Crédito grupal y default <3% | Queda | Contexto imprescindible para quien no conoce microfinanzas |
| Mochila de 10 kg, 5 a 8 días | Queda | Es la imagen que todos recuerdan |
| Callout "The constraint that made this hard" | Queda | Recortar a 2 frases |

### 02 · Research · 585 → ~380 palabras, 1 figura visible

**Encabezado propuesto** (que diga la conclusión, no el tema):
- EN: "40% of the trips to the branch were habit, not regulation."
- ES: "El 40% de las vueltas a la sucursal era costumbre, no regulación."

| Bloque | Destino | Nota |
|---|---|---|
| Párrafo [My call] de etnografía + hallazgo del 40% | Queda | Es el corazón del caso |
| 3 tarjetas de método | Queda | Recortar cada texto a ~25 palabras |
| Callout "What the research actually found" | Queda | El mejor párrafo del caso. Conectarlo con la sección 03 (ver hallazgo 1) |
| Intro de journey maps | Queda | Una frase: "when a Risk director said 'the process works fine', we put the journey map on the screen" |
| Journey map **Nueva Contratación fase 1** | Queda | Es donde se quemaban los 8 días. Un mapa bien visto convence más que cinco a medio ver |
| Cambaceo, Contratación fase 2, Renovación, Mis Clientes | Details | "Ver los otros 4 journey maps" |

### 03 · Diseño · 1,185 → ~450 palabras, 4 figuras visibles

Es la sección que más pesa: 16 imágenes y 8 subtítulos, organizados como inventario de pantallas. Propongo reorganizarla en **tres decisiones que salen del research**, cada una con su evidencia:

**Encabezado propuesto:**
- EN: "Three decisions, each traced back to the field."
- ES: "Tres decisiones, cada una con origen en campo."

| Decisión | Figura visible | Texto que queda |
|---|---|---|
| **1. Pre-verificación al paso uno + app offline-first** | Pantalla de pre-verificación si existe (hallazgo 1); si no, `app-home.png` | Párrafo del offline-first ([My call]) + cómo quedó la pre-verificación |
| **2. Contact Center con guion integrado** | `cc-datos-capturados.png` | El guion resuelve compliance (aviso LFPDPPP oral) y capacitación a la vez. Es la decisión más original del caso |
| **3. Un solo sistema para todos los roles (RBAC + Design System)** | Phone trio (`app-subgerentes`, `app-clientes`, `app-renovacion`) | Un codebase, profundidad según el rol. Enlace "Ver el Design System completo →" al showcase |

| Bloque actual | Destino |
|---|---|
| Design System: botones y campos | Showcase (ya están ahí, a mayor tamaño) |
| Call wrap-up (`cc-tipificar-llamada`) | Details "Más del Contact Center" |
| Indicadores de cartera | Details |
| SMS y push | Showcase (`ds-auth.png` ya existe) |
| Mi Perfil del Contact Center | Privada (no cambia ninguna decisión) |
| Registro duplicado | Details. Es un buen [My call], pero de detalle |
| Gestor de Prospectos (texto, callout de taxonomía y 3 figuras) | Details "Gestor de Prospectos: el modelo de datos detrás". La taxonomía de estatus es buen material para el panel |

### 04 · Compliance · 209 → ~150 palabras

El encabezado ya dice la conclusión: "Every checkpoint, preserved. Every trip to the branch, eliminated." Se queda. Para banca, esta sección es diferenciadora.

| Bloque | Destino | Nota |
|---|---|---|
| 3 callouts seguidos (KYC/AML, LFPDPPP, RBAC) | Queda, en otro formato | Una lista de 3 renglones (término en negrita + una frase) en lugar de tres cajas iguales. Lo mismo pedía la crítica de diseño (M2) |

### 05 · Resultados · 149 → ~180 palabras

| Bloque | Destino | Nota |
|---|---|---|
| 8d → 2h, 15,000+, <3% | Queda | |
| 300% research capacity | Caso 06 | Ahí ya es la métrica principal |
| **Nueva 4.ª tarjeta:** 74.3% de satisfacción en 113 asesores (VoC Occidente) | Queda | Evidencia de adopción post-lanzamiento, que hoy está escondida en la sección 06 |
| **Nuevo callout corto:** el handoff campo → Contact Center era el punto más débil en todas las regiones y definió el roadmap de Q1 2024 | Queda | Viene de "What the regional split revealed". Muestra que la investigación siguió después del lanzamiento |
| Callout "On timeline and stakeholder management" | Pasa al cierre | |

### 06 · Cierre · 474 → ~120 palabras

**Encabezado propuesto:**
- EN: "The hardest part wasn't the product."
- ES: "Lo más difícil no fue el producto."

| Bloque | Destino | Nota |
|---|---|---|
| Negociación del timeline con liderazgo | Queda | Viene de resultados. Es la historia que ya usa la tarjeta del home |
| Toolkit, VoC, CX Governance | Caso 06 | En Compartamos queda una línea: "The research practice I built around this product is its own case →" |
| 4 dashboards de VoC + análisis regional | Caso 06 | Le dan al caso 06 sus primeras imágenes |

## Versión privada

- **Ruta:** `/private/compartamos-full-<sufijo-aleatorio>/` y su espejo en `/es/private/`.
- **Contenido:** la página actual completa, sin recortes.
- **Protección:** ya existe: `X-Robots-Tag: noindex` en `vercel.json` y `Disallow` en `robots.txt`. Habría que agregar `<meta name="robots">` y quitarla del sitemap.
- **Uso:** el link se manda después de la primera llamada o como pre-lectura del panel. Conviene una línea al final de la versión pública: "Full case with all artifacts available on request".

## Orden de implementación sugerido

1. Resolver el hallazgo 1 (tu respuesta sobre la pre-verificación).
2. Crear la versión privada copiando la página actual, para no perder nada.
3. Recortar la versión pública, EN y ES.
4. Mover VoC y el 300% al caso 06, EN y ES.
5. Medir la altura real y repetir la revisión de overflow y contraste.

**Esfuerzo estimado:** 3 a 4 h para EN + ES, más el tiempo de tu revisión de copy.

## Decisiones que son tuyas

1. **Pre-verificación:** ¿hay pantalla o solo descripción?
2. **¿Apruebas mover la sección 06 y el 300% al caso 06?**
3. **Versión privada:** ¿la creamos o prefieres solo `<details>` sin versión larga aparte?
4. **Encabezados propuestos:** son una primera versión. Ajusta el tono si no suenan a ti.
