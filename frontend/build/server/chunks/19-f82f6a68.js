import { r as redirect } from './index-1dce6fb5.js';
import axios from 'axios';
import { D as DIR } from './config-b1573486.js';
import './shared-server-f2d06a89.js';

const load = async ({ locals, params }) => {
  if (!locals.user) {
    throw redirect(307, "/");
  } else if (locals.user.username !== params.username) {
    throw redirect(307, `/user/${locals.user.username}/upload`);
  }
  const data = await axios.post(`${DIR}/api/user/${locals.user.username}/upload`).then((res) => res.data);
  return {
    images: data.images
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 19;
const component = async () => (await import('./_page.svelte-c131ccfe.js')).default;
const file = '_app/immutable/entry/user-_username_-upload-page.svelte.e06d56bf.js';
const server_id = "src/routes/user/[username]/upload/+page.server.ts";
const imports = ["_app/immutable/entry/user-_username_-upload-page.svelte.e06d56bf.js","_app/immutable/chunks/index.8bb6be9b.js","_app/immutable/chunks/config.be8d1001.js","_app/immutable/chunks/ErrorBox.ad224212.js","_app/immutable/chunks/services.9cf72ddb.js","_app/immutable/chunks/axios.707ed124.js","_app/immutable/chunks/BoxGallery.71982b39.js","_app/immutable/chunks/handle-image.6a2369ae.js"];
const stylesheets = ["_app/immutable/assets/_page.2975bbdf.css","_app/immutable/assets/ErrorBox.e24fa77a.css","_app/immutable/assets/BoxGallery.5bf7bcba.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=19-f82f6a68.js.map
