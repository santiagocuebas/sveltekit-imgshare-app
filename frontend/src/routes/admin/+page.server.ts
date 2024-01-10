import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import axios from '$lib/services/axios';

export const load = (async () => {
	return axios({ url: `/admin` })
		.then(res => res.data)
		.catch(err => {
			console.error(err.message);
			throw redirect(307, '/');
		});
}) satisfies PageServerLoad;
