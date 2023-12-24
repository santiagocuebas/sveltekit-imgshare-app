import type { LayoutLoad } from './$types';
import type { ResponseForeign } from '$lib/global.js';
import { redirect } from '@sveltejs/kit';
import axios from 'axios';
import { DIR } from '$lib/config.js';

export const load = (async ({ params }) => {
	let data: ResponseForeign = {
		foreignUser: null,
		images: [],
		comments: [],
		favorites: []
	};

	await axios
		.get(`${DIR}/api/user/${params.username}/data`)
		.then(res => data = res.data)
		.catch(err => console.error(err.message));

	if (!data.foreignUser) throw redirect(307, '/');

	return {
		foreignUser: data.foreignUser,
		images: data.images,
		comments: data.comments,
		favorites: data.favorites
	};
}) satisfies LayoutLoad;
