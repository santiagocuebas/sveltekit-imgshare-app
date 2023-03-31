import { r as redirect } from './index-1dce6fb5.js';
import axios from 'axios';
import { D as DIR } from './config-b1573486.js';
import './shared-server-f2d06a89.js';

const load = async ({ locals, params }) => {
  if (locals.user.username !== params.username) {
    throw redirect(307, `/user/${locals.user.username}/upload`);
  }
  const data = await axios({
    method: "POST",
    url: `${DIR}/api/user/${locals.user.username}/upload`
  }).then((res) => res.data);
  return {
    images: data.images
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 19;
const component = async () => (await import('./_page.svelte-89018f5c.js')).default;
const file = '_app/immutable/entry/user-_username_-upload-page.svelte.5ab3f466.js';
const server_id = "src/routes/user/[username]/upload/+page.server.ts";
const imports = ["_app/immutable/entry/user-_username_-upload-page.svelte.5ab3f466.js","_app/immutable/chunks/index.4c08a5a5.js","_app/immutable/chunks/config.c392556e.js","_app/immutable/chunks/ErrorBox.c3dc3e62.js","_app/immutable/chunks/services.2280ee1d.js","_app/immutable/chunks/axios.aba6f0e0.js","_app/immutable/chunks/BoxGallery.30b4255f.js","_app/immutable/chunks/handle-image.6a2369ae.js"];
const stylesheets = ["_app/immutable/assets/_page.5ffd11ec.css","_app/immutable/assets/ErrorBox.0eba97a6.css","_app/immutable/assets/BoxGallery.5bf7bcba.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=19-fa9211d5.js.map
