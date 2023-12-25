import type { LayoutServerLoad } from './$types';
import { DIR } from '$lib/config';

export const load: LayoutServerLoad = (async ({ fetch }) => {
	return fetch(`${DIR}/api/auth`, { method: 'GET' })
		.then(res => res.json())
		.catch(err => {
			console.error(err.message);
			return { user: undefined };
		});
});
