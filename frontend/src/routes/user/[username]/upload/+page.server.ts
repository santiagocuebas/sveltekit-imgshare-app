import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import axios from '$lib/server/axios';

export const load = (async ({ params }) => {
	return axios({ method: 'POST', url: `/user/${params.username}/upload` })
		.then(res => res.data)
		.catch(err => {
			console.error(err.message);
			throw redirect(307, '/');
		});
}) satisfies PageServerLoad;
