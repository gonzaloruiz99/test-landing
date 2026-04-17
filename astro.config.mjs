import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import sanity from '@sanity/astro';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://test-landing-astro.netlify.app',
  integrations: [
    sitemap(),
    react(),
    sanity({
      projectId: 'uvq1h6px',
      dataset: 'production',
      useCdn: false,
      studioBasePath: '/admin',
    }),
  ],
});