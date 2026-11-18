// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ['images.unsplash.com', 'plus.unsplash.com'],
    remotePatterns: [{ protocol: 'https' }],
  },
});
