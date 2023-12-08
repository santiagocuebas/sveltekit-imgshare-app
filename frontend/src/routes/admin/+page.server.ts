import type { PageServerLoad } from './$types';
import type { IUserExtended } from '$lib/server/types';
import { redirect } from '@sveltejs/kit';
import axios from 'axios';
import { DIR } from '$lib/server/config.js';

export const load: PageServerLoad = (async ({ locals, cookies }) => {
	if (locals.user?.role !== 'admin' && locals.user?.role !== 'superadmin') {
		throw redirect(307, '/');
	}

	const token = cookies.get('authenticate');
	
	const data = await axios({
		method: 'GET',
		url: `${DIR}/api/admin`,
		headers: { 'Cookie': `authenticate=${token}` }
	}).then(res => res.data);

	return {
		users: data.users as IUserExtended[]
	};
});
