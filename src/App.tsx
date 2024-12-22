import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Header from './components/layout/Header';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { createTheme } from '@mui/material/styles';
import LessonPage from './pages/LessonPage';
import LessonContent from './pages/LessonContent';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

// Create emotion cache
const cache = createCache({
  key: 'css',
  prepend: true,
});

// Create theme without any custom configurations first
const theme = createTheme();

function App() {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <Router>
          <div className="app">
            <Header />
            <main style={{ padding: '2rem 0' }}>
              <Routes>
                <Route path="/" element={
                  <div>
                    <h1>Test Content</h1>
                    <HomePage />
                  </div>
                } />
                <Route path="/:sectionId" element={<LessonPage />} />
                <Route path="/:sectionId/:lessonId" element={<LessonContent />} />
              </Routes>
            </main>
          </div>
        </Router>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
