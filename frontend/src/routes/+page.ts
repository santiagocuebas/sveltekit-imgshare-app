import type { PageLoad } from './$types';
import axios from '$lib/services/axios';

export const load = (async () => {
	return axios({ url: '/gallery' })
		.then(res => res.data)
		.catch(err => {
			console.error(err.message);
			return { images: [] };
		});
}) satisfies PageLoad;
