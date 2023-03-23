import axios from 'axios';
import type { PageLoad } from './$types';

export const load = (async ({ url }) => {
	const searchParams = url.searchParams.get('q');

	const data = await axios({
		method: 'GET',
		url: `http://localhost:4200/api/search/${searchParams}`
	}).then(res => res.data);

	return {
		images: data.images
	};
}) satisfies PageLoad;
