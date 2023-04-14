import { c as create_ssr_component, b as add_attribute, h as each, e as escape } from './index2-deb300cf.js';

const css$1 = {
  code: "form.svelte-1fdhk0x{display:flex;flex-wrap:wrap;width:100%;padding:20px;gap:12px}",
  map: null
};
const Form = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { action } = $$props;
  let { prefix } = $$props;
  let { show } = $$props;
  let { errors } = $$props;
  if ($$props.action === void 0 && $$bindings.action && action !== void 0)
    $$bindings.action(action);
  if ($$props.prefix === void 0 && $$bindings.prefix && prefix !== void 0)
    $$bindings.prefix(prefix);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  if ($$props.errors === void 0 && $$bindings.errors && errors !== void 0)
    $$bindings.errors(errors);
  $$result.css.add(css$1);
  return `<form${add_attribute("action", action, 0)} method="POST" class="svelte-1fdhk0x">${slots.default ? slots.default({}) : ``}
</form>`;
});
const css = {
  code: ".error-container.svelte-1rhh4qf{display:grid;grid-template-columns:1fr 32px;grid-auto-rows:min-content;align-items:center;width:100%;height:min-content;padding:20px;border:1px solid #e6df88;outline:1px solid #e6df88;border-radius:4px;background-color:#f2f8a1;font-weight:700;color:#222203}ul.svelte-1rhh4qf{padding-left:20px;list-style-type:disc}button.svelte-1rhh4qf{grid-column:2 / span 1;grid-row:1 / span 2;display:flex;justify-content:center;align-items:center;padding:8px;border:none;border-radius:50%;background-color:#222203;color:#f2f8a1;cursor:pointer}i.svelte-1rhh4qf{width:16px;height:16px}",
  map: null
};
const ErrorBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { errors } = $$props;
  if ($$props.errors === void 0 && $$bindings.errors && errors !== void 0)
    $$bindings.errors(errors);
  $$result.css.add(css);
  return `<div class="error-container svelte-1rhh4qf"><p>The following errors have been found</p>
	<ul class="svelte-1rhh4qf">${each(Object.keys(errors), (value) => {
    return `<li>${escape(value)}: ${escape(errors[value])}
			</li>`;
  })}</ul>
	<button class="svelte-1rhh4qf"><i class="fa-solid fa-xmark svelte-1rhh4qf"></i></button>
</div>`;
});

export { ErrorBox as E, Form as F };
//# sourceMappingURL=ErrorBox-246a8e59.js.map
