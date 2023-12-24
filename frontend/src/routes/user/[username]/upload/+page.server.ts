import type { PageServerLoad } from './$types';
import type { IImage } from '$lib/global';
import { redirect } from '@sveltejs/kit';
import axios from 'axios';
import { DIR } from '$lib/config.js';

export const load = (async ({ params }) => {
	let data: { images: IImage[] | null } = { images: null };

	await axios
		.post(`${DIR}/api/user/${params.username}/upload`)
		.then(res => data = res.data)
		.catch(err => console.error(err.message));

	if (!data.images) throw redirect(307, '/');

	return { images: data.images };
}) satisfies PageServerLoad;
