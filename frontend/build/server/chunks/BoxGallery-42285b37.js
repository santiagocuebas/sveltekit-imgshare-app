import { c as create_ssr_component, e as escape, f as null_to_empty } from './index2-deb300cf.js';

const css = {
  code: "div.svelte-akpdv7{display:grid;justify-content:center;width:100%;min-width:510px;height:100%;padding:10px;gap:10px}.image-cell.svelte-akpdv7{grid-template-columns:repeat(auto-fill, 240px);grid-auto-rows:240px}.image-row.svelte-akpdv7{grid-template-columns:repeat(auto-fill, 100%);grid-auto-rows:min-content}.image-sidebar.svelte-akpdv7{grid-template-columns:repeat(auto-fill, 100%);grid-auto-rows:min-content;min-width:0;padding:0;gap:0}.image-upload.svelte-akpdv7{grid-template-columns:repeat(3, 200px);grid-auto-rows:200px;align-items:center;justify-items:center;padding:0;gap:0}.image-cell-user.svelte-akpdv7{grid-template-columns:repeat(auto-fill, 400px);grid-auto-rows:200px;justify-content:flex-start;min-width:800px;padding:0;gap:0}",
  map: null
};
const BoxGallery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  $$result.css.add(css);
  return `<div class="${escape(null_to_empty(className), true) + " svelte-akpdv7"}" data-sveltekit-preload-data="off">${slots.default ? slots.default({}) : ``}
</div>`;
});

export { BoxGallery as B };
//# sourceMappingURL=BoxGallery-42285b37.js.map
