import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import axios from '$lib/axios';

export const load = (async ({ params: { image } }) => {
	return axios({ url: `/gallery/${image}` })
		.then(res => res.data)
		.catch(err => {
			console.error(err.message);
			throw redirect(307, '/');
		});
}) satisfies PageLoad;
