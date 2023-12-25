import type { LayoutServerLoad } from './$types';
import axios from 'axios';
import { DIR } from '$lib/config';

export const load: LayoutServerLoad = (async ({ cookies }) => {
	const token = cookies.get('authenticate');
	
	return axios({
		method: 'GET',
		url: `${DIR}/api/auth`,
		headers: { 'Cookie': `authenticate=${token}` },
		proxy: false
	}).then(res => res.data)
		.catch(err => {
			console.error(err.message);
			return { user: undefined };
		});
});
