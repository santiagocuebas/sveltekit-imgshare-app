import { redirect } from '@sveltejs/kit';
import axios from 'axios';
import type { PageServerLoad } from './$types';
import { DIR } from '$lib/config.js';
import type { IUserExtended } from '$lib/global';

export const load = (async ({ locals, params, cookies }) => {
	if (!locals.user) {
		throw redirect(307, '/');
	} else if (locals.user.username !== params.username) {
		throw redirect(307, `/user/${locals.user.username}/settings`);
	}

	const token = cookies.get('authenticate');
	
	const data = await axios({
		method: 'POST',
		url: `${DIR}/api/user/${locals.user.username}/settings`,
		withCredentials: true,
		headers: { 'Cookie': `authenticate=${token}` }
	}).then(res => res.data);
	
	return {
		user: data.user as IUserExtended
	};
}) satisfies PageServerLoad;
