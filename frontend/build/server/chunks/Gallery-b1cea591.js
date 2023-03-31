import { c as create_ssr_component, e as escape, d as null_to_empty } from './index2-dd005ad7.js';

const css = {
  code: "div.svelte-1t5gblu{display:grid;grid-auto-rows:min-content;width:90%;min-width:510px;max-width:1510px;min-height:765px;background-color:#ffffff;box-shadow:0 2px 10px #888888}.gallery-user.svelte-1t5gblu{min-height:675px}.gallery-users.svelte-1t5gblu{width:1600px;max-width:1600px;min-height:850px;background-color:#dddddd}@media(max-width: 1600px){.gallery-users.svelte-1t5gblu{width:1200px}}@media(max-width: 1200px){.gallery-users.svelte-1t5gblu{width:800px}}",
  map: null
};
const Gallery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  $$result.css.add(css);
  return `<div class="${escape(null_to_empty(className), true) + " svelte-1t5gblu"}">${slots.default ? slots.default({}) : ``}
</div>`;
});

export { Gallery as G };
//# sourceMappingURL=Gallery-b1cea591.js.map
