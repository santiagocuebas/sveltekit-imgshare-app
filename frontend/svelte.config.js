import adapter from '@sveltejs/adapter-netlify';
import sveltePreprocess from 'svelte-preprocess';
import { sveltekit } from '@sveltejs/kit/vite';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const postcssConfig = join(__dirname, 'postcss.config.js');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		sveltekit(),
		sveltePreprocess({
			postcss: {
				configFilePath: postcssConfig
			}
		})
	],

	kit: {
		adapter: adapter({
			edge: false,
			split: true
		})
	}
};

export default config;
