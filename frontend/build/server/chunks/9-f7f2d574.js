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
const component = async () => (await import('./_page.svelte-af41568d.js')).default;
const file = '_app/immutable/entry/admin-page.svelte.f181fd6f.js';
const server_id = "src/routes/admin/+page.server.ts";
const imports = ["_app/immutable/entry/admin-page.svelte.f181fd6f.js","_app/immutable/chunks/index.4c08a5a5.js","_app/immutable/chunks/axios.aba6f0e0.js","_app/immutable/chunks/config.c392556e.js","_app/immutable/chunks/Gallery.ad441785.js","_app/immutable/chunks/BoxGallery.30b4255f.js","_app/immutable/chunks/index.c08ef366.js","_app/immutable/chunks/services.2280ee1d.js","_app/immutable/chunks/enums.4774c07c.js"];
const stylesheets = ["_app/immutable/assets/_page.44364c47.css","_app/immutable/assets/Gallery.6f383fd4.css","_app/immutable/assets/BoxGallery.5bf7bcba.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=9-f7f2d574.js.map
