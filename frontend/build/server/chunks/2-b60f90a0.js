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
const component = async () => (await import('./_layout.svelte-6fcbe0c2.js')).default;
const file = '_app/immutable/entry/user-_username_-(public)-layout.svelte.ccb457f4.js';
const universal_id = "src/routes/user/[username]/(public)/+layout.ts";
const imports = ["_app/immutable/entry/user-_username_-(public)-layout.svelte.ccb457f4.js","_app/immutable/chunks/index.8bb6be9b.js","_app/immutable/chunks/enums.4774c07c.js","_app/immutable/chunks/config.1262d2ec.js","_app/immutable/entry/user-_username_-(public)-layout.ts.f4e2e6c2.js","_app/immutable/chunks/index.1de1fe79.js","_app/immutable/chunks/control.e7f5239e.js","_app/immutable/chunks/axios.707ed124.js","_app/immutable/chunks/config.1262d2ec.js","_app/immutable/chunks/_layout.241e2abc.js"];
const stylesheets = ["_app/immutable/assets/_layout.5a1e8d22.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _layout_ts as universal, universal_id };
//# sourceMappingURL=2-b60f90a0.js.map
