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
- **Glossary** - Dictionary of terms organized by category. Glossary data is now stored in `src/data/glossaries.ts`.

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

## SEO Status

- The homepage (`https://bachatapp.org/`) is now **indexed** by Google. The previous "Page with redirect" issue appears resolved.
- The lesson page `https://bachatapp.org/section/history/lesson/history-70-80` is currently **"Crawled - currently not indexed."**
    - Key reasons identified from Google Search Console:
        - **Missing user-declared canonical tag** on the page.
        - A **"Temporary processing error"** for this URL when processed via the sitemap.
- All items in the `seo_plan.md` "Checklist Before Launch" are now marked as complete by the user.
- Next steps for the unindexed lesson page:
    1. Implement a self-referencing canonical tag.
    2. Monitor sitemap status in GSC.
    3. Request re-indexing after implementing the canonical tag.

This educational platform provides an accessible way to learn about bachata's rich musical heritage, instrumentation, and dance techniques with an interactive and engaging user experience.

## Change Log

- **[Date of Edit]**: Expanded `historyGlossary` in `src/data/glossaries.ts` with detailed terms and new categories related to bachata history, styles (Dominican, Urban, Moderna, Sensual, Fusion), and specific fusion types (Bachazouk, Bachatango, etc.), based on content from history lessons.
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
- **[Date of Edit]**: Extracted glossary definitions from `src/data/sections.ts` into a new file `src/data/glossaries.ts` for better organization.
- **[Date of Edit]**: Added a YouTube video link for Ataca y La Alemana in `src/data/lessons/history/history-10-20.ts`.
- **[Date of Edit]**: Embedded a YouTube video for Bachata Sensual in `src/data/lessons/history/history-10-20.ts`.
- **[Date of Edit]**: Embedded a YouTube video for Jorge Elizondo in `src/data/lessons/history/history-90-00.ts`.
- **[Date of Edit]**: Embedded a YouTube video for Bachata Sensual (Korke y Judith) in `src/data/lessons/history/history-90-00.ts`.
- **[Date of Edit]**: Added a "Bachata Elegante" fusion style with video to `src/data/lessons/history/history-10-20.ts`.
- **[Date of Edit]**: Added a Spotify embed for flamenco bachata song in `src/data/lessons/history/history-10-20.ts`.
- **[Date of Edit]**: Added Alex and Desiree traditional Dominican bachata demonstration video to the "Roots vs. Routes" section in `src/data/lessons/history/history-10-20.ts` with explanatory text highlighting key characteristics of traditional Dominican bachata style.
- **[Date of Edit]**: Added El Tiguere traditional Dominican bachata video from the 2000s to the "Tradition at Home vs. Transformation Abroad" section in `src/data/lessons/history/history-90-00.ts` with explanatory text showing how authentic bachata was preserved in the DR during the international evolution period.

## Frontend

* **Framework:** React + TypeScript + Vite
* **Styling:** Tailwind CSS
* **State Management:** (Implicit via component state, consider Zustand/Jotai if needed)
* **Routing:** `react-router-dom`
* **Markdown Rendering:** `react-markdown` with `rehype-raw` (for HTML) and `remark-gfm` (for tables, etc.).
* **UI Components:**
  * `LessonCard`: Displays lesson overview.

## Setting Up Gmail SMTP

To use Gmail's SMTP server for sending emails from the application, you'll need to configure it with an "App Password". Regular Gmail passwords will not work due to security measures.

Here's how to set it up:

1.  **Enable 2-Step Verification for Your Google Account:**
    *   Go to your Google Account settings: [https://myaccount.google.com/](https://myaccount.google.com/)
    *   Navigate to the "Security" tab.
    *   Under "Signing in to Google," click on "2-Step Verification."
    *   Follow the on-screen instructions to enable it. This is a prerequisite for generating App Passwords.

2.  **Generate an App Password:**
    *   Once 2-Step Verification is enabled, go back to the "Security" tab in your Google Account settings.
    *   Under "Signing in to Google," click on "App passwords." You might be asked to sign in again.
    *   If you don't see this option, it might be because:
        *   2-Step Verification is not set up for your account.
        *   2-Step Verification is only set up for security keys.
        *   Your account is through work, school, or other organization that manages these settings.
        *   You've turned on Advanced Protection for your account.
    *   At the bottom, click "Select app" and choose "Mail."
    *   Click "Select device" and choose "Other (Custom name)."
    *   Enter a name for the app (e.g., "BachataApp Server") and click "Generate."
    *   The generated App Password is the 16-character code in the yellow bar. **Copy this password immediately.** This is the `SMTP_PASSWORD` you will use in your `.env.local` file. It will not be shown again.
    *   Click "Done."

3.  **Configure Environment Variables:**
    *   In your `server/.env.local` file (create it if it doesn't exist, you can copy from `.env.local.sample`), add or update the following variables:
        ```env
        SMTP_HOST=smtp.gmail.com
        SMTP_PORT=465
        SMTP_USER=your-gmail-address@gmail.com
        SMTP_PASSWORD=your-16-character-app-password
        SMTP_TO=your-receiving-email-address@example.com
        ```
    *   Replace `your-gmail-address@gmail.com` with the Gmail account you used to generate the App Password.
    *   Replace `your-16-character-app-password` with the App Password you generated in the previous step.
    *   Replace `your-receiving-email-address@example.com` with the email address where you want to receive the feedback emails.

4.  **Restart Your Server:**
    *   If your Node.js server is running, restart it to apply the new environment variable settings.

After these steps, your application should be able to send emails using Gmail's SMTP server. Remember to keep your App Password secure and do not commit it directly into your version control system. Use environment variables as shown.
