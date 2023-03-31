import axios from 'axios';
import type { PageLoad } from './$types';
import { DIR } from '$lib/config.js';
import type { IImage } from '$lib/global';

export const load = (async () => {
	const data = await axios.get(`${DIR}/api/gallery`).then(res => res.data);

	return {
		images: data as IImage[]
	};
}) satisfies PageLoad;
