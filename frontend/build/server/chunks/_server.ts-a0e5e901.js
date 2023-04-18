import { j as json } from './index-1dce6fb5.js';

const POST = ({ cookies }) => {
  cookies.delete("authenticate");
  return json({ redirect: true });
};

export { POST };
//# sourceMappingURL=_server.ts-a0e5e901.js.map
