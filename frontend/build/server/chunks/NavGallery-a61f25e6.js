import { c as create_ssr_component, e as escape } from './index2-1f46a731.js';
import './config-b1573486.js';

const css$1 = {
  code: ".gallery-logo.svelte-vmo90q{display:flex;justify-content:center;width:80%;min-width:510px;max-width:1520px;margin:0 auto}.gallery-title.svelte-vmo90q{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;font-size:56px;margin:0 auto;gap:10px}",
  map: null
};
const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="gallery-logo svelte-vmo90q"><h1 class="gallery-title svelte-vmo90q">Welcome to
		<img src="/imgshare-logo.png" alt="principal-logo"></h1>
</div>`;
});
const css = {
  code: ".gallery-header.svelte-116s25c{display:flex;position:relative;align-items:center;width:100%;height:min-content;padding:8px;background:#5383d3;font-size:20px;font-weight:700;color:#ffffff;gap:10px}.gallery-icon.svelte-116s25c{font-size:20px}.gallery-select.svelte-116s25c{display:flex;position:relative;align-items:center;justify-content:center;width:120px;margin-left:auto;border:none;background-color:#5383d3;font-size:20px;font-weight:700;color:#ffffff;cursor:pointer;gap:4px}ul.svelte-116s25c{display:grid;position:absolute;align-self:start;width:120px;right:7px;margin-top:26px;padding:3px 0;background-color:#ffffff;box-shadow:0 0 3px #666666;color:#000000;z-index:70}li.svelte-116s25c{padding:3px 0;text-align:center;cursor:pointer}li.svelte-116s25c:hover{background-color:#dddddd}",
  map: null
};
const NavGallery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { images } = $$props;
  let { visibleBox = true } = $$props;
  let selectText = "NEWEST";
  if ($$props.images === void 0 && $$bindings.images && images !== void 0)
    $$bindings.images(images);
  if ($$props.visibleBox === void 0 && $$bindings.visibleBox && visibleBox !== void 0)
    $$bindings.visibleBox(visibleBox);
  $$result.css.add(css);
  return `<div class="gallery-header svelte-116s25c"><i class="fa-solid fa-images gallery-icon svelte-116s25c"></i>
	IMAGES
	${visibleBox ? `<button class="gallery-select svelte-116s25c">${escape(selectText)}
			<i class="fa-solid fa-caret-down"></i></button>
		${``}` : ``}
</div>`;
});

export { Logo as L, NavGallery as N };
//# sourceMappingURL=NavGallery-a61f25e6.js.map
