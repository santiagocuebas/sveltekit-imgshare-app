import { redirect } from '@sveltejs/kit';
// import axios from 'axios';
import type { PageServerLoad } from './$types';
// import { DIR } from '$lib/config.js';
import type { IComment, IImage } from '$lib/global';

export const prerender = true;

export const load: PageServerLoad = (async ({ params: { image }, cookies }) => {
	const token = cookies.get('authenticate');
	console.log(token);

	const data = await fetch(`http://localhost:4200/api/gallery/${image}`, {
		method: 'GET',
		headers: { 'Cookie': `authenticate=${token}` },
		credentials: 'include'
	})
		.then(res => res.json())
		.catch(err => {
			console.error(err.message);
			return null;
		});

	if (data === null) throw redirect(307, '/');

	return {
		image: data.image as IImage,
		comments: data.comments as IComment[],
		sidebar: data.sidebarImages as IImage[]
	};
});
