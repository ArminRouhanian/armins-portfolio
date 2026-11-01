---
name: typography
description: >-
  Typography design token standards, 4px baseline grid rules, responsive viewport scales,
  exception classes, and component utility class composition for the portfolio typography system.
  Use this skill whenever defining, refactoring, or consuming typography tokens and styles.
---

# Typography System Documentation

This document serves as the complete usage guide and architectural reference for the typography system implemented in [`src/styles/typography.css`](file:///d:/Project/Portfolio/src/styles/typography.css).

---

## 1. Architectural Principles

1. **Strict 4px Baseline Grid**:
   Every line-height is mathematically calibrated so the resulting pixel height is an **even number** and ideally a **multiple of 4** (e.g. 16px, 20px, 24px, 28px, 32px, 36px, 44px).
2. **Responsive by Default**:
   Desktop and mobile scales are defined within `:root` (with mobile overrides encapsulated in `@media (max-width: 640px)`). When you compose or apply a heading class, it scales automatically on mobile viewports without needing duplicate media queries in component styles.
3. **Prefer Utility Classes Over Direct Attributes**:
   Instead of manually redeclaring `font-size`, `line-height`, `font-weight`, and `letter-spacing` in component CSS, compose the global typography utility classes (`composes: text-* from global;`).
4. **Column 41 Formatting Convention**:
   In `src/styles/typography.css`, all token declarations are 2-space indented and their values start strictly at **Column 41** (0-indexed 40) to preserve clean visual scanning and file consistency.

---

## 2. Design Tokens Reference

### A. Font Families
| Token | Value / Fallbacks | Description |
| :--- | :--- | :--- |
| `--font-family-base` | `"DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif` | Primary sans-serif font family |
| `--font-family-mono` | `ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace` | Monospace font family for code / technical data |

### B. Font Weights
| Token | Value | Utility Class |
| :--- | :--- | :--- |
| `--font-weight-regular` | `400` | `.font-regular` |
| `--font-weight-medium` | `500` | `.font-medium` |
| `--font-weight-semibold` | `600` | `.font-semibold` |
| `--font-weight-bold` | `700` | `.font-bold` |

### C. Letter Spacing (Tracking)
| Token | Value | Utility Class | Usage Context |
| :--- | :--- | :--- | :--- |
| `--letter-spacing-tighter` | `-0.03em` | `.tracking-tighter` | Large metric values / stats |
| `--letter-spacing-tight` | `-0.02em` | `.tracking-tight` | Hero and H1 display titles |
| `--letter-spacing-snug` | `-0.01em` | `.tracking-snug` | H2 and H3 section headings |
| `--letter-spacing-normal` | `0` | *(default)* | Body copy and small text |
| `--letter-spacing-label` | `0.08em` | `.tracking-label` | Uppercase category badges and section labels |

### D. Abstract Line Heights
| Token | Value | Usage Context |
| :--- | :--- | :--- |
| `--line-height-none` | `1` | Display heroes, metrics, buttons, uppercase labels |
| `--line-height-tight` | `1.25` | Compact multiline headings |
| `--line-height-normal` | `1.5` | Standard body paragraphs |
| `--line-height-relaxed` | `1.75` | Long-form reading content |

---

## 3. Scale Hierarchy & 4px Grid Alignment

### Desktop Viewport (Default)

| Scale / Role | Token: Font Size | Token: Line Height | Computed Line Height | Grid Multiple |
| :--- | :--- | :--- | :--- | :--- |
| **Hero Display** | `--font-size-hero` (`clamp(40px, 7.5vw, 96px)`) | `--line-height-hero` (`1`) | Fluid | Display |
| **Metric Stat** | `--font-size-stat` (`clamp(72px, 10vw, 120px)`) | `--line-height-stat` (`1`) | Fluid | Display |
| **Heading 1 (H1)** | `--font-size-h1` (`36px`) | `--line-height-h1` (`calc(44 / 36)`) | **44px** | 4px * 11 |
| **Heading 2 (H2)** | `--font-size-h2` (`28px`) | `--line-height-h2` (`calc(36 / 28)`) | **36px** | 4px * 9 |
| **Heading 3 (H3)** | `--font-size-h3` (`24px`) | `--line-height-h3` (`calc(32 / 24)`) | **32px** | 4px * 8 |
| **Heading 4 (H4)** | `--font-size-h4` (`20px`) | `--line-height-h4` (`1.4`) | **28px** | 4px * 7 |
| **Body Large** | `--font-size-body-lg` (`18px`) | `--line-height-body-lg` (`calc(28 / 18)`) | **28px** | 4px * 7 |
| **Body (Default)** | `--font-size-body` (`16px`) | `--line-height-body` (`1.5`) | **24px** | 4px * 6 |
| **Body Small** | `--font-size-body-sm` (`14px`) | `--line-height-body-sm` (`calc(20 / 14)`) | **20px** | 4px * 5 |
| **Button** *(Exception)* | `--font-size-button` (`15px`) | `--line-height-button` (`1`) | **15px** | Centered flex |
| **Caption** *(Exception)*| `--font-size-caption` (`13px`) | `--line-height-caption` (`calc(16 / 13)`) | **16px** | 4px * 4 |
| **Extra Small (XS)** | `--font-size-xs` (`12px`) | `--line-height-xs` (`calc(16 / 12)`) | **16px** | 4px * 4 |
| **Micro / URL** *(Exception)* | `--font-size-micro` (`11px`) | `--line-height-micro` (`calc(16 / 11)`) | **16px** | 4px * 4 |

### Mobile Viewport (`@media (max-width: 640px)`)
On mobile devices, headings automatically contract while remaining strictly aligned to the 4px baseline grid:

| Scale / Role | Mobile Font Size | Mobile Line Height | Computed Mobile Height | Grid Multiple |
| :--- | :--- | :--- | :--- | :--- |
| **Hero Display** | `clamp(32px, 8.5vw, 44px)` | `1` | Fluid | Display |
| **Metric Stat** | `clamp(34px, 8vw, 44px)` | `1` | Fluid | Display |
| **Heading 1 (H1)** | `28px` | `calc(36 / 28)` | **36px** | 4px * 9 |
| **Heading 2 (H2)** | `24px` | `calc(32 / 24)` | **32px** | 4px * 8 |
| **Heading 3 (H3)** | `20px` | `1.4` | **28px** | 4px * 7 |
| **Heading 4 (H4)** | `18px` | `calc(24 / 18)` | **24px** | 4px * 6 |

---

## 4. How to Use Typography in Components

### Pattern 1: CSS Modules Composition (Recommended)
Use `composes: <class> from global;` inside your component's CSS module. This eliminates duplicate rules, automatically handles responsive breakpoints, and cleanly decouples CSS from JSX signatures.

```css
/* MyComponent.module.css */
.sectionTitle {
  composes: text-h1 from global;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-md);
}

.sectionLead {
  composes: text-body-lg from global;
  color: var(--color-text-secondary);
}

.categoryTag {
  composes: text-label from global;
  color: var(--color-brand-primary);
}
```

```tsx
/* MyComponent.tsx */
import styles from './MyComponent.module.css';

export function MyComponent() {
  return (
    <section>
      <span className={styles.categoryTag}>Case Study</span>
      <h1 className={styles.sectionTitle}>Digital Banking Transformation</h1>
      <p className={styles.sectionLead}>A complete overhaul of the user experience...</p>
    </section>
  );
}
```

> **Note on CSS Modules:** `composes` must target a **single local class name** (e.g. `.sectionTitle`). It cannot be used on compound or descendant selectors (e.g. `.container h1` or `.nav a`). For descendant selectors, use Pattern 3 below.

---

### Pattern 2: Global Utility Classes in JSX
When creating ad-hoc layout wrappers or rapid UI elements, apply the classes directly:

```tsx
<h2 className="text-h2 font-semibold">Key Highlights</h2>
<p className="text-body text-secondary">Detailed overview of the quarterly findings.</p>
<span className="text-caption uppercase tracking-label">Live Preview</span>
```

---

### Pattern 3: Direct Token Consumption
For complex descendant selectors, animation keyframes, or dynamic styles where `composes` is disallowed by PostCSS:

```css
/* Navigation.module.css */
.nav a {
  font-family: var(--font-family-base);
  font-size: var(--font-size-body-sm);
  line-height: var(--line-height-body-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
}
```

---

## 5. Complete Utility Classes Cheat Sheet

### Hierarchy Classes
- `.text-hero` — Fluid hero banner titles (`clamp`, bold, `-0.02em` tracking)
- `.text-stat` — Massive metric numbers (`clamp`, bold, `-0.03em` tracking)
- `.text-h1` — Primary section headings (36px desktop / 28px mobile, bold, `-0.02em` tracking)
- `.text-h2` — Secondary section headings (28px desktop / 24px mobile, bold, `-0.01em` tracking)
- `.text-h3` — Subheadings and modal titles (24px desktop / 20px mobile, bold, `-0.01em` tracking)
- `.text-h4` — Card titles and emphasized subtitles (20px desktop / 18px mobile, bold)
- `.text-body-lg` — Lead body paragraphs and intro copy (18px, regular, 28px line-height)
- `.text-body` — Standard body copy (16px, regular, 24px line-height)
- `.text-body-sm` — Compact descriptions and table content (14px, regular, 20px line-height)

### Exception Classes
- `.text-label` — Section labels & tag indicators (13px, bold, `0.08em` tracking, uppercase, line-height 1)
- `.text-button` — Button text & CTA controls (15px, bold, line-height 1)
- `.text-caption` — Footers, image captions, metadata (13px, regular, 16px line-height)
- `.text-xs` — Cursor tags, checklist counters, badges (12px, regular, 16px line-height)
- `.text-micro` / `.text-url` — Browser URL bars, micro timestamps (11px, regular, 16px line-height)

### Weight & Modifier Classes
- `.font-regular` — `font-weight: 400`
- `.font-medium` — `font-weight: 500`
- `.font-semibold` — `font-weight: 600`
- `.font-bold` — `font-weight: 700`
- `.tracking-tighter` — `letter-spacing: -0.03em`
- `.tracking-tight` — `letter-spacing: -0.02em`
- `.tracking-snug` — `letter-spacing: -0.01em`
- `.tracking-label` — `letter-spacing: 0.08em`
- `.uppercase` — `text-transform: uppercase`

---

## 6. Guidelines & DOs and DON'Ts

### DO
- **DO compose global utility classes** in `.module.css` files whenever possible.
- **DO use calculated line heights** with even-pixel products if adding custom scale steps (e.g. `calc(28 / 18)`).
- **DO maintain Column 41 alignment** when modifying or adding tokens in `src/styles/typography.css`.
- **DO rely on root mobile breakpoints** for automatic responsive scaling of headings.

### DON'T
- **DON'T hardcode pixel font-sizes or line-heights** (e.g. `font-size: 17px; line-height: 23px;`) in component styles.
- **DON'T use `composes` on nested/descendant selectors** like `.container a` or `.menu > li` (CSS Modules only allows single `:local` class composition). Use CSS variables `var(--font-size-*)` and `var(--line-height-*)` for those cases.
- **DON'T override mobile typography locally** unless a specific component requires an atypical, bespoke layout constraint.
