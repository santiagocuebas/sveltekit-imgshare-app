import axios from 'axios';
import { D as DIR } from './config-b1573486.js';
import './shared-server-f2d06a89.js';

const load = async ({ url }) => {
  const searchParams = url.searchParams.get("q");
  const data = await axios.get(`${DIR}/api/search/${searchParams}`).then((res) => res.data);
  return {
    images: data.images
  };
};

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 12;
const component = async () => (await import('./_page.svelte-1f216aa1.js')).default;
const file = '_app/immutable/entry/search-page.svelte.81d8c58f.js';
const universal_id = "src/routes/search/+page.ts";
const imports = ["_app/immutable/entry/search-page.svelte.81d8c58f.js","_app/immutable/chunks/index.8bb6be9b.js","_app/immutable/chunks/BoxGallery.71982b39.js","_app/immutable/chunks/Gallery.2529fd7f.js","_app/immutable/chunks/NavGallery.bf29414e.js","_app/immutable/chunks/axios.707ed124.js","_app/immutable/chunks/config.36c6f35d.js","_app/immutable/chunks/click-outside.61d417da.js","_app/immutable/chunks/Image.ba314de0.js","_app/immutable/entry/search-page.ts.72c12854.js","_app/immutable/chunks/axios.707ed124.js","_app/immutable/chunks/config.36c6f35d.js","_app/immutable/chunks/_page.8ef3f68d.js"];
const stylesheets = ["_app/immutable/assets/BoxGallery.5bf7bcba.css","_app/immutable/assets/Gallery.6f383fd4.css","_app/immutable/assets/NavGallery.ee0048fb.css","_app/immutable/assets/Image.8aa589c1.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=12-20182a7f.js.map
