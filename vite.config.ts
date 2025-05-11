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
      hostname: 'https://bachatapp.org/', // Replace if using custom domain
      dynamicRoutes: generateDynamicRoutes(),
      // Optional: You can add filename: 'sitemap.xml' if needed, but it's the default
      // filename: 'sitemap.xml', 
      // Optional: exclude specific paths if needed
      // exclude: ['/admin/**'],
      // Optional: set change frequency and priority
      // changefreq: 'weekly',
      // priority: 0.7,
    }),
    // Custom plugin to inject CSS preload link
    {
      name: 'inject-css-preload',
      enforce: 'post', // Run after asset handling
      apply: 'build', // Only run plugin during build
      transformIndexHtml(html, ctx) {
        // ctx.bundle is only available during build
        if (!ctx.bundle) return html;

        let cssLink = '';
        // Find the main CSS bundle file
        for (const assetName in ctx.bundle) {
          const asset = ctx.bundle[assetName];
          // Check if it's a CSS asset chunk and likely the main entry CSS
          if (asset.type === 'asset' && asset.fileName.endsWith('.css')) { 
             // Basic assumption: first CSS chunk is the main one.
             // May need adjustment if code splitting CSS or using CSS modules extensively.
             cssLink = `<link rel="preload" href="/${asset.fileName}" as="style">
    `; // Added newline and indentation for readability in <head>
             break; // Found the CSS file
          }
        }

        // Inject the link tag into the head before the closing </head> tag
        if (cssLink) {
          return html.replace('</head>', `${cssLink}</head>`);
        }
        return html;
      }
    }
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