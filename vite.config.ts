import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteSitemap from 'vite-plugin-sitemap';
import { sections } from './src/data/sections'; // Import the data

// Function to generate dynamic routes from sections data
const generateDynamicRoutes = () => {
  const routes: string[] = [];
  sections.forEach(section => {
    // Skip sections marked as coming soon
    if (section.comingSoon) {
      return; 
    }

    routes.push(`/section/${section.id}`);

    // Add lesson routes if they exist and are not coming soon
    if (section.lessons) {
      section.lessons.forEach(lesson => {
        // Check if lesson object has 'comingSoon' property and if it's true
        const lessonSummary = lesson as any; // Use type assertion to check potential prop
        if (!lessonSummary.comingSoon) {
           routes.push(`/section/${section.id}/lesson/${lesson.id}`);
        }
      });
    }

    // Add quiz routes if they exist
    if (section.quizzes) {
      section.quizzes.forEach(quiz => {
         // Assuming quizzes inherit comingSoon status from section
         routes.push(`/section/${section.id}/quiz/${quiz.id}`);
      });
    }

    // Add glossary route if it exists
    if (section.glossary) {
      routes.push(`/section/${section.id}/glossary`);
    }
  });
  // Add the base route explicitly, although the plugin might handle it
  // routes.push('/'); // Usually not needed if index.html exists at root
  return routes;
};


export default defineConfig({
  plugins: [
    react(),
    viteSitemap({
      hostname: 'https://relationships-tests.vercel.app/', // Replace if using custom domain
      dynamicRoutes: generateDynamicRoutes(),
      // Optional: You can add filename: 'sitemap.xml' if needed, but it's the default
      // filename: 'sitemap.xml', 
      // Optional: exclude specific paths if needed
      // exclude: ['/admin/**'],
      // Optional: set change frequency and priority
      // changefreq: 'weekly',
      // priority: 0.7,
    }),
  ],
  server: {
    host: '0.0.0.0',
    port: 3000,
    watch: {
      usePolling: true
    }
  },
  base: '/'
}); 