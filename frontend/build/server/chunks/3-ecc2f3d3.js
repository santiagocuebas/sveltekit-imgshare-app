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
const component = async () => (await import('./_page.svelte-86f19e6e.js')).default;
const file = '_app/immutable/entry/_page.svelte.8b53d303.js';
const universal_id = "src/routes/+page.ts";
const imports = ["_app/immutable/entry/_page.svelte.8b53d303.js","_app/immutable/chunks/index.4c08a5a5.js","_app/immutable/chunks/NavGallery.4d65f6a9.js","_app/immutable/chunks/axios.aba6f0e0.js","_app/immutable/chunks/config.c392556e.js","_app/immutable/chunks/click-outside.61d417da.js","_app/immutable/chunks/Gallery.ad441785.js","_app/immutable/chunks/BoxGallery.30b4255f.js","_app/immutable/chunks/Image.7d543070.js","_app/immutable/entry/_page.ts.f7f5cceb.js","_app/immutable/chunks/axios.aba6f0e0.js","_app/immutable/chunks/config.c392556e.js","_app/immutable/chunks/_page.9e72d4cb.js"];
const stylesheets = ["_app/immutable/assets/NavGallery.ee0048fb.css","_app/immutable/assets/Gallery.6f383fd4.css","_app/immutable/assets/BoxGallery.5bf7bcba.css","_app/immutable/assets/Image.051f6a6e.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=3-ecc2f3d3.js.map
