import type { PageServerLoad } from './$types';
import type { IComment, IImage } from '$lib/server/types';
import { redirect } from '@sveltejs/kit';
import axios from 'axios';
import { DIR } from '$lib/server/config.js';

export const load: PageServerLoad = (async ({ params: { image }, cookies }) => {
	console.log(image, DIR);
	const token = cookies.get('authenticate');

	const data = await axios({
		method: 'GET',
		url: `${DIR}/api/gallery/${image}`,
		headers: { 'Cookie': `authenticate=${token}` },
		withCredentials: true
	}).then(res => res.data)
		.catch(err => {
			console.error(err?.cause);
			return null;
		});

	if (data === null) throw redirect(307, '/');

	return {
		image: data.image as IImage,
		comments: data.comments as IComment[],
		sidebar: data.sidebarImages as IImage[]
	};
});
