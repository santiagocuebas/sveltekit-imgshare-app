import type { PageLoad } from './$types';
import axios from 'axios';
import { DIR } from '$lib/config.js';

export const load: PageLoad = (async () => {
	return axios
		.get(`${DIR}/api/gallery`)
		.then(res => res.data)
		.catch(err => {
			console.error(err.message);
			return { images: [] };
		});
});
