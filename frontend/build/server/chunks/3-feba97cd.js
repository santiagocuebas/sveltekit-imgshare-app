import axios from 'axios';
import { D as DIR } from './config-b1573486.js';
import './shared-server-f2d06a89.js';

const load = async () => {
  const data = await axios.get(`${DIR}/api/gallery`).then((res) => res.data);
  return {
    images: data
  };
};

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 3;
const component = async () => (await import('./_page.svelte-ddc2cb64.js')).default;
const file = '_app/immutable/entry/_page.svelte.0b94f687.js';
const universal_id = "src/routes/+page.ts";
const imports = ["_app/immutable/entry/_page.svelte.0b94f687.js","_app/immutable/chunks/index.8bb6be9b.js","_app/immutable/chunks/NavGallery.56f1e10d.js","_app/immutable/chunks/axios.707ed124.js","_app/immutable/chunks/config.be8d1001.js","_app/immutable/chunks/click-outside.61d417da.js","_app/immutable/chunks/Gallery.2529fd7f.js","_app/immutable/chunks/BoxGallery.71982b39.js","_app/immutable/chunks/Image.79d5f736.js","_app/immutable/entry/_page.ts.beec5de2.js","_app/immutable/chunks/axios.707ed124.js","_app/immutable/chunks/config.be8d1001.js","_app/immutable/chunks/_page.43fef705.js"];
const stylesheets = ["_app/immutable/assets/NavGallery.ee0048fb.css","_app/immutable/assets/Gallery.6f383fd4.css","_app/immutable/assets/BoxGallery.5bf7bcba.css","_app/immutable/assets/Image.8aa589c1.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=3-feba97cd.js.map
