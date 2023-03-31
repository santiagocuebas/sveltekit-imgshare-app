import { redirect } from '@sveltejs/kit';
import axios from 'axios';
import type { PageServerLoad } from './$types';
import { DIR } from '$lib/config.js';
import type { IImage } from '$lib/global';

export const load = (async ({ locals, params }) => {
	if (locals.user.username !== params.username) {
		throw redirect(307, `/user/${locals.user.username}/upload`);
	}

	const data = await axios({
		method: 'POST',
		url: `${DIR}/api/user/${locals.user.username}/upload`
	}).then(res => res.data);

	return {
		images: data.images as IImage[]
	};
}) satisfies PageServerLoad;
