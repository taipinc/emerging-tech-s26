# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a course syllabus website for "PSAM 2802: Photo Processes: Emerging Technologies" (Spring 2026). Built with Astro 5.

**Live site**: https://taipinc.github.io/emerging-tech-s26

## Commands

- `npm run dev` - Start development server at localhost:4321/emerging-tech-s26
- `npm run build` - Build production site to `./dist/`
- `npm run preview` - Preview production build locally

## Architecture

**Layout**: Two-column split-screen design with a collapsible menu on the left and dynamic content area on the right. The menu can collapse to a thin "book spine" showing the course title vertically.

**Content Loading**: Markdown files in `src/content/` are read at build time using Node's `fs/promises` and parsed with the `marked` library. Content is injected into the page and swapped client-side via JavaScript.

**Routing**: Hash-based routing (e.g., `#assignments/week-01-a`) allows direct linking to content pages and browser back/forward navigation.

**Key Files**:
- `src/layouts/MainLayout.astro` - Base layout with two-column design, collapse button, and book spine
- `src/pages/index.astro` - Main page that loads all markdown content, handles navigation and link transformations
- `src/styles/global.css` - All styles including responsive mobile layout
- `src/content/menu.md` - Course info and description (displayed in left column)
- `src/content/weeks/*.md` - Week data with frontmatter (order, date, theme) parsed into schedule table
- `src/content/assignments/*.md` - Assignment content loaded dynamically
- `src/content/default.md` - Default landing content for right column

**Link Formats in Markdown**:
- `[Label](@contentKey)` - Internal link, loads content from `src/content/` (e.g., `@assignments/week-01-a`)
- `[Label](https://...)` - External links automatically open in new tab
- `[Label](/emerging-tech-s26/files/doc.pdf)` - File links (.pdf, .doc, etc.) open in new tab

**Static Files**:
- `public/files/` - PDFs and documents
- `public/images/` - Images
- `public/presentations/` - Presentation files

Note: Use URL-encoded paths or rename files to avoid spaces (e.g., `my-document.pdf` not `my document.pdf`).

## Deployment

Deployed to GitHub Pages via GitHub Actions. Workflow at `.github/workflows/deploy.yml` triggers on push to `main` branch.

## Mobile Behavior

On screens ≤768px:
- Menu and content are mutually exclusive (not side-by-side)
- Site opens with menu at 100% width
- Clicking internal link closes menu, shows content
- Menu button (fixed position) reopens menu
- No book spine on mobile
