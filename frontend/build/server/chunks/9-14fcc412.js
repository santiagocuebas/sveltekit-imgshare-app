import { r as redirect } from './index-1dce6fb5.js';
import axios from 'axios';
import { D as DIR } from './config-b1573486.js';
import './shared-server-f2d06a89.js';

const load = async ({ locals, cookies }) => {
  if (locals.user?.role !== "admin" && locals.user?.role !== "superadmin") {
    throw redirect(307, "/");
  }
  const token = cookies.get("authenticate");
  const data = await axios({
    method: "GET",
    url: `${DIR}/api/admin`,
    headers: { "Cookie": `authenticate=${token}` }
  }).then((res) => res.data);
  return {
    users: data.users
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 9;
const component = async () => (await import('./_page.svelte-7fcdb3d4.js')).default;
const file = '_app/immutable/entry/admin-page.svelte.e407bc0a.js';
const server_id = "src/routes/admin/+page.server.ts";
const imports = ["_app/immutable/entry/admin-page.svelte.e407bc0a.js","_app/immutable/chunks/index.d4184e2c.js","_app/immutable/chunks/axios.707ed124.js","_app/immutable/chunks/config.2ed4a679.js","_app/immutable/chunks/Gallery.53b577ed.js","_app/immutable/chunks/BoxGallery.d2547153.js","_app/immutable/chunks/index.c08ef366.js","_app/immutable/chunks/services.1ba75943.js","_app/immutable/chunks/enums.4774c07c.js"];
const stylesheets = ["_app/immutable/assets/_page.44364c47.css","_app/immutable/assets/Gallery.6f383fd4.css","_app/immutable/assets/BoxGallery.5bf7bcba.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=9-14fcc412.js.map
