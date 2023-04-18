import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST = (({ cookies }) => {
	cookies.delete('authenticate');

	return json({ redirect: true });
}) satisfies RequestHandler;
