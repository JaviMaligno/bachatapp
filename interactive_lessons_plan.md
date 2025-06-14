# Interactive Lessons Upgrade Plan

## Overview
This document outlines a comprehensive strategy to transform the current, primarily static Bachata App lessons into highly-interactive learning experiences.  The plan is broken down into product-level ideas (learner experience) and the technical work required in this repository to implement them.

---
## 1. Product-Level Features

1. **Check-Point Questions**  
   • Single-question pop-ups after major paragraphs ("Did you get it?").  
   • Instant feedback, progress bar tick & confetti on success.

2. **Inline Audio / Rhythm Challenges**  
   • Solo-instrument player: learners toggle layers (bongo, güira, bass) on/off.  
   • Waveform with draggable markers ("Drop a pin where the martillo accents land").  
   • Drag-and-drop instrument names onto a band diagram.

3. **Interactive Timelines (History Lessons)**  
   • Horizontal decade slider (1950 → 2020) revealing text, images & 15-second Spotify embeds.  
   • Keyboard arrows / swipe to advance.

4. **Glossary Flash-Cards & Hover-Pop Definitions**  
   • Glossary terms flip a card on click; "Got it / Need Review" feeds a spaced-repetition queue.  
   • Hover on desktop, long-press on mobile.

5. **Branching "Choose-Your-Path" Walk-throughs**  
   • Learner picks between, e.g., *Dominican Folk* vs *Urban Fusion* tracks; component renders only the chosen branch plus a mini-map.

6. **Gamification Layer**  
   • XP points & badges ("Rhythm Rookie", "History Buff").  
   • Weekly streak & share-to-social CTA.  
   • End-of-lesson scorecard with animated progress ring.

7. **Community / Social**  
   • Emoji reactions or comment thread on each content-block.  
   • Leaderboard sorted by completion percentage.

---
## 2. Implementation Status

### ✅ **Phase 1 - COMPLETED (June 2025)**
**Check-Point Questions (Single-Question Pop-ups)**
- ✅ Extended TypeScript types with `InteractiveBlock` discriminated union
- ✅ Created `InlineQuiz` component with confetti celebrations and instant feedback
- ✅ Added interactive quiz support to both `HistoryLessonView` and `MusicLessonView`
- ✅ Built modular `createQuiz` helper function for consistent quiz generation
- ✅ **Deployed across ALL lessons:**
  - **History Lessons (11 quizzes total):**
    - `history-50-60`: 3 quizzes on origins, instruments, pioneers
    - `history-70-80`: 3 quizzes on underground status, electric revolution, urbanization
    - `history-90-00`: 3 quizzes on Juan Luis Guerra, urban bachata, diaspora
    - `history-10-20`: 3 quizzes on digital breakthrough, dance styles, UNESCO
  - **Music Lessons (8 quizzes total):**
    - `music-instruments`: 3 quizzes on core instruments, requinto, bass patterns
    - `music-rhythm`: 3 quizzes on rhythm types, derecho placement, mambo characteristics
    - `music-structure`: 2 quizzes on verse rhythm, mambo section features

**Features Implemented:**
- Beautiful blue-themed quiz UI with question mark icons
- Instant visual feedback (green checkmarks, red X marks)
- Educational explanations after each answer
- Celebratory confetti animations on correct answers
- Seamless integration within lesson content flow

### 🚧 **Next Phases - Planned**
- **Phase 2**: Audio/rhythm challenges, drag-and-drop exercises
- **Phase 3**: Interactive timelines for history lessons
- **Phase 4**: Gamification and community features

---
## 3. Technical Implementation

### 3.1 Content Schema Updates (TypeScript) ✅ **COMPLETED**
1. ✅ Extended `Section` in `src/types/Lesson.ts` with:
   ```ts
   interactiveBlocks?: InteractiveBlock[];
   ```
2. ✅ Added discriminated-union type:
   ```ts
   type InteractiveBlock =
     | { kind: 'quiz'; id: string; data: InlineQuizData }
     | { kind: 'audio-layer'; tracks: AudioLayer[] }     // Future
     | { kind: 'drag-labels'; image: string; labels: Label[] }  // Future
     | { kind: 'timeline'; events: TimelineEvent[] }     // Future
     | { kind: 'flashcard'; termIds: string[] };         // Future
   ```

