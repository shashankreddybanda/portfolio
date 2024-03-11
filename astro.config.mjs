import { defineConfig } from 'astro/config';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
	site: 'https://shashankreddybanda.github.io',
	base: '/portfolio',
	integrations: [
		partytown({
			config: {
				forward: ["dataLayer.push"],
			},
		})
	]
});
