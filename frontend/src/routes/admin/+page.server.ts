import type { PageServerLoad } from './$types';
import type { IUserExtended } from '$lib/global';
import { redirect } from '@sveltejs/kit';
import axios from 'axios';
import { DIR } from '$lib/config.js';

export const load: PageServerLoad = (async ({ cookies }) => {
	const token = cookies.get('authenticate');
	let data: { users: IUserExtended[] | null } = { users: null };
	
	await axios({
		method: 'GET',
		url: `${DIR}/api/admin`,
		headers: { 'Cookie': `authenticate=${token}` }
	}).then(res => data = res.data)
		.catch(err => console.error(err.message));

	if (!data.users) throw redirect(307, '/');

	return { users: data.users };
});
