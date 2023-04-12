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
const component = async () => (await import('./_page.svelte-ea78802b.js')).default;
const file = '_app/immutable/entry/search-page.svelte.2738f40b.js';
const universal_id = "src/routes/search/+page.ts";
const imports = ["_app/immutable/entry/search-page.svelte.2738f40b.js","_app/immutable/chunks/index.d4184e2c.js","_app/immutable/chunks/BoxGallery.d2547153.js","_app/immutable/chunks/Gallery.53b577ed.js","_app/immutable/chunks/NavGallery.67bf7a7c.js","_app/immutable/chunks/axios.707ed124.js","_app/immutable/chunks/config.6f2f33d8.js","_app/immutable/chunks/click-outside.61d417da.js","_app/immutable/chunks/Image.bd22f5f8.js","_app/immutable/entry/search-page.ts.f428d44a.js","_app/immutable/chunks/axios.707ed124.js","_app/immutable/chunks/config.6f2f33d8.js","_app/immutable/chunks/_page.70a9a549.js"];
const stylesheets = ["_app/immutable/assets/BoxGallery.5bf7bcba.css","_app/immutable/assets/Gallery.6f383fd4.css","_app/immutable/assets/NavGallery.ee0048fb.css","_app/immutable/assets/Image.8aa589c1.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=12-f6893a37.js.map
