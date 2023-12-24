import type { LayoutServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: LayoutServerLoad = (async ({ cookies }) => {
	const token = cookies.get('authenticate');
  
  if (token) throw redirect(307, '/');

  return {};
});

// import { env } from '$env/dynamic/private'
// import jwt from 'jsonwebtoken';
 
// export const handle: Handle = (async ({ event, resolve }) => {
//   const token = event.cookies.get('authenticate');
//   console.log(token);
  
//   if (token) {
//     if (event.url.pathname.startsWith('/signin') ||
//       event.url.pathname.startsWith('/signup')) {
//       throw redirect(307, '/');
//     }

//     try {
//       const decoded = jwt.verify(token, env.JWT as string) as jwt.JwtPayload;
//       event.locals.user = decoded.user;
//     } catch {
//       event.cookies.delete('authenticate');
//       throw redirect(307, '/signin');
//     }
//   }

//   const response = await resolve(event);
//   return response;
// });
