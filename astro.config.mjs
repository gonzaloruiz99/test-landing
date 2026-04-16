import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://test-landing-astro.netlify.app/',
  integrations: [sitemap()],
});