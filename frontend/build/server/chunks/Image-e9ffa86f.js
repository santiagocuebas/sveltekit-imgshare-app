import { c as create_ssr_component, e as escape, h as add_attribute } from './index2-dd005ad7.js';
import { D as DIR } from './config-b1573486.js';

const css = {
  code: "a.svelte-1t0kvsa{display:flex;position:relative;box-shadow:0 0 1px 2px #888888}img.svelte-1t0kvsa{width:100%;height:100%;object-fit:contain}div.svelte-1t0kvsa{display:flex;position:absolute;justify-content:space-between;flex-wrap:wrap;align-self:flex-end;width:100%;height:min-content;padding:10px;background-color:#dddddd;gap:10px}h2.svelte-1t0kvsa{width:100%;overflow:hidden;text-overflow:ellipsis;font-size:20px}",
  map: null
};
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { image } = $$props;
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  $$result.css.add(css);
  return `<a href="${"/gallery/" + escape(image.id, true)}"${add_attribute("title", image.title, 0)} class="svelte-1t0kvsa"><img src="${escape(DIR, true) + "/uploads/" + escape(image.filename, true)}"${add_attribute("alt", image.title, 0)} loading="lazy" class="svelte-1t0kvsa">
  <div class="svelte-1t0kvsa"><h2 class="svelte-1t0kvsa">${escape(image.title)}</h2>
    <p><i class="fa-solid fa-message"></i>
      ${escape(image.totalComments)}</p>
    <p><i class="fa-solid fa-thumbs-up"></i>
      ${escape(image.like.length)}</p>
    <p><i class="fa-solid fa-thumbs-down"></i>
      ${escape(image.dislike.length)}</p>
    <p><i class="fa-solid fa-eye"></i>
      ${escape(image.views)}</p></div>
</a>`;
});

export { Image as I };
//# sourceMappingURL=Image-e9ffa86f.js.map
