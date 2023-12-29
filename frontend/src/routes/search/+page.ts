import type { PageLoad } from './$types';
import axios from 'axios';
import { DIR } from '$lib/config.js';

export const load: PageLoad = (async ({ url }) => {
	const searchParams = url.searchParams.get('q');

	return axios
		.get(`${DIR}/api/search/${searchParams}`)
		.then(res => res.data)
		.catch(err => {
			console.error(err.message);
			return { images: [] };
		});
});
