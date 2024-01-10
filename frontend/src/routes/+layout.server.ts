import type { LayoutServerLoad } from './$types';
import axios from '$lib/services/axios';

export const load = (async () => {
	return axios({ url: '/auth' })
		.then(res => res.data)
		.catch(() => {});
}) satisfies LayoutServerLoad;
