import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		alias: {
			$lib: './src/lib'
		},
		adapter: adapter(),
		csrf: {
			checkOrigin: false
		}
	}
};

export default config;
