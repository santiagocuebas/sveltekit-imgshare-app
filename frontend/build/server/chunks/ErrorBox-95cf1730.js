import { c as create_ssr_component, h as add_attribute, f as each, e as escape } from './index2-dd005ad7.js';

const css$1 = {
  code: "form.svelte-1fdhk0x{display:flex;flex-wrap:wrap;width:100%;padding:20px;gap:12px}",
  map: null
};
const Form = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { action } = $$props;
  let { prefix } = $$props;
  let { change } = $$props;
  let { errors } = $$props;
  if ($$props.action === void 0 && $$bindings.action && action !== void 0)
    $$bindings.action(action);
  if ($$props.prefix === void 0 && $$bindings.prefix && prefix !== void 0)
    $$bindings.prefix(prefix);
  if ($$props.change === void 0 && $$bindings.change && change !== void 0)
    $$bindings.change(change);
  if ($$props.errors === void 0 && $$bindings.errors && errors !== void 0)
    $$bindings.errors(errors);
  $$result.css.add(css$1);
  return `<form${add_attribute("action", action, 0)} method="POST" class="svelte-1fdhk0x">${slots.default ? slots.default({}) : ``}
</form>`;
});
const css = {
  code: ".error-container.svelte-1raqzfp{display:flex;align-items:center;width:100%;height:min-content;padding:20px;border:1px solid #e6df88;outline:1px solid #e6df88;border-radius:4px;background-color:#f2f8a1;font-weight:700;color:#727010}.error-box.svelte-1raqzfp{width:100%}.error-list.svelte-1raqzfp{padding-left:20px;list-style-type:disc}.error-delete.svelte-1raqzfp{display:flex;justify-content:center;align-items:center;padding:8px;border:none;border-radius:50%;background-color:#727010;color:#f2f8a1;cursor:pointer}.error-icon.svelte-1raqzfp{width:16px;height:16px}",
  map: null
};
const ErrorBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { hide } = $$props;
  let { errors } = $$props;
  if ($$props.hide === void 0 && $$bindings.hide && hide !== void 0)
    $$bindings.hide(hide);
  if ($$props.errors === void 0 && $$bindings.errors && errors !== void 0)
    $$bindings.errors(errors);
  $$result.css.add(css);
  return `<div class="error-container svelte-1raqzfp"><div class="error-box svelte-1raqzfp"><p>The following errors have been found</p>
		<ul class="error-list svelte-1raqzfp">${each(Object.keys(errors), (value) => {
    return `<li>${escape(value)}: ${escape(errors[value])}
				</li>`;
  })}</ul></div>
	<button class="error-delete svelte-1raqzfp"><i class="error-icon fa-solid fa-xmark svelte-1raqzfp"></i></button>
</div>`;
});

export { ErrorBox as E, Form as F };
//# sourceMappingURL=ErrorBox-95cf1730.js.map
