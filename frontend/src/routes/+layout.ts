import type { LayoutLoad } from './$types';
import axios from '$lib/axios';

export const load = (async () => {
	return axios({ url: '/auth' })
		.then(res => res.data)
		.catch(() => {});
}) satisfies LayoutLoad;
