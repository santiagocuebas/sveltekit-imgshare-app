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
const component = async () => (await import('./_page.svelte-06daab6c.js')).default;
const file = '_app/immutable/entry/gallery-page.svelte.b0b1e5ac.js';
const universal_id = "src/routes/gallery/+page.ts";
const imports = ["_app/immutable/entry/gallery-page.svelte.b0b1e5ac.js","_app/immutable/chunks/index.d4184e2c.js","_app/immutable/chunks/NavGallery.6def2f8c.js","_app/immutable/chunks/axios.707ed124.js","_app/immutable/chunks/config.2ed4a679.js","_app/immutable/chunks/click-outside.61d417da.js","_app/immutable/chunks/Gallery.53b577ed.js","_app/immutable/chunks/BoxGallery.d2547153.js","_app/immutable/chunks/Image.dcdcd97a.js","_app/immutable/entry/gallery-page.ts.46b90452.js","_app/immutable/chunks/axios.707ed124.js","_app/immutable/chunks/config.2ed4a679.js","_app/immutable/chunks/_page.f0a934cd.js"];
const stylesheets = ["_app/immutable/assets/NavGallery.ee0048fb.css","_app/immutable/assets/Gallery.6f383fd4.css","_app/immutable/assets/BoxGallery.5bf7bcba.css","_app/immutable/assets/Image.8aa589c1.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=10-09f030d4.js.map
