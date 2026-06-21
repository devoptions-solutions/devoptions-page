// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: "https://devoptions.solutions",
  output: "server",
  adapter: netlify({
    devFeatures: {
      images: false,
      environmentVariables: true,
    },
  }),
  vite: {
    plugins: [tailwindcss()]
  }
});