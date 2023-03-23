import type { IComment, IImage, IUserForeign } from '$lib/global.js';
import { redirect } from '@sveltejs/kit';
import axios from 'axios';
import type { LayoutLoad } from './$types';

export const load = (async ({ params }) => {
	const data = await axios.get(`http://localhost:4200/api/user/${params.username}/data`)
		.then(res => res.data);

	if (data === null) throw redirect(307, '/');

	return {
		foreignUser: data.foreignUser as IUserForeign,
		images: data.images as IImage[],
		comments: data.comments as IComment[],
		favorites: data.favorites as IImage[]
	};
}) satisfies LayoutLoad;
