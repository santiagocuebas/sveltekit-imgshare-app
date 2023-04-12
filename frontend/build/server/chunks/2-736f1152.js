import { r as redirect } from './index-1dce6fb5.js';
import axios from 'axios';
import { D as DIR } from './config-b1573486.js';
import './shared-server-f2d06a89.js';

const load = async ({ params }) => {
  const data = await axios.get(`${DIR}/api/user/${params.username}/data`).then((res) => res.data);
  if (data === null)
    throw redirect(307, "/");
  return {
    foreignUser: data.foreignUser,
    images: data.images,
    comments: data.comments,
    favorites: data.favorites
  };
};

var _layout_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 2;
const component = async () => (await import('./_layout.svelte-21105726.js')).default;
const file = '_app/immutable/entry/user-_username_-(public)-layout.svelte.9a2c7253.js';
const universal_id = "src/routes/user/[username]/(public)/+layout.ts";
const imports = ["_app/immutable/entry/user-_username_-(public)-layout.svelte.9a2c7253.js","_app/immutable/chunks/index.d4184e2c.js","_app/immutable/chunks/enums.4774c07c.js","_app/immutable/chunks/config.6f2f33d8.js","_app/immutable/entry/user-_username_-(public)-layout.ts.a2c19c38.js","_app/immutable/chunks/index.1de1fe79.js","_app/immutable/chunks/control.e7f5239e.js","_app/immutable/chunks/axios.707ed124.js","_app/immutable/chunks/config.6f2f33d8.js","_app/immutable/chunks/_layout.4b8b7d58.js"];
const stylesheets = ["_app/immutable/assets/_layout.5a1e8d22.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _layout_ts as universal, universal_id };
//# sourceMappingURL=2-736f1152.js.map