import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import axios from 'axios';
import { DIR } from '$lib/config.js';

export const load: PageServerLoad = (async ({ params, cookies }) => {
	const token = cookies.get('authenticate');
	const config = {
		method: 'POST',
		url: `${DIR}/api/user/${params.username}/settings`,
		headers: { 'Cookie': `authenticate=${token}` }
	};
	
	return axios(config)
		.then(res => res.data)
		.catch(err => {
			console.error(err.message);
			throw redirect(307, '/');
		});
});
