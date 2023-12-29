import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import axios from 'axios';
import { DIR } from '$lib/config.js';

export const load: PageServerLoad = (async ({ params }) => {
	return axios
		.post(`${DIR}/api/user/${params.username}/upload`)
		.then(res => res.data)
		.catch(err => {
			console.error(err.message);
			throw redirect(307, '/');
		});
});
