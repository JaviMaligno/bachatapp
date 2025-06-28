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
- **[Date of Edit]**: Updated the Flamenco Fusion section in `src/data/lessons/history/history-10-20.ts` to replace the Spotify embed with a better example track that contains flamenco style singing, guitar patterns, and traditional claps, providing a more comprehensive demonstration of flamenco elements in bachata.
- **[Date of Edit]**: Added `interactive_lessons_plan.md` detailing a roadmap for introducing interactive blocks (inline quizzes, audio challenges, timelines, flash-cards, gamification, etc.) and updated content/schema changes to support these features.
- **[2024-12-XX]**: Implemented Phase 1 of interactive lessons plan:
  - Extended TypeScript types with `InteractiveBlock` discriminated union supporting quiz blocks
  - Created `InlineQuiz` component with confetti celebration on correct answers
  - Added interactive quiz support to both `HistoryLessonView` and `MusicLessonView` components
  - Created modular `createQuiz` helper function in `utils/quizHelpers.ts` for consistent quiz generation
  - Integrated interactive quizzes across ALL history lessons:
    - `history-50-60`: 3 quizzes on bachata origins, instruments, and pioneers
    - `history-70-80`: 3 quizzes on 1970s underground status, electric revolution, and urbanization
    - `history-90-00`: 3 quizzes on Juan Luis Guerra, urban bachata, and diaspora differences
    - `history-10-20`: 3 quizzes on digital breakthrough, dance styles, and UNESCO recognition
  - Integrated interactive quizzes across ALL music lessons:
    - `music-instruments`: 3 quizzes on core instruments, requinto characteristics, and bass patterns
    - `music-rhythm`: 3 quizzes on rhythm types, derecho placement, and mambo characteristics
    - `music-structure`: 2 quizzes on verse rhythm and mambo section features
  - Successfully tested all implementations with Docker Compose, confirming proper rendering and interaction
  - Quiz features include instant feedback, explanations, and celebratory animations

- **[2025-06-15]**: Started Phase 2 of interactive lessons plan - Audio/Rhythm Challenges:
  - Extended `InteractiveBlock` type to support `build-a-clave` interactive element
  - Created `BuildAClave` component in `src/components/interactive/BuildAClave.tsx`:
    - Interactive 8-beat grid where users can click to create rhythm patterns
    - Web Audio API integration for real-time audio feedback with synthesized clicks
    - Visual feedback with animated beat indicators and current playback position
    - Controls for Play/Stop, Check pattern, Reset, and Show Solution
    - Confetti celebration on correct pattern completion
    - Responsive design with touch support for mobile devices
  - Updated `MusicLessonView` to render the new `build-a-clave` interactive blocks
  - Added Build-a-Clave exercise to the `music-rhythm` lesson after the derecho section
  - Installed dependencies: `canvas-confetti` and `@types/canvas-confetti`
  - Successfully tested with Docker Compose - users can create, play, and verify rhythm patterns
  - This marks the first implementation of Phase 2's drag-and-drop/interactive audio features

- **[2025-12-14]**: Enhanced Phase 2 with specialized mambo pattern component:
  - Created `BuildMamboPattern` component in `src/components/interactive/BuildMamboPattern.tsx`:
    - Specialized component for mambo rhythm with sixteenth note subdivisions (16 beats per bar)
    - Two-row layout showing beats 1-2 (top) and 3-4 (bottom) with proper "1 e & a" labeling
    - Authentic "a caballo" (horse-like) pattern implementation with rapid triplet-like groupings
    - Same Web Audio API integration and controls as BuildAClave but optimized for complex rhythms
    - Visual feedback distinguishing between regular and accented sixteenth notes
  - Extended TypeScript types with `BuildMamboData` interface and `build-mambo` InteractiveBlock type
  - Updated `MusicLessonView` to render `build-mambo` interactive blocks
  - Replaced the mambo practice section in `music-rhythm` lesson with the new specialized component
  - Pattern demonstrates authentic mambo "a caballo" rhythm: [1,0,2,1,0,1,2,0,1,0,2,1,0,1,2,0]
  - Successfully tested - users can now experience the true complexity of mambo rhythm with proper sixteenth note timing

- **[2025-12-14]**: Implemented standalone "Build the Rhythms" quiz:
  - Created new `RhythmBuildingQuiz` type in TypeScript with specialized challenge structure
  - Built `RhythmBuildingQuizComponent` in `src/components/quizzes/RhythmBuildingQuiz.tsx`:
    - Multi-challenge quiz interface with progress tracking and navigation
    - Uses existing `BuildAClave` and `BuildMamboPattern` components for interactive rhythm building
    - Challenge status indicators showing completion status for each rhythm
    - Celebratory completion screen with perfect score display
    - Progress persistence using existing progressManager system
  - Created `rhythm-building-quiz.ts` data file with all three bachata rhythms:
    - Derecho: 16 eighth notes with accents on beats 4 and 8
    - Majao: Main beats only with accents, no off-beats
    - Mambo: Complex sixteenth note "a caballo" pattern
  - Updated `QuizContent` component to handle rhythm-building quiz type
  - Added rhythm building quiz to music section in `src/data/sections.ts`
  - Enhanced interactive components with `onComplete` callbacks for quiz integration
  - Successfully tested - users can now take a comprehensive rhythm building quiz that tests all three bachata rhythms

