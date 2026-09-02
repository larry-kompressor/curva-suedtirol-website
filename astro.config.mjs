import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://curva-suedtirol.pages.dev', // später durch eigene Domain ersetzen
  integrations: [sitemap()],
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'it'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});