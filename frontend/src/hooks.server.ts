import { redirect, type Handle } from '@sveltejs/kit';
import { env } from '$env/dynamic/private'
import jwt from 'jsonwebtoken';
 
export const handle = (async ({ event, resolve }) => {
  const token = event.cookies.get('authenticate');
  
  if (token) {
    if (
      event.url.pathname.includes('/signin') ||
      event.url.pathname.includes('/signup')
    ) throw redirect(307, '/');

    try {
      const decoded = jwt.verify(token, env.JWT as string) as jwt.JwtPayload;
      event.locals.user = decoded.user;
    } catch {
      event.cookies.delete('authenticate');
      throw redirect(307, '/signin');
    }
  }

  const response = await resolve(event);
  return response;
}) satisfies Handle;
