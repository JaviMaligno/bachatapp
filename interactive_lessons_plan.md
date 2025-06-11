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
## 2. Technical Implementation

### 2.1 Content Schema Updates (TypeScript)
1. Extend `Section` in `src/types/Lesson.ts` with:
   ```ts
   interactiveBlocks?: InteractiveBlock[];
   ```
2. Add discriminated-union type:
   ```ts
   type InteractiveBlock =
     | { kind: 'quiz'; id: string }
     | { kind: 'audio-layer'; tracks: AudioLayer[] }
     | { kind: 'drag-labels'; image: string; labels: Label[] }
     | { kind: 'timeline'; events: TimelineEvent[] }
     | { kind: 'flashcard'; termIds: string[] };
   ```

### 2.2 Markdown Parsing Enhancements
* Create `plugins/remarkInteractive.ts` to convert shortcodes like `[quiz id="derecho-q1"]` into `<InteractivePlaceholder … />` elements.
* Update `renderContentBlock` (Music & History) to detect the placeholder and render the matching interactive component.

### 2.3 New Reusable Components
| Component              | Key Tech / Libs          | Purpose |
|------------------------|--------------------------|---------|
| `InlineQuiz`           | existing `QuizSection`   | Single Q&A pop-ups |
| `AudioLayerPlayer`     | `wavesurfer.js`          | Solo/mute instrument layers, markers |
| `DragLabelBoard`       | `react-dnd`              | Drag-and-drop naming tasks |
| `HistoryTimeline`      | `react-horizontal-timeline` or CSS scroll-snap | Era slider |
| `GlossaryFlashcards`   | `framer-motion`          | Card-flip, spaced repetition |

### 2.4 Global State & Persistence
* Introduce `ProgressContext` (wrap `AppLayout`).
* Persist per-block completion in `localStorage` via `progressManager` upgrade (`sectionId.lessonId.blockId → { completed: true }`).
* **Phase-2**: sync to Firebase for cross-device progress.

### 2.5 Gamification Module
* `useGamification()` hook returns XP, badges, streak.  
* Trigger badge toast via `react-hot-toast` & confetti via `canvas-confetti`.

### 2.6 UX / Accessibility Polishing
* Lazy-load heavy embeds; use `react-intersection-observer` for in-view mounts.  
* Ensure ARIA labels & keyboard navigation for drag targets.  
* Dark-mode parity for all new components.

---
## 3. Libraries / Packages
```
pnpm add wavesurfer.js react-dnd react-dnd-html5-backend react-horizontal-timeline framer-motion canvas-confetti react-hot-toast react-intersection-observer
```

---
## 4. Roadmap & Milestones
| Phase | Duration | Deliverables |
|-------|----------|--------------|
| **1** | Week 1   | Schema update, `InlineQuiz`, remark plugin applied to one rhythm lesson (MVP) |
| **2** | 1-2 wks  | `AudioLayerPlayer`, `DragLabelBoard` for *Instruments* lesson; timeline for first history lesson |
| **3** | 1 wk     | Glossary flash-cards with spaced-repetition (SM-2) |
| **4** | Ongoing  | Gamification, community layer, Firebase sync |

---
## 5. Risks & Mitigations
| Risk | Mitigation |
|------|------------|
| Performance (many embeds) | Lazy-load components, code-split, compress images |
| Mobile drag-n-drop quirks | Provide long-press selection fallback |
| Accessibility gaps | Follow WCAG 2.1, keyboard & screen-reader testing |

---
## 6. Success Metrics
* Average lesson dwell-time ↑ 20 %.  
* Improvement in quiz accuracy between first & second attempt.  
* % users completing ≥ 1 interactive block per session.  
* Qualitative feedback on "How engaging was this lesson?" (target > 4 / 5).

---
*Last updated: 2025-06-11* 