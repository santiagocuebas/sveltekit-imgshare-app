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
const component = async () => (await import('./_page.svelte-5dd17dbe.js')).default;
const file = '_app/immutable/entry/_page.svelte.afc2bcfd.js';
const universal_id = "src/routes/+page.ts";
const imports = ["_app/immutable/entry/_page.svelte.afc2bcfd.js","_app/immutable/chunks/index.d4184e2c.js","_app/immutable/chunks/NavGallery.2015fbf8.js","_app/immutable/chunks/axios.707ed124.js","_app/immutable/chunks/config.d32a4ad9.js","_app/immutable/chunks/click-outside.61d417da.js","_app/immutable/chunks/Gallery.53b577ed.js","_app/immutable/chunks/BoxGallery.d2547153.js","_app/immutable/chunks/Image.70795561.js","_app/immutable/entry/_page.ts.017c8200.js","_app/immutable/chunks/axios.707ed124.js","_app/immutable/chunks/config.d32a4ad9.js","_app/immutable/chunks/_page.664e8a22.js"];
const stylesheets = ["_app/immutable/assets/NavGallery.ee0048fb.css","_app/immutable/assets/Gallery.6f383fd4.css","_app/immutable/assets/BoxGallery.5bf7bcba.css","_app/immutable/assets/Image.8aa589c1.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=3-8e6834fe.js.map
