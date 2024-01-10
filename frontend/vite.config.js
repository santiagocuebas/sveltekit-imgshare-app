import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	resolve: {
		alias: {
			http: 'rollup-plugin-node-polyfills/polyfills/http',
			https: 'rollup-plugin-node-polyfills/polyfills/http',
			util: 'rollup-plugin-node-polyfills/polyfills/util',
			zlib: 'rollup-plugin-node-polyfills/polyfills/zlib',
			stream: 'rollup-plugin-node-polyfills/polyfills/stream',
			events: 'rollup-plugin-node-polyfills/polyfills/events',
			path: 'rollup-plugin-node-polyfills/polyfills/path',
			url: 'rollup-plugin-node-polyfills/polyfills/url',
			fs: 'rollup-plugin-node-polyfills/polyfills/fs',
			assert: 'rollup-plugin-node-polyfills/polyfills/assert',
			tty: 'rollup-plugin-node-polyfills/polyfills/tty',
			os: 'rollup-plugin-node-polyfills/polyfills/os'
		}
	},
	plugins: [sveltekit()],
	server: {
		port: 3000
	},
	preview: {
		port: 3000
	}
};

export default config;
