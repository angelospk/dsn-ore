// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
import { readFileSync } from 'fs';
const siteConfig = JSON.parse(readFileSync(new URL('./src/site.config.json', import.meta.url), 'utf-8'));

export default defineConfig({
	site: siteConfig.site,
	base: siteConfig.base,
	integrations: [mdx(), sitemap()],
});
