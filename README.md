# Armin Rouhanian — Product Design & UX Engineering Portfolio

A modern, high-performance personal portfolio built with **React 18**, **TypeScript**, **Vite**, and **CSS Modules**. Designed to showcase end-to-end product design, systems architecture, responsive interfaces, and technical collaboration across complex enterprise, B2B, and B2B2C platforms.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com)

---

## Highlights & Features

- **Component-Driven & Fully Typed Architecture**: Built with strict TypeScript (`strict: true`, `noImplicitAny: true`), pure CSS Modules, and zero third-party UI library bloat.
- **Unified Page Shell (`MainLayout`)**: Consistent, reusable page layout consolidating header, main landmark, footer, and scroll behaviors across all routes.
- **Figma-Inspired Micro-Interactions**: Custom multiplayer-style cursor, animated selection bounding boxes, and an orbit system spotlighting everyday product & development tools.
- **Full-Page Mobile Navigation**: Sleek, mobile-first slide drawer with a 2-line hamburger button, frameless icon buttons, aligned brand anchor, and body scroll lock.
- **Modular About Experience**: Fully decomposed sections covering Design Philosophy, Track Record & Experience, Capabilities Matrix (with mobile Carousel), Beyond Work personal snapshot, and CTA banner.
- **Interactive Design Showcase & Lightbox**:
  - Dynamic desktop browser frames & mobile device skins with responsive previews.
  - Standardized `<Carousel>` on mobile viewports with centered peek mode and dark-themed `dots-only` pagination.
  - Fullscreen Lightbox viewer with touch swipe gestures, thumbnail strip auto-centering, keyboard navigation (`ArrowLeft` / `ArrowRight` / `Escape`), and deep history state management (`history.pushState` / `popstate`) for native back-gesture support.
- **Micro-Interactions on Design System Buttons**:
  - `primary`: Wider comfortable padding with a smooth arrow reveal on hover that shifts the text without resizing button width.
  - `secondary`: Lighter neutral idle border transitioning smoothly to dark on hover with zero elevation.
  - `tertiary`: Clean text-only underline on hover without underlining leading/trailing icons.
  - `cta`: Prominent conversion button with an isolated hover hitbox that eliminates lag when rounding corners.
  - `iconPlain` & `iconOnly`: Lightweight, accessible icon button primitives.
- **Bulletproof Fallback & Shimmer States**:
  - Dark skeleton shimmer loading states (`useImageLoaded.ts`) with cache persistence.
  - Clean brand-aligned fallback placeholders (`ImagePlaceholder.tsx`) using CSS mask-mode vectors.
- **Tokenized Design System**:
  - Strict semantic design tokens (`palette.css`, `typography.css`, `layout.css`) defining surfaces, borders, text hierarchies, and brand accent colors.