- **[2024-12-15]**: Implemented Label-the-Band drag-and-drop exercise with audio-visual learning:
  - Extended `InteractiveBlock` type to support `label-the-band` with proper `LabelTheBandData` interface
  - Created enhanced `LabelTheBand` component in `src/components/interactive/LabelTheBand.tsx`:
    - Interactive audio players as draggable items (not text labels) using Web Audio API
    - Hand-crafted SVG instrument silhouettes as drop zones (requinto, segunda, bass, güira, bongos)
    - Drag-and-drop functionality using `react-dnd` and `react-dnd-html5-backend` libraries
    - Code-based SVG stage layout with beautiful gradient background, stage platform, and lighting effects
    - Play/pause controls for each instrument audio sample with visual feedback
    - Real-time visual feedback showing correct/incorrect placements on silhouettes
    - Confetti celebration on successful completion
    - Educational challenge requiring both auditory instrument identification and visual shape recognition
    - Responsive design working on both desktop and mobile devices
  - Updated `MusicLessonView` to render `label-the-band` interactive blocks
  - Added enhanced label-the-band exercise to the `music-instruments` lesson conclusion section
  - Updated lesson data with actual audio file paths for all five core bachata instruments
  - Installed dependencies: `react-dnd` and `react-dnd-html5-backend`
  - Updated `interactive_lessons_plan.md` to mark Label-the-Band task as completed
  - Successfully tested with Docker Compose - users must listen to audio samples and match them to instrument silhouettes
  - This represents a significant step forward in Phase 2's audio-visual interactive learning features

### Enhanced Label-the-Band Interactive Exercise

A sophisticated drag-and-drop exercise for the `music-instruments` lesson that combines audio learning with visual recognition:

#### Audio Learning Features:
- Interactive audio players as draggable items (not text labels)
- Uses existing instrument audio files: `requinto.mp3`, `segunda.mp3`, `bass.mp3`, `guira.wav`, `bongos.wav`
- Web Audio API integration with play/pause controls
- Visual feedback showing play/pause states

#### Visual Recognition Features:
- **Highly detailed, research-based SVG silhouettes** for each instrument:
  - **Requinto**: Smaller classical guitar (4/5 size) with proper figure-8 shape, 4 tuning pegs
  - **Segunda**: Full-size classical guitar with 6 tuning pegs (3 per side), larger proportions
  - **Bass**: Longer neck, angular body, 4 tuning pegs in line, distinctive bass proportions with pickups
  - **Güira**: Cylindrical metal tube with ridged surface texture, handle, and prominent scraper stick
  - **Bongos**: Two connected drums (macho/hembra) with proper size difference and hardware details
- Each silhouette includes authentic details like tuning pegs, strings, hardware, and surface textures
- Research-informed designs based on actual instrument specifications and visual references
- **[2024-12-28 Update]**: Significantly enhanced silhouette visibility and accuracy:
  - Increased silhouette display size from 48px to 80px (78% larger for better instrument recognition)
  - Expanded drop zone dimensions from 12-15% to 20-22% width and 15-20% to 20-25% height → **[Update 2]** Further increased to 30% height and 25% height for percussion to prevent cutoff
  - Improved positioning to prevent overlap while maximizing visibility
  - Enhanced text sizing and spacing for better user experience
  - Made segunda clearly distinguishable from requinto through size differentiation
  - **[Update 2]** Completely redesigned bass guitar with unmistakable electric bass features:
    - Modern Fender-style body shape with distinctive upper horn cutaway
    - Much longer neck (16px width vs 8px) with extended scale length
    - Large bass headstock with 4 tuning machines on one side
    - Multiple prominent pickups with visible pole pieces
    - Control knobs section and bass bridge
    - Thick bass strings (1.2px vs 0.4px) and proper fret markers
  - **[Update 3]** Final bass guitar redesign for maximum clarity:
    - Simplified to clean geometric shapes (ellipses and curves) for instant recognition
    - Distinctive elongated body (35px radius, 90px height) that clearly differentiates from guitars
    - Prominent upper and lower horn cutaways typical of electric bass guitars
    - Waist contours that create the characteristic bass guitar silhouette
  - **[Update 2 & 3]** Extended güira scraper stick dramatically:
    - **Final version**: Increased scraper length from 50px to 120px (140% longer!)
    - Enhanced visibility with much thicker design (8px vs 5px width)
    - Very extended metal scraper part with enhanced detail
    - 35 texture lines (vs original 15) for realistic metal scraper appearance
    - Multiple motion lines showing vigorous scraping action
    - Added scraper tip detail for authentic appearance

