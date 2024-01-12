import { sveltekit } from '@sveltejs/kit/vite';
// import { nodePolyfills } from 'vite-plugin-node-polyfills';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		// nodePolyfills({
		// 	include: ['http', 'https', 'stream'],
		// 	globals: {
		// 		Buffer: 'build',
		// 		global: true,
		// 		process: true,
		// 	},
		// })
	],
	server: {
		port: 3000
	},
	preview: {
		port: 3000
	}
};

export default config;
