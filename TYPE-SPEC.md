# Thawani 2035 — Sovereign Typography Specification

This document details the enterprise typography architecture for **Thawani 2035** (Oman's Sovereign Payment Infrastructure).

---

## 1. Font Stack Architecture

| Role | Family | Usage & Constraints |
|---|---|---|
| **Display** | `Geist` (Variable) / `Geist Sans` | Used strictly for large headings (≥40px / `--t-display-l` and `--t-display-xl`). Never used below 32px. |
| **Text / Body** | `Inter` (Variable v4 with `opsz`) | Used for all body text, UI controls, navigation, and form labels. |
| **Data / Mono** | `Geist Mono` / `JetBrains Mono` | All figures, OMR currency amounts, SLA numbers, transaction IDs, code snippets, and table columns. |
| **Arabic** | `IBM Plex Sans Arabic` (Variable) | Primary face for Arabic LTR/RTL rendering. Matched on optical weight and baseline with Inter. |
| **Fallback** | `Inter-fallback` | Metric-matched local fallback (`Arial` with `size-adjust: 107%`, `ascent-override: 90%`) for zero CLS on paint. |

```css
:root {
  --font-display: "Geist", "Inter", "Plus Jakarta Sans", system-ui, sans-serif;
  --font-text:    "Inter", "Inter-fallback", system-ui, -apple-system, sans-serif;
  --font-mono:    "Geist Mono", "JetBrains Mono", ui-monospace, "SF Mono", monospace;
  --font-arabic:  "IBM Plex Sans Arabic", "Noto Sans Arabic", sans-serif;
}
```

---

## 2. Fluid Type Scale & Optical Tracking Tokens

Ratio: Display 1.333 (Perfect Fourth) | UI 1.200 (Minor Third)

```css
:root {
  /* Size | Line Height | Tracking Tokens */
  --t-display-xl: clamp(3.25rem, 2.10rem + 5.20vw, 7.50rem); /* Hero display */
  --t-display-l:  clamp(2.50rem, 1.80rem + 3.40vw, 4.50rem); /* Section title */
  --t-h2:         clamp(2.00rem, 1.55rem + 2.10vw, 3.00rem); /* Sub-section h2 */
  --t-h3:         clamp(1.50rem, 1.32rem + 0.85vw, 1.875rem);/* Card heading h3 */
  --t-body-lg:    clamp(1.0625rem, 1.01rem + 0.28vw, 1.25rem);/* Lead paragraph */
  --t-body:       1rem;                                     /* Standard body */
  --t-sm:         0.875rem;                                 /* UI controls, badges */
  --t-label:      0.75rem;                                  /* Uppercase micro-labels */

  --lh-display-xl: 0.92;
  --lh-display-l:  0.98;
  --lh-h2:         1.06;
  --lh-h3:         1.18;
  --lh-body:       1.55;
  --lh-label:      1.30;

  --tr-display-xl: -0.035em;
  --tr-display-l:  -0.030em;
  --tr-h2:         -0.024em;
  --tr-h3:         -0.016em;
  --tr-body:       -0.006em;
  --tr-label:       0.09em;  /* Uppercase micro-labels */
}
```

### Optical Laws Applied
- **Headline Tightening**: Letterspacing becomes progressively tighter as font size grows (`-0.035em` for 100px+ hero display).
- **Micro-label Expansion**: Uppercase micro-labels (`ENTERPRISE FINTECH`) use positive tracking (`+0.09em`).

---

## 3. Dark-Background Optical Compensation & Luminance Band

In dark UI environments, bright white text bleeds optically (halation effect).

- **Primary Text**: `#E6EFEA` (High contrast, WCAG AAA compliant, softer than harsh `#FFFFFF`).
- **Secondary Text**: `#9FB2A8` (Sits at 6.8:1 contrast against dark background).
- **Headline Accent Gradient Band**: `#ECFDF5 0% -> #34D399 55% -> #10B981 100%`. Fading into dark green (`#004D2E` / `#0A7A3C`) is strictly banned to guarantee ≥4.5:1 contrast at all gradient stops.

---

## 4. Numerals & Data Formatting

Financial figures (OMR amounts, SLAs, transaction counts, latency numbers) require absolute alignment and tabular stability.

```css
.metric, .data, td.num, .sla, .price, code, .font-mono {
  font-family: var(--font-mono);
  font-variant-numeric: tabular-nums lining-nums slashed-zero;
  font-feature-settings: "tnum" 1, "zero" 1;
  letter-spacing: -0.01em;
}
```

- **OMR Baisa Precision**: All OMR amounts are rendered with exactly **3 decimals** (e.g., `OMR 24.500`).
- **GCC Digit Standard**: Western Arabic numerals (`0-9`) are enforced in both English and Arabic views according to GCC financial institution standards.

---

## 5. Arabic / RTL Typography Rules

```css
[lang="ar"], [dir="rtl"] {
  font-family: var(--font-arabic);
  letter-spacing: normal !important;   /* Connected script must never be letterspaced */
  line-height: 1.85;                   /* Extra vertical headroom for Arabic script */
  font-size: 1.08em;                   /* Optical scale match to Latin */
  text-transform: none !important;     /* Arabic has no case distinction */
  font-weight: 500;                    /* Optical weight balance */
}
```

- **Gradient Clip Protection**: Arabic text inside `.hero-title .accent` uses solid `#34D399` instead of CSS gradient background-clip, preserving smooth connected glyph rendering across webkit and gecko engines.
- **Embedded Latin**: Latin acronyms and brand names (e.g., `CBO`, `Thawani`, `API`) inside Arabic sentences are wrapped in `<span className="latin">` to maintain crisp typography.

---

## 6. Performance & Font Loading Budget

- **Strategy**: Variable font preloading with `font-display: swap`.
- **Zero-CLS Fallback**: `@font-face` definition for `Inter-fallback` adjusts Arial metrics (`size-adjust: 107%`, `ascent-override: 90%`) to match Inter's layout bounding box precisely.
- **Payload Budget**: Font network footprint ≤ 180 KB.
- **Cumulative Layout Shift (CLS)**: ≤ 0.02.
