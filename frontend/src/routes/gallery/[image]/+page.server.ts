import { redirect } from '@sveltejs/kit';
import axios from 'axios';
import type { PageServerLoad } from './$types';
import { DIR } from '$lib/config.js';
import type { IComment, IImage } from '$lib/global';

export const load = (async ({ params: { image }, cookies }) => {
	const token = cookies.get('authenticate');

	const data = await axios({
		method: 'GET',
		url: `${DIR}/api/gallery/${image}`,
		headers: { 'Cookie': `authenticate=${token}` }
	}).then(res => res.data);

	if (data === null) throw redirect(307, '/');

	return {
		image: data.image as IImage,
		comments: data.comments as IComment[],
		sidebar: data.sidebarImages as IImage[]
	};
}) satisfies PageServerLoad;
