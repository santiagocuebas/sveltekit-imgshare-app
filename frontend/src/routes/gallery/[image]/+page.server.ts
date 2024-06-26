import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import axios from '$lib/axios';

export const load = (async ({ params: { image }, cookies }) => {
	const token = cookies.get('authenticate');

	return axios({ url: `/image/${image}`, headers: { Authorization: token } })
		.then(res => res.data)
		.catch(err => {
			console.error(err.message);
			throw redirect(307, '/');
		});
}) satisfies PageServerLoad;
