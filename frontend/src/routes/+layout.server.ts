import type { LayoutServerLoad } from './$types';
import axios from 'axios';
import { DIR } from '$lib/server/config';

export const load: LayoutServerLoad = (async ({ cookies }) => {
	const token = cookies.get('authenticate');
	const config = {
		method: 'GET',
		url: `${DIR}/api/auth`,
		headers: { 'Cookie': `authenticate=${token}` },
		withCredentials: true
	};

	return axios(config)
		.then(res => res.data)
		.catch(err => {
			console.error(err?.message);
			console.error(err?.request);
			return { };
		});
});
