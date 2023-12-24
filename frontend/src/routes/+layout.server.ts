import type { LayoutServerLoad } from './$types';
import type { IUser } from '$lib/global';
import axios from 'axios';
import { DIR } from '$lib/config';

export const load: LayoutServerLoad = (async ({ cookies }) => {
	const token = cookies.get('authenticate');
	let data: { user: IUser | undefined } = { user: undefined };

	await axios({
		method: 'GET',
		url: `${DIR}/api/auth`,
		headers: { 'Cookie': `authenticate=${token}` }
	}).then(res => data = res.data)
		.catch(err => console.error(err.message));
	
	return { user: data.user }
});
