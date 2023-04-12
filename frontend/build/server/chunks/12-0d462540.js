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
const file = '_app/immutable/entry/search-page.svelte.f47e3b03.js';
const universal_id = "src/routes/search/+page.ts";
const imports = ["_app/immutable/entry/search-page.svelte.f47e3b03.js","_app/immutable/chunks/index.d4184e2c.js","_app/immutable/chunks/BoxGallery.d2547153.js","_app/immutable/chunks/Gallery.53b577ed.js","_app/immutable/chunks/NavGallery.6def2f8c.js","_app/immutable/chunks/axios.707ed124.js","_app/immutable/chunks/config.2ed4a679.js","_app/immutable/chunks/click-outside.61d417da.js","_app/immutable/chunks/Image.dcdcd97a.js","_app/immutable/entry/search-page.ts.1a94de21.js","_app/immutable/chunks/axios.707ed124.js","_app/immutable/chunks/config.2ed4a679.js","_app/immutable/chunks/_page.2922fe57.js"];
const stylesheets = ["_app/immutable/assets/BoxGallery.5bf7bcba.css","_app/immutable/assets/Gallery.6f383fd4.css","_app/immutable/assets/NavGallery.ee0048fb.css","_app/immutable/assets/Image.8aa589c1.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=12-0d462540.js.map
