# Armin Rouhanian — Product Design & UX Engineering Portfolio

A modern, high-performance personal portfolio built with **React 18**, **Vite**, and **CSS Modules**. Designed to showcase end-to-end product design, systems architecture, responsive interfaces, and technical collaboration across complex enterprise, B2B, and B2B2C platforms.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com)

---

## Highlights & Features

- **Component-Driven Architecture**: Modular, maintainable components built with strict separation of concerns, zero bloated UI libraries, and pure CSS Modules.
- **Figma-Inspired Micro-Interactions**: Custom multiplayer-style cursor, animated selection bounding boxes, and an orbit system spotlighting everyday product & development tools.
- **Interactive Design Showcase**: 
  - Dynamic desktop browser frames & mobile device skins with responsive previews.
  - Fullscreen Lightbox viewer with touch swipe gestures, thumbnail strip auto-centering, keyboard navigation (`ArrowLeft` / `ArrowRight` / `Escape`), and custom scrollable mockup views.
  - Deep history management using native `popstate` / `history.pushState` to intercept mobile back button gestures without triggering ghost scroll-lock bugs.
- **Bulletproof Fallback & Preloading**:
  - Dark shimmer skeleton loading states (`useImageLoaded.js`) with cache persistence.
  - Clean brand-aligned fallback placeholders (`ImagePlaceholder.jsx`) using CSS mask-mode vectors and low-contrast palette tokens.
- **Tokenized Design System**:
  - Strict semantic design tokens (`palette.css`, `typography.css`) defining surfaces, borders, text hierarchies, and brand accent colors.
- **Accessible & Performance-Focused**:
  - Accessible dialog overlays, ARIA labels, semantic landmark regions, reduced motion queries (`prefers-reduced-motion`), and pure `.webp` asset optimizations.

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Core Framework** | [React 18](https://react.dev/) |
| **Build Tooling** | [Vite 5](https://vitejs.dev/) |
| **Routing** | [React Router v6](https://reactrouter.com/) |
| **Styling** | CSS Modules + Custom Design Tokens (Pure CSS, CSS Masks, zero CSS-in-JS overhead) |
| **Code Formatting** | [Prettier](https://prettier.io/) |
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
│   │   └── logo.svg        # Brand vector logo with currentColor inheritance
│   ├── favicon.png
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── common/         # Core UI building blocks (Button, Badge, Alert, Cursor, etc.)
│   │   ├── home/           # Homepage sections (Hero, SelectedWork, Tools, CaseStudies)
│   │   └── project/        # Case study sections (Hero, Impact, Timeline, Showcase, Nav)
│   ├── data/
│   │   ├── projectsData.js # Central project registry
│   │   └── projects/       # Typed content schemas (Pinket Customer, Dashboards, MetaMondial)
│   ├── hooks/              # Custom hooks (scroll lock, image loading, anchor interactions)
│   ├── pages/              # Route entry pages (Home, project case studies)
│   ├── styles/             # Global CSS tokens (palette.css, typography.css)
│   ├── App.jsx             # SPA routing declarations and backward-compatibility aliases
│   ├── index.css           # Global resets and skeleton shimmer animations
│   └── main.jsx            # Application entry point
├── vercel.json             # SPA routing rules for production deployment
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
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

---

## License

This project is open-source and available under the [MIT License](LICENSE).
