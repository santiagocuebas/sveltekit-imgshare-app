import { redirect } from '@sveltejs/kit';
import axios from 'axios';
import type { PageServerLoad } from './$types';

export const load = (async ({ params: { image }, cookies }) => {
	const token = cookies.get('authenticate');

	const data = await axios({
		method: 'GET',
		url: `http://localhost:4200/api/gallery/${image}`,
		headers: { 'Cookie': `authenticate=${token}` }
	}).then(res => res.data);

	if (data === null) throw redirect(307, '/');

	return {
		image: data.image,
		comments: data.comments,
		sidebar: data.sidebarImages
	};
}) satisfies PageServerLoad;
