# Inspired Component Library

A small, opinionated collection of reusable React components inspired by the shared UI library I helped build and refactor during my internship at **Solace**. The original code lives in a private repository, so this project is a public re-imagining that captures the same patterns, conventions, and design sensibilities in a form that can be freely explored, extended, and shared.

The site itself doubles as living documentation: every component has a live preview, a description of its props, and a copy-ready code snippet.

## Why This Exists

At Solace, I contributed to a shared component repository used by multiple product teams. My work involved close collaboration with UX designers and other developers to ship accessible, consistent, and well-documented UI primitives — the quiet building blocks that speed up every feature a team ships afterwards.

This project is a way to preserve that experience in public. It demonstrates how I think about component APIs, styling systems, theming, and documentation, without exposing any proprietary code.

## What's Inside

- A growing set of components (starting with `Button`) written in **TypeScript** with **SCSS modules**.
- Light and dark themes driven entirely by CSS custom properties, so palettes can be swapped without touching component code.
- A live preview for each component, next to the source snippet you would paste into your own project.
- Responsive layout patterns that adapt cleanly from wide desktop views down to mobile.

## Tech Stack

- [Next.js 15](https://nextjs.org) (App Router)
- React 19 + TypeScript
- SCSS Modules
- `prism-react-renderer` for syntax-highlighted snippets

## Getting Started

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

### Available scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the Next.js dev server with hot reload. |
| `npm run build:app` | Build the documentation site for production. |
| `npm run build:components` | Type-check and build the component library via `tsc`. |
| `npm run start` | Serve the previously built production site. |
| `npm run lint` | Run ESLint across the project. |

To run the dev server on a different port (useful if `3000` is already in use):

```bash
npm run dev -- -p 3001
```

## Project Structure

```
src/
├── app/            # Next.js App Router pages (docs site)
│   ├── button/     # One folder per documented component
│   ├── layout.tsx  # Root layout, theme handling, sidebar
│   └── page.tsx    # Landing / intro page
└── components/     # The actual reusable component library
    └── Button/
```

## Theming

Themes are driven by CSS custom properties defined in `src/app/globals.scss`. Switching the `data-theme` attribute on `<html>` between `light` and `dark` swaps the palette without any component code changes. The initial theme follows the user's `prefers-color-scheme` and can be overridden from the sidebar toggle.

## Roadmap

More components and richer per-component documentation are on the way. Feedback and suggestions are welcome.
