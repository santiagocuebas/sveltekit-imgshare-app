import type { LayoutServerLoad } from './$types';
import axios from '$lib/axios';

export const load = (async ({ cookies }) => {
	const token = cookies.get('authenticate');
	
	return axios({ url: '/auth', headers: { Authorization: token } })
		.then(res => res.data)
		.catch(() => {});
}) satisfies LayoutServerLoad;
