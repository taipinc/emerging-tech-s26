# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a course syllabus website for "PSAM 2802: Photo Processes: Emerging Technologies" (Spring 2026). Built with Astro 5 using a minimal template.

## Commands

- `npm run dev` - Start development server at localhost:4321
- `npm run build` - Build production site to `./dist/`
- `npm run preview` - Preview production build locally

## Architecture

**Layout**: Two-column split-screen design with a fixed menu on the left and dynamic content area on the right.

**Content Loading**: Markdown files in `src/content/` are read at build time using Node's `fs/promises` and parsed with the `marked` library. Content is then injected into the page and swapped client-side via JavaScript.

**Key Files**:
- `src/layouts/MainLayout.astro` - Base layout with two-column CSS grid using named slots
- `src/pages/index.astro` - Main page that loads all markdown content and handles client-side navigation
- `src/content/menu.md` - Course schedule and navigation links (displayed in left column)
- `src/content/default.md` - Default landing content for right column
- `src/content/overview.md` - Course overview (loaded dynamically)

**Link Format in menu.md**: Links use a custom format parsed by client-side JS:
- `[Label](contentKey)` - Loads content from `contentMap` object
- `[Label](presentation:filename.html)` - Loads an iframe with the specified presentation file
- Standard markdown links work normally for external URLs
