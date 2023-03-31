import { c as create_ssr_component, e as escape } from './index2-dd005ad7.js';

const css = {
  code: "div.svelte-1us7pkl{display:flex;flex-wrap:wrap;justify-self:center;width:480px;height:fit-content;margin-top:70px;border-radius:16px;background-color:#ffffff;box-shadow:0 2px 10px #666666}h1.svelte-1us7pkl{width:100%;padding:20px 0;border-bottom:1px solid #bbbbbb;font-size:40px;text-align:center}",
  map: null
};
const ContainerForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  $$result.css.add(css);
  return `<div class="svelte-1us7pkl"><h1 class="svelte-1us7pkl">${escape(title)}</h1>
	${slots.default ? slots.default({}) : ``}
</div>`;
});

export { ContainerForm as C };
//# sourceMappingURL=ContainerForm-2d207669.js.map
