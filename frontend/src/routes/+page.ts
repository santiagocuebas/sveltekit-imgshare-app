import type { PageLoad } from './$types';
import type { IImage } from '$lib/global';
import axios from 'axios';
import { DIR } from '$lib/config.js';

export const load: PageLoad = (async () => {
	let data: { images: IImage[] } = { images: [] };
	
	await axios
		.get(`${DIR}/api/gallery`)
		.then(res => data = res.data)
		.catch(err => console.error(err.message));

	return { images: data.images };
});
