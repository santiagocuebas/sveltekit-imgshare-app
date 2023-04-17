import { r as redirect } from './index-1dce6fb5.js';
import { b as private_env } from './shared-server-f2d06a89.js';
import jwt from 'jsonwebtoken';

const handle = async ({ event, resolve }) => {
  const token = event.cookies.get("authenticate");
  if (token) {
    if (event.url.pathname.includes("/signin") || event.url.pathname.includes("/signup"))
      throw redirect(307, "/");
    try {
      const decoded = jwt.verify(token, private_env.JWT);
      event.locals.user = decoded.user;
    } catch {
      event.cookies.delete("authenticate");
      throw redirect(307, "/signin");
    }
  }
  const response = await resolve(event);
  return response;
};

export { handle };
//# sourceMappingURL=hooks.server-d4e06d95.js.map
