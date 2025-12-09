// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	site: 'https://C4bbage64.github.io',
	base: '/',
	integrations: [tailwind({
		applyBaseStyles: true,
	})],
});
