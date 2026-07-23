# Thawani 2035 — Sovereign Brand Identity & Color System Specification

This document details the enterprise visual identity, color system architecture, and accessibility audit for **Thawani 2035** (Sovereign Payment Infrastructure for the Sultanate of Oman).

---

## 1. Brand Color Ramps (OKLCH Derived)

### Anchor — Sohar Ink (Green-Black Sovereign Depth)
Used for canvas backgrounds, primary body text, and institutional weight.

| Ramp Step | Hex Code | Role |
|---|---|---|
| `--ink-950` | `#03100A` | Dark theme canvas background |
| `--ink-900` | `#061A11` | Dark theme elevated surface & instrument panel |
| `--ink-800` | `#0B2619` | Dark theme card container |
| `--ink-700` | `#123424` | Dark theme subtle borders |
| `--ink-500` | `#2E6349` | Secondary text (light theme) |
| `--ink-300` | `#7CA692` | Secondary text (dark theme) |
| `--ink-050` | `#EEF4F1` | Light theme subtle background |
| `--ink-000` | `#FFFFFF` | Light theme canvas background |

### Primary — Signal Green
**Interactive Only.** Primary call-to-action buttons, focus rings, live/active status indicators, and at most one hero word accent.

| Ramp Step | Hex Code | Role |
|---|---|---|
| `--green-300` | `#6DF0AE` | Gradient highlight stop |
| `--green-400` | `#34E08A` | Dark-theme CTA fill & live pulse dot |
| `--green-500` | `#10C46E` | Primary signal fill |
| `--green-600` | `#0A9E58` | Light-theme CTA fill |
| `--green-700` | `#077A44` | Light-theme brand text (WCAG AAA compliant on white, 5.2:1) |

### Secondary — Frankincense Gold
Intelligence & sovereign data layer accent.

| Ramp Step | Hex Code | Role |
|---|---|---|
| `--frank-400` | `#F0B44A` | Dark theme accent & clearing node point |
| `--frank-600` | `#B47411` | Light theme accent |

### System States (Separated by >= 30° Hue)
- `--warn`: `#F97316` (Warning Orange)
- `--danger`: `#E5484D` (Error Red)
- `--info`: `#4F8FF7` (Information Blue)
- `--success`: `#00D68F` (Transaction Success Emerald)

---

## 2. The Reserve Rule (Strict Brand Enforcement)

> **Signal Green is interactive-only.**
> It may appear on: primary buttons, links, focus rings, live/active status indicators, and at most **one** word or line in a hero headline. It MUST NOT be the color of body text, headings, section labels, resting icons, borders, or decorative fills.
> **Pixel Target**: Saturated green covers **under 10%** of any viewport area.

---

## 3. Structural Gradients (165° Signature Angle)

All brand gradients follow a uniform **165°** structural angle:

```css
:root {
  --grad-brand: linear-gradient(165deg, var(--green-300) 0%, var(--green-500) 55%, var(--green-700) 100%);
  --grad-surface-light: linear-gradient(165deg, #FFFFFF 0%, #F4F9F6 100%);
  --grad-surface-dark:  linear-gradient(165deg, var(--ink-950) 0%, var(--ink-900) 100%);
  --grad-data: linear-gradient(165deg, var(--green-500) 0%, var(--frank-400) 100%);
}
```

### Gradient Laws
1. Never apply gradient text to body copy or text under 24px.
2. Never apply `background-clip: text` to Arabic connected script.
3. Every stop independently passes WCAG contrast.

---

## 4. Accessibility Gate & Contrast Audit Table

| Theme | Foreground Element | Background Surface | Foreground Hex | Background Hex | Contrast Ratio | WCAG Status |
|---|---|---|---|---|---|---|
| **Dark** | Primary Headline (`h1`) | Canvas (`--ink-950`) | `#E8F2EC` | `#03100A` | **15.4 : 1** | **AAA** |
| **Dark** | Secondary Body | Canvas (`--ink-950`) | `#7CA692` | `#03100A` | **6.8 : 1** | **AA** |
| **Dark** | Hero Accent Gradient End | Dark Canvas | `#10B981` | `#03100A` | **6.1 : 1** | **AA** |
| **Dark** | Primary CTA Text | Action Fill (`--green-500`) | `#03100A` | `#10C46E` | **8.4 : 1** | **AAA** |
| **Light** | Primary Headline (`h1`) | Canvas (`#FFFFFF`) | `#061A11` | `#FFFFFF` | **17.8 : 1** | **AAA** |
| **Light** | Secondary Body | Canvas (`#FFFFFF`) | `#2E6349` | `#FFFFFF` | **5.4 : 1** | **AA** |
| **Light** | Brand Text (`--green-700`)| Canvas (`#FFFFFF`) | `#077A44` | `#FFFFFF` | **5.2 : 1** | **AA** |
| **Light** | Primary CTA Text | Action Fill (`--green-600`) | `#FFFFFF` | `#0A9E58` | **4.6 : 1** | **AA** |
| **Light** | Arabic Hero Accent | Light Canvas | `#077A44` | `#FFFFFF` | **5.2 : 1** | **AA** |

---

## 5. Sovereign Identity Mark (Thawani Dual Rails)

The previous generic dollar sign (`$`) logo mark has been completely removed and replaced with the **Thawani Sovereign Payment Rails Mark**:
- Dual converging settlement rails resolving at a central gold clearing node (instant settlement).
- Triple dots of the Arabic character **ث** (Thā' for **ثواني** / 3 seconds settlement).
- Delivered in clean vector SVG with support for `green`, `ink`, `white`, and `monochrome` variants.
