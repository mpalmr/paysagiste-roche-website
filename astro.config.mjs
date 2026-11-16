import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.paysagisteroche.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
