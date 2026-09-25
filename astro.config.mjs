// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  site: 'https://nusatlab.space',

  fonts: [
    {
      name: 'Roboto',
      cssVariable: '--font-sans',
      provider: fontProviders.fontsource(),
      weights: ['400 700'],
      styles: ['normal', 'italic']
    },
    {
      name: 'JetBrains Mono',
      cssVariable: '--font-mono',
      provider: fontProviders.fontsource(),
      weights: [400, 500],
      styles: ['normal'],
      fallbacks: ['monospace']
    },
    {
      name: 'Science Gothic',
      cssVariable: '--font-science-gothic',
      provider: fontProviders.local(),
      options: {
        variants: [
          {
            weight: '100 900',
            style: 'normal',
            src: ['./src/assets/fonts/science-gothic.woff2']
          }
        ]
      }
    }
  ],

  session: false,
  adapter: cloudflare({ imageService: 'compile' }),
  integrations: [mdx()]
});