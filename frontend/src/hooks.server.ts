import type { Handle } from '@sveltejs/kit';
import axios from '$lib/services/axios';

export const handle: Handle = async ({ event, resolve }) => {
	const token = event.cookies.get('authenticate');
	axios.defaults.headers.common['Cookie'] = 'authenticate=' + token;

	const response = await resolve(event);
	return response;
};
