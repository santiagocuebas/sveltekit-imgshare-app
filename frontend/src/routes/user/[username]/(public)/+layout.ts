import type { LayoutLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import axios from 'axios';
import { DIR } from '$lib/config.js';

export const load: LayoutLoad = (async ({ params }) => {
	return axios
		.get(`${DIR}/api/user/${params.username}/data`)
		.then(res => res.data)
		.catch(err => {
			console.error(err.message);
			throw redirect(307, '/');
		});
});
