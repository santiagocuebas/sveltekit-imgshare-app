import type { PageServerLoad } from './$types';
import type { IUserExtended } from '$lib/global';
import { redirect } from '@sveltejs/kit';
import axios from 'axios';
import { DIR } from '$lib/config.js';

export const load: PageServerLoad = (async ({ params, cookies }) => {
	const token = cookies.get('authenticate');
	let data: { extendedUser: IUserExtended | null } = { extendedUser: null };
	
	await axios({
		method: 'POST',
		url: `${DIR}/api/user/${params.username}/settings`,
		headers: { 'Cookie': `authenticate=${token}` }
	}).then(res => data = res.data)
		.catch(err => console.error(err.message));

	if (!data.extendedUser) throw redirect(307, '/');
	
	return { user: data.extendedUser };
});
