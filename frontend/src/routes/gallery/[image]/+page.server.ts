import type { PageServerLoad } from './$types';
import type { ResponseImage } from '$lib/global';
import { redirect } from '@sveltejs/kit';
import axios from 'axios';
import { DIR } from '$lib/config.js';

export const load: PageServerLoad = (async ({ params: { image }, cookies }) => {
	const token = cookies.get('authenticate');
	let data: ResponseImage = { image: null, comments: [], sidebarImages: [] };

	await axios({
		method: 'GET',
		url: `${DIR}/api/gallery/${image}`,
		headers: { 'Cookie': `authenticate=${token}` }
	}).then(res => data = res.data)
		.catch(err => console.error(err.message));

	if (!data.image) throw redirect(307, '/');

	return {
		image: data.image,
		comments: data.comments,
		sidebar: data.sidebarImages
	};
});
