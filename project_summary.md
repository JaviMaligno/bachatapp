# Bachata App - Project Summary

## Overview

Bachata App is an educational web application designed to teach users about bachata music, its history, dance, and cultural significance. The application provides a structured learning experience with sections on history, music, and dance, featuring lessons, quizzes, and a glossary of terms.

## Technology Stack

- **Frontend**: React with TypeScript
- **Styling**: Tailwind CSS with typography plugin
- **Routing**: React Router DOM
- **Markdown Rendering**: React Markdown with rehype-raw and remark-gfm
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Backend**: Express.js (Node.js)
- **Containerization**: Docker

## Project Structure

The project follows a component-based architecture with the following structure:

### Core Directories

- `/src` - Main source code
  - `/components` - UI components organized by feature
  - `/contexts` - React context providers (e.g., DarkModeContext)
  - `/data` - Data models and content for the application
  - `/types` - TypeScript type definitions
  - `/styles` - Global style definitions
  - `/pages` - Page components
- `/server` - Backend API
- `/public` - Static assets

### Key Features

#### Content Structure

The application is organized into three main sections:

1. **History** - The history and evolution of bachata music
2. **Music** - Musical elements including instruments, rhythm, and structure
3. **Dance** - Dance techniques and steps

Each section contains:

- **Lessons** - Structured content with text, images, audio, and video
- **Quizzes** - Interactive assessments to test knowledge
- **Glossary** - Key terms and definitions

#### User Experience

- **Progress Tracking** - Tracks user progress through lessons and sections
- **Dark Mode** - Supports both light and dark themes
- **Responsive Design** - Works on various device sizes
- **Media Integration** - Incorporates audio samples, videos, and images

## Application Flow

1. Users start at the main menu, selecting a section (History, Music, or Dance)
2. Within each section, users can:
   - Navigate through lessons
   - Take quizzes to test their knowledge
   - Access the glossary for reference
3. Progress is tracked throughout the learning experience

## Data Models

Key data models include:

- **Section** - Top-level content categories
- **Lesson** - Educational content with various media
- **Quiz** - Assessment questions and answers
- **Glossary** - Dictionary of terms organized by category

## Deployment

The application is configured for:

- Docker containerization (Dockerfile and docker-compose.yaml)
- Vercel deployment (vercel.json)

## Development

- **Development Mode**: `npm run dev`
- **Build**: `npm run build`
- **Server**: `npm run server`
- **Linting**: `npm run lint`

## SEO

- Initial setup includes `public/robots.txt`, basic meta tags and canonical link in `index.html` (using placeholder URLs).
- Dynamic meta tags implemented with `react-helmet-async` via custom `SEO` component on all routes.
- Schema.org structured data implemented via `StructuredData` component with JSON-LD for all page types.
- Sitemap generation (`sitemap.xml`) is handled automatically during build (`npm run build`) via `vite-plugin-sitemap`, including dynamic routes.
- Security headers and `www` to non-`www` redirects configured in `vercel.json`.
- A detailed plan is available in `seo_plan.md`.

This educational platform provides an accessible way to learn about bachata's rich musical heritage, instrumentation, and dance techniques with an interactive and engaging user experience.

## Change Log

- **[Date of Edit]**: Added details about Bachata Moderna in the `history-90-00` lesson.
- **[Date of Edit]**: Restructured `history-90-00` lesson to separate Bachata Moderna content into its own block for better rendering.
- **[Date of Edit]**: Corrected markdown escaping issues in `history-90-00` lesson content.
- **[Date of Edit]**: Added details about Bachata Sensual in the `history-90-00` lesson.
- **[Date of Edit]**: Added Spotify embeds to the history-10-20 lesson table.
- **[Date of Edit]**: Fixed markdown table vertical alignment with CSS, trying middle alignment.
- **[Date of Edit]**: Added content for the 2010s-2020s period in Bachata history, including the rise of digital platforms, new styles (Sensual, Moderna, Fusion), global recognition (UNESCO, Romeo Santos' tour), the impact of TikTok, the Dominican vs. global scene dynamic, the remix debate, key dancers, and a style glossary.
- **[Date of Edit]**: Added detail about Tony Lara coining the term "Sensual Bachata" in the 2010-2020 history lesson.
- **[Date of Edit]**: Added Spotify remix examples to the history-10-20 lesson.
- **[Date of Edit]**: Expanded and restructured the Fusion Styles section in the `history-10-20` lesson to include Bachazouk, Bachatango, Urban Fusion, Flamenco Fusion, Reggaetona, and Kizata examples under a general heading.
- **[Date of Edit]**: Created the quiz file `src/data/quizzes/history-10-20-quiz.ts` covering the 2010s-2020s history lesson.

## Frontend

* **Framework:** React + TypeScript + Vite
* **Styling:** Tailwind CSS
* **State Management:** (Implicit via component state, consider Zustand/Jotai if needed)
* **Routing:** `react-router-dom`
* **Markdown Rendering:** `react-markdown` with `rehype-raw` (for HTML) and `remark-gfm` (for tables, etc.).
* **UI Components:**
  * `LessonCard`: Displays lesson overview.