- **SEO & Social Previews**:
  - Retina 2400×1260 Open Graph and Twitter Card preview tags optimized for Telegram, X (Twitter), and LinkedIn.

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Core Framework** | [React 18](https://react.dev/) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) (Strict Mode) |
| **Build Tooling** | [Vite 5](https://vitejs.dev/) |
| **Routing** | [React Router v6](https://reactrouter.com/) |
| **Styling** | CSS Modules + Custom Design Tokens (Pure CSS, CSS Masks, zero CSS-in-JS overhead) |
| **Icons** | Custom currentColor SVG Icon Mask System |
| **Hosting & Deployment** | [Vercel](https://vercel.com/) (configured with SPA client-side rewrite in `vercel.json`) |

---

## Project Structure

```text
├── public/
│   ├── assets/
│   │   ├── icons/          # Normalized SVG icons (24x24 currentColor vectors)
│   │   ├── tools/          # Brand logos for the tools animation stage
│   │   ├── projects/       # Optimized .webp thumbnails and showcase mockups
│   │   ├── cursor.svg      # Custom multiplayer Figma cursor
│   │   ├── logo.svg        # Brand vector logo with currentColor inheritance
│   │   └── profile.webp    # Profile photography for the About page
│   ├── og-image.jpg        # High-res 2400x1260 Open Graph social preview
│   ├── favicon.png
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── about/          # Modular About page sections (Hero, Philosophy, Experience, etc.)
│   │   ├── home/           # Homepage sections (Hero, SelectedWork, Tools, CaseStudies)
│   │   ├── layout/         # Shell components (Header, Footer, MainLayout, MobileNavDrawer, ScrollToTop)
│   │   ├── project/        # Case study layout & sections (Hero, Description, Impact, Timeline, Showcase)
│   │   └── ui/             # Reusable primitives (Button, Badge, Alert, Carousel, Icon, ImagePlaceholder)
│   ├── data/
│   │   ├── projects/       # Strongly typed project data (Pinket Customer, Dashboards, MetaMondial)
│   │   └── projectsData.ts # Central project registry & slug resolver
│   ├── hooks/              # Custom hooks (scroll lock, image loading, footer CTA nudge, smooth scroll)
│   ├── pages/              # Route entry pages (HomePage, AboutPage, ProjectDetailPage)
│   ├── styles/             # Global CSS tokens (palette.css, typography.css, layout.css)
│   ├── types/              # Centralized TypeScript definitions (ProjectData, Hero, Impact, Showcase, etc.)
│   ├── utils/              # Helper utilities (mailto URL generator, contact handlers)
│   ├── App.tsx             # SPA routing declarations with React.lazy code splitting
│   ├── index.css           # Global resets and skeleton shimmer animations
│   └── main.tsx            # Application entry point
├── vercel.json             # SPA routing rules for production deployment
├── tsconfig.json           # TypeScript strict compiler configuration
├── vite.config.js          # Vite build configuration
└── package.json
```

---

## Getting Started

### Prerequisites

Ensure you have **Node.js** (v18.x or higher) installed on your machine.

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/ArminRouhanian/armins-portfolio.git
cd armins-portfolio
npm install
```

### Development

To start the local development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Type Checking

To run the TypeScript compiler in check-only mode:

```bash
npm run typecheck
```

### Production Build

To produce an optimized production bundle in the `dist` directory:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## Deployment

The project is preconfigured for zero-config deployments on **Vercel** with SPA routing support via [`vercel.json`](./vercel.json):

```json
{
  "rewrites": [
    { "source": "/api/(.*)", "destination": "/api/$1" },
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

---

## Analytics & Telemetry (Neon PostgreSQL + Vercel Serverless)

A lightweight, privacy-conscious UTM and visitor telemetry system that tracks outbound campaign performance without bulky third-party tracking scripts.

### Key Capabilities

- **Priority Sources**: First-class tracking for `resume` and `linkedin` campaigns (e.g. `?utm_source=resume&utm_campaign=portfolio_pdf` or `?utm_source=linkedin&utm_campaign=profile_bio`).
- **Device & Browser Detection**: Classifies device (`mobile`, `desktop`, `tablet`) and browser (`Chrome`, `Safari`, `Firefox`, `Edge`, etc.) on the server side using the request's User-Agent string without client fingerprinting.
- **Privacy & Deduplication**: Employs a 365-day first-party cookie (`pf_device_id`) and session-scoped storage (`pf_session_id`). Composite database indexing strictly prevents duplicate entries on page refreshes or route changes.
- **Serverless Performance**: Built with `@neondatabase/serverless` using lightweight HTTP transport to eliminate TCP pool bloat on Vercel's Hobby tier.

### Target Campaign URL Examples

- Resume PDF Link: `https://yourdomain.com/?utm_source=resume&utm_medium=pdf&utm_campaign=product_design_lead`
- LinkedIn Bio Link: `https://yourdomain.com/?utm_source=linkedin&utm_medium=social&utm_campaign=profile_bio`

### Database Queries

Ready-to-use analytical queries for inspection (sessions by source, device ratios, returning visitors) are located in [`db/queries.sql`](./db/queries.sql). Run database migrations with `npm run db:migrate`.
