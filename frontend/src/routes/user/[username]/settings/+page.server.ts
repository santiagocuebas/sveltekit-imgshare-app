import { redirect } from '@sveltejs/kit';
import axios from 'axios';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals, params, cookies }) => {
	if (locals.user.username !== params.username) {
		throw redirect(307, `/user/${locals.user.username}/settings`);
	}

	const token = cookies.get('authenticate');
	
	const data = await axios({
		method: 'POST',
		url: `http://localhost:4200/api/user/${locals.user.username}/settings`,
		withCredentials: true,
		headers: { 'Cookie': `authenticate=${token}` }
	}).then(res => res.data);
	
	return {
		user: data.user
	};
}) satisfies PageServerLoad;
