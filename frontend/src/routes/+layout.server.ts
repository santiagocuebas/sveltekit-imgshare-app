import type { LayoutServerLoad } from './$types';

export const config = {
	runtime: 'edge',
	regions: 'all'
};

export const load = (async ({ locals }) => {
	return {
		user: locals.user
	}
}) satisfies LayoutServerLoad;