### 3.2 Lesson Component Enhancements ✅ **COMPLETED**
* ✅ Updated `HistoryLessonView` component to render interactive blocks
* ✅ Updated `MusicLessonView` component to render interactive blocks  
* ✅ Created modular `createQuiz` helper function in `src/utils/quizHelpers.ts`
* ✅ Integrated `InlineQuiz` component seamlessly within lesson content

### 3.3 New Reusable Components
| Component              | Status | Key Tech / Libs          | Purpose |
|------------------------|--------|--------------------------|---------|
| `InlineQuiz`           | ✅ **DONE** | React, CSS animations, confetti | Single Q&A pop-ups |
| `AudioLayerPlayer`     | 🚧 Planned | `wavesurfer.js`          | Solo/mute instrument layers, markers |
| `DragLabelBoard`       | 🚧 Planned | `react-dnd`              | Drag-and-drop naming tasks |
| `HistoryTimeline`      | 🚧 Planned | `react-horizontal-timeline` or CSS scroll-snap | Era slider |
| `GlossaryFlashcards`   | 🚧 Planned | `framer-motion`          | Card-flip, spaced repetition |

### 3.4 Global State & Persistence (Future Phases)
* Introduce `ProgressContext` (wrap `AppLayout`).
* Persist per-block completion in `localStorage` via `progressManager` upgrade (`sectionId.lessonId.blockId → { completed: true }`).
* **Phase-2**: sync to Firebase for cross-device progress.

### 3.5 Gamification Module (Future Phases)
* `useGamification()` hook returns XP, badges, streak.  
* Trigger badge toast via `react-hot-toast` & confetti via `canvas-confetti`.

### 3.6 UX / Accessibility Polishing (Future Phases)
* Lazy-load heavy embeds; use `react-intersection-observer` for in-view mounts.  
* Ensure ARIA labels & keyboard navigation for drag targets.  
* Dark-mode parity for all new components.

---
## 4. Libraries / Packages

### Currently Used (Phase 1)
- React, TypeScript (existing)
- CSS animations for confetti effects
- Existing UI components and styling

### Future Phases
```
pnpm add wavesurfer.js react-dnd react-dnd-html5-backend react-horizontal-timeline framer-motion canvas-confetti react-hot-toast react-intersection-observer
```

---
## 5. Roadmap & Milestones

| Phase | Status | Duration | Deliverables |
|-------|--------|----------|--------------|
| **1** | ✅ **COMPLETED** | Week 1 | ✅ Schema updates, `InlineQuiz` component, deployed across ALL history & music lessons (19 total quizzes) |
| **2** | 🚧 Planned | 1-2 wks  | `AudioLayerPlayer`, `DragLabelBoard` for *Instruments* lesson; timeline for first history lesson |
| **3** | 🚧 Planned | 1 wk     | Glossary flash-cards with spaced-repetition (SM-2) |
| **4** | 🚧 Planned | Ongoing  | Gamification, community layer, Firebase sync |

**Phase 1 Results:** Far exceeded original scope! Instead of just one rhythm lesson, implemented interactive quizzes across:
- All 4 history lessons (11 quizzes total)
- All 3 music lessons (8 quizzes total)
- Created modular architecture for future expansion

---
## 6. Risks & Mitigations
| Risk | Mitigation |
|------|------------|
| Performance (many embeds) | Lazy-load components, code-split, compress images |
| Mobile drag-n-drop quirks | Provide long-press selection fallback |
| Accessibility gaps | Follow WCAG 2.1, keyboard & screen-reader testing |

---
## 7. Success Metrics

### Phase 1 Achievements ✅
* ✅ **Interactive Elements Deployed**: 19 total quizzes across all lessons
* ✅ **User Experience**: Beautiful, intuitive quiz interface with instant feedback
* ✅ **Educational Value**: Each quiz includes explanatory content for learning
* ✅ **Technical Architecture**: Modular, scalable system for future interactive elements

### Future Tracking (Phase 2+)
* Average lesson dwell-time ↑ 20 %
* Improvement in quiz accuracy between first & second attempt
* % users completing ≥ 1 interactive block per session
* Qualitative feedback on "How engaging was this lesson?" (target > 4 / 5)

---
*Last updated: December 14, 2024*  
*Phase 1 Status: ✅ COMPLETED - Interactive quizzes deployed across all lessons* 