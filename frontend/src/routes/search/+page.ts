import axios from 'axios';
import type { PageLoad } from './$types';
import { DIR } from '$lib/config.js';
import type { IImage } from '$lib/global';

export const load = (async ({ url }) => {
	const searchParams = url.searchParams.get('q');

	const data = await axios
		.get(`${DIR}/api/search/${searchParams}`)
		.then(res => res.data);

	return {
		images: data.images as IImage[]
	};
}) satisfies PageLoad;
