import type { PageServerLoad } from './$types';
import type { IImage } from '$lib/server/types';
import { redirect } from '@sveltejs/kit';
import axios from 'axios';
import { DIR } from '$lib/server/config.js';

export const load = (async ({ locals, params }) => {
	if (!locals.user) {
		throw redirect(307, '/');
	} else if (locals.user.username !== params.username) {
		throw redirect(307, `/user/${locals.user.username}/upload`);
	}

	const data = await axios
		.post(`${DIR}/api/user/${locals.user.username}/upload`)
		.then(res => res.data)
		.catch(err => {
			console.error(err);
			return { images: [] };
		});

	return {
		images: data.images as IImage[]
	};
}) satisfies PageServerLoad;
