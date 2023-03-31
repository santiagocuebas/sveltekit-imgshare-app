import { r as redirect } from './index-1dce6fb5.js';
import axios from 'axios';
import { D as DIR } from './config-b1573486.js';
import './shared-server-f2d06a89.js';

const load = async ({ locals, params, cookies }) => {
  if (locals.user.username !== params.username) {
    throw redirect(307, `/user/${locals.user.username}/settings`);
  }
  const token = cookies.get("authenticate");
  const data = await axios({
    method: "POST",
    url: `${DIR}/api/user/${locals.user.username}/settings`,
    withCredentials: true,
    headers: { "Cookie": `authenticate=${token}` }
  }).then((res) => res.data);
  return {
    user: data.user
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 18;
const component = async () => (await import('./_page.svelte-a5bd9e8d.js')).default;
const file = '_app/immutable/entry/user-_username_-settings-page.svelte.2fda2b3d.js';
const server_id = "src/routes/user/[username]/settings/+page.server.ts";
const imports = ["_app/immutable/entry/user-_username_-settings-page.svelte.2fda2b3d.js","_app/immutable/chunks/index.4c08a5a5.js","_app/immutable/chunks/config.c392556e.js","_app/immutable/chunks/axios.aba6f0e0.js","_app/immutable/chunks/handle-image.6a2369ae.js","_app/immutable/chunks/services.2280ee1d.js"];
const stylesheets = ["_app/immutable/assets/_page.8f15beb7.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=18-e957c709.js.map
