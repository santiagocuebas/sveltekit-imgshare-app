import type { LayoutServerLoad } from './$types';
import axios from '$lib/axios';

export const load = (async ({ cookies }) => {
	const token = cookies.get('authenticate');

	if (!token) return { };
	
	const data = await axios({ url: '/auth', headers: { Authorization: token } })
		.then(res => res.data)
		.catch(() => {});

	if (!data.user) cookies.delete('authenticate', { path: '/', maxAge: 0 });

	return data;
}) satisfies LayoutServerLoad;
