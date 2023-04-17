import { r as redirect } from './index-1dce6fb5.js';
import axios from 'axios';
import { D as DIR } from './config-b1573486.js';
import './shared-server-f2d06a89.js';

const load = async ({ params: { image }, cookies }) => {
  const token = cookies.get("authenticate");
  const data = await axios({
    method: "GET",
    url: `${DIR}/api/gallery/${image}`,
    headers: { "Cookie": `authenticate=${token}` }
  }).then((res) => res.data);
  if (data === null)
    throw redirect(307, "/");
  return {
    image: data.image,
    comments: data.comments,
    sidebar: data.sidebarImages
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 11;
const component = async () => (await import('./_page.svelte-2e84d117.js')).default;
const file = '_app/immutable/entry/gallery-_image_-page.svelte.ff47338f.js';
const server_id = "src/routes/gallery/[image]/+page.server.ts";
const imports = ["_app/immutable/entry/gallery-_image_-page.svelte.ff47338f.js","_app/immutable/chunks/index.8bb6be9b.js","_app/immutable/chunks/index.c08ef366.js","_app/immutable/chunks/config.6d74d3ec.js","_app/immutable/chunks/enums.4774c07c.js","_app/immutable/chunks/services.bd8255ea.js","_app/immutable/chunks/axios.707ed124.js","_app/immutable/chunks/BoxGallery.71982b39.js","_app/immutable/chunks/click-outside.61d417da.js"];
const stylesheets = ["_app/immutable/assets/_page.dd760726.css","_app/immutable/assets/BoxGallery.5bf7bcba.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=11-f1d74951.js.map
