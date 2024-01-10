import type { LayoutLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import axios from '$lib/services/axios';

export const load = (async ({ params }) => {
	return axios({ url: `/user/${params.username}/data` })
		.then(res => res.data)
		.catch(err => {
			console.error(err.message);
			throw redirect(307, '/');
		});
}) satisfies LayoutLoad;
