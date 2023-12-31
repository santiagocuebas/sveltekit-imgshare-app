import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { DIR } from '$lib/server/config.js';
import axios from 'axios';

export const load: PageServerLoad = (async ({ params: { image }, cookies }) => {
	const token = cookies.get('authenticate');
	const config = {
		method: 'GET',
		url: `${DIR}/api/gallery/${image}`,
		headers: { 'Cookie': `authenticate=${token}` }
	};
	
	return axios(config)
		.then(res => res.data)
		.catch(err => {
			console.error(err.message);
			throw redirect(307, '/');
		});
});
