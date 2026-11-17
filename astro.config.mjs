import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.paysagisteroche.com',
  // GitHub Pages serves project sites from a subpath; the workflow sets BASE_PATH.
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
