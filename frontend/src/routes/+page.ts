import axios from 'axios';
import type { PageLoad } from './$types';

export const load = (async () => {
	const res = await axios.get('http://localhost:4200/api/gallery');

	return {
		images: res.data
	};
}) satisfies PageLoad;
