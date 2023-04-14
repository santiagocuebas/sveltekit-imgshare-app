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

const index = 10;
const component = async () => (await import('./_page.svelte-7620c10b.js')).default;
const file = '_app/immutable/entry/gallery-page.svelte.f9e377b4.js';
const universal_id = "src/routes/gallery/+page.ts";
const imports = ["_app/immutable/entry/gallery-page.svelte.f9e377b4.js","_app/immutable/chunks/index.8bb6be9b.js","_app/immutable/chunks/NavGallery.7f767228.js","_app/immutable/chunks/axios.707ed124.js","_app/immutable/chunks/config.16d700b3.js","_app/immutable/chunks/click-outside.61d417da.js","_app/immutable/chunks/Gallery.2529fd7f.js","_app/immutable/chunks/BoxGallery.71982b39.js","_app/immutable/chunks/Image.156623ef.js","_app/immutable/entry/gallery-page.ts.7adb4408.js","_app/immutable/chunks/axios.707ed124.js","_app/immutable/chunks/config.16d700b3.js","_app/immutable/chunks/_page.e5e256ff.js"];
const stylesheets = ["_app/immutable/assets/NavGallery.ee0048fb.css","_app/immutable/assets/Gallery.6f383fd4.css","_app/immutable/assets/BoxGallery.5bf7bcba.css","_app/immutable/assets/Image.8aa589c1.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=10-bb15ce73.js.map
