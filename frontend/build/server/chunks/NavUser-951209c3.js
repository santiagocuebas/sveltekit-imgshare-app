import { c as create_ssr_component, e as escape } from './index2-1f46a731.js';
import './config-b1573486.js';
import { U as UserRole } from './enums-381f6e0f.js';

const css = {
  code: ".nav-user.svelte-7nx6zu.svelte-7nx6zu{display:flex;position:relative;align-items:center;width:100%;padding:5px 10px;background-color:#5383d3;font-weight:700;color:#ffffff;gap:8px}.nav-user-box.svelte-7nx6zu.svelte-7nx6zu{display:grid;grid-template-columns:1fr 15px;align-items:center;justify-content:center;width:100px;border:none;border-radius:10px;background-color:#5383d3;text-align:center;font-weight:700;color:#ffffff;cursor:pointer}.nav-user-box.svelte-7nx6zu i.svelte-7nx6zu{justify-self:start;width:min-content;height:min-content}.nav-user.svelte-7nx6zu ul.svelte-7nx6zu{position:absolute;align-self:start;width:120px;margin-top:22px;padding:3px 0;border-radius:2px;background-color:#ffffff;box-shadow:0 0 6px #666666;color:#000000;z-index:90}.nav-user.svelte-7nx6zu li.svelte-7nx6zu{padding:3px 0;text-align:center;cursor:pointer}.nav-user.svelte-7nx6zu li.svelte-7nx6zu:hover{background-color:#dddddd}.ml.svelte-7nx6zu.svelte-7nx6zu{margin-right:5px;margin-left:auto}.left.svelte-7nx6zu.svelte-7nx6zu{left:26px}.right.svelte-7nx6zu.svelte-7nx6zu{right:3px}",
  map: null
};
const NavUser = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { innerText = "PUBLIC" } = $$props;
  let { username } = $$props;
  let { role = "" } = $$props;
  let { author } = $$props;
  let { images } = $$props;
  let publicText = "PUBLIC";
  let orderText = "NEWEST";
  const selectIcon = () => {
    if (innerText === "COMMENTS")
      return "message";
    if (innerText === "ABOUT")
      return "file";
    if (innerText === "FAVORITES")
      return "star";
    return "images";
  };
  if ($$props.innerText === void 0 && $$bindings.innerText && innerText !== void 0)
    $$bindings.innerText(innerText);
  if ($$props.username === void 0 && $$bindings.username && username !== void 0)
    $$bindings.username(username);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.author === void 0 && $$bindings.author && author !== void 0)
    $$bindings.author(author);
  if ($$props.images === void 0 && $$bindings.images && images !== void 0)
    $$bindings.images(images);
  $$result.css.add(css);
  return `<div class="nav-user svelte-7nx6zu"><i class="${"fa-solid fa-" + escape(selectIcon(), true) + " svelte-7nx6zu"}"></i>
	${(username === author || role === UserRole.ADMIN || role === UserRole.SUPER) && innerText === "PUBLIC" ? `<button class="nav-user-box svelte-7nx6zu">${escape(publicText)}
		<i class="fa-solid fa-caret-down svelte-7nx6zu"></i></button>
		${``}` : `<div>${escape(innerText)}</div>`}
	${innerText === "PUBLIC" ? `<button class="nav-user-box ml svelte-7nx6zu">${escape(orderText)}
			<i class="fa-solid fa-caret-down svelte-7nx6zu"></i></button>
		${``}` : ``}
</div>`;
});

export { NavUser as N };
//# sourceMappingURL=NavUser-951209c3.js.map