#### Learning Challenge:
Creates a true multi-sensory learning experience requiring:
- **Auditory identification**: Students must listen to and recognize instrument sounds
- **Visual recognition**: Match audio to accurate instrument silhouettes
- **Spatial understanding**: Learn proper band positioning and instrument roles
- **Active learning**: Drag-and-drop interaction vs passive text matching

#### Technical Implementation:
- Uses `react-dnd` and `react-dnd-html5-backend` for smooth drag-and-drop
- TypeScript `LabelTheBandData` interface with `audioPath` property
- Beautiful stage background with gradient and lighting effects
- Real-time visual feedback for correct/incorrect placements
- Confetti celebration on completion

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

## User Experience Analysis (May 2025)

### Current State Assessment
After thorough exploration of the application, the following observations were made:

#### Strengths
- **Rich Educational Content**: Comprehensive lessons covering history, music, and dance aspects
- **Multimedia Integration**: Audio samples for instruments and rhythms enhance learning
- **Well-Structured Learning Path**: Clear progression through different aspects of bachata
- **Interactive Quizzes**: Audio-based challenges for instrument and rhythm recognition
- **Comprehensive Glossary**: Detailed terminology with cultural context
- **Modern UI/UX**: Clean design with dark mode support
- **Progress Tracking**: Visual indicators for lesson completion

#### Areas for Improvement
- **Limited Interactivity**: Lessons are primarily static text
- **No User Persistence**: Progress lost between sessions
- **Missing Social Features**: No community or sharing capabilities
- **Incomplete Content**: Several sections marked as "Coming Soon"

### Target Audience
1. **Primary**: Bachata dance students seeking cultural context and musicality
2. **Secondary**: Dance instructors needing educational resources
3. **Tertiary**: Music enthusiasts interested in Latin music history

### Improvement Roadmap

#### Phase 1: Core Fixes (Immediate)
- Complete missing content sections
- Improve navigation with breadcrumbs

#### Phase 2: Enhanced Learning (1-2 months)
- Add interactive timeline for history
- Include video tutorials for dance moves
- Implement practice mode with looped audio
- Create rhythm training exercises
- Add achievement/badge system

#### Phase 3: Community Features (2-3 months)
- User accounts with cloud sync
- Social features (share progress, compete)
- Discussion forums per lesson
- Teacher portal with resources
- Event calendar integration

#### Phase 4: Advanced Features (3-6 months)
- AI-powered dance feedback
- Music streaming integration
- Native mobile apps
- Certification program
- Multi-language support

### Marketing Strategy
- Content marketing through blog/social media
- Partnerships with dance schools and festivals
- SEO optimization for bachata learning keywords
- Freemium model with premium features
- Community building through social platforms

### Technical Recommendations
- Implement PWA for offline access
- Add analytics for user behavior tracking
- Improve performance with lazy loading
- Enhance accessibility features
- Set up A/B testing framework

## Recent Updates

### Quiz Question Visual Enhancements (Latest Update)
Based on user feedback requesting more standout quiz questions, the following improvements were implemented:

1. **New QuestionDisplay Component** (`src/components/quizzes/QuestionDisplay.tsx`)
   - Created a dedicated component for displaying quiz questions with enhanced visual styling
   - Features include:
     - Animated question number badge with gradient background
     - Large, bold question text (2xl font size)
     - Gradient background decoration for visual interest
     - Shadow effects and hover animations
     - Optional instruction text with emoji indicator
     - Progress indicator showing current question number

2. **Enhanced Quiz Components**
   - Updated `InstrumentQuiz` to use the new QuestionDisplay component
   - Updated `HistoryQuiz` to use the new QuestionDisplay component
   - Improved button styling with:
     - Gradient backgrounds for selected states
     - Shadow effects and hover animations
     - Larger text and better visual hierarchy
     - Transform effects on interaction

3. **Improved Visual Feedback**
   - Enhanced success/error messages with:
     - Gradient backgrounds and white text
     - Emoji indicators for better visual communication
     - Structured layout with title and description
     - Slide-in animations for smooth appearance

4. **Animation Support**
   - Added CSS animations in `globals.css`:
     - `slideIn` animation for feedback messages
     - `fadeIn` animation for smooth transitions
     - `pulse` animation for the question number badge

5. **Button Styling Improvements**
   - All quiz buttons now feature:
     - Gradient backgrounds with shadow effects
     - Hover scale transformations
     - Better disabled states
     - Consistent color scheme throughout

These changes make quiz questions significantly more prominent and engaging, addressing the user feedback about questions needing to be more standout.

### History Feature with Timeline (December 2024)
