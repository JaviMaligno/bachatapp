# Bachata App - Project Summary

## Overview
Bachata App is an educational web application designed to teach users about bachata music, its history, dance, and cultural significance. The application provides a structured learning experience with sections on history, music, and dance, featuring lessons, quizzes, and a glossary of terms.

## Technology Stack
- **Frontend**: React with TypeScript
- **Styling**: Tailwind CSS with typography plugin
- **Routing**: React Router DOM
- **Markdown Rendering**: React Markdown with rehype-raw
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

This educational platform provides an accessible way to learn about bachata's rich musical heritage, instrumentation, and dance techniques with an interactive and engaging user experience.
