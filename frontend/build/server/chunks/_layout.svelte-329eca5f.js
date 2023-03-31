import { c as create_ssr_component, e as escape, d as null_to_empty } from './index2-dd005ad7.js';
import { U as UserRole } from './enums-381f6e0f.js';
import { D as DIR } from './config-b1573486.js';
import './shared-server-f2d06a89.js';

const css = {
  code: ".foreignuser-header.svelte-1k2k6n1.svelte-1k2k6n1{display:flex;width:100%;margin-top:-20px;background-color:#5383d3}.foreignuser-head.svelte-1k2k6n1.svelte-1k2k6n1{display:grid;grid-template-columns:120px 1fr;grid-auto-rows:20px min-content;width:90%;min-width:510px;max-width:1520px;margin:auto;padding:10px 0;column-gap:10px}.foreignuser-header.svelte-1k2k6n1 img.svelte-1k2k6n1{grid-row:2 / span 1;width:120px;height:120px;border-radius:50%;box-shadow:0 0 6px 2px #555555;object-fit:cover;object-position:center}.foreignuser-options.svelte-1k2k6n1.svelte-1k2k6n1{grid-row:2 / span 1;display:flex;flex-wrap:wrap;align-self:center;align-items:center;column-gap:10px}.foreignuser-options.svelte-1k2k6n1 h1.svelte-1k2k6n1{width:100%;font-size:40px}.foreignuser-options.svelte-1k2k6n1 a.svelte-1k2k6n1,i.svelte-1k2k6n1.svelte-1k2k6n1,p.svelte-1k2k6n1.svelte-1k2k6n1{height:min-content;font-weight:700;color:#ffffff}.foreignuser-links.svelte-1k2k6n1.svelte-1k2k6n1{grid-row:3 / span 1;grid-column:1 / span 2;justify-self:center}.foreignuser-links.svelte-1k2k6n1 a.svelte-1k2k6n1{font-weight:600;color:#ffffff}.selected.svelte-1k2k6n1.svelte-1k2k6n1{border-bottom:2px solid #ffffff;font-weight:700}.user-message{display:flex;align-content:space-evenly;justify-content:center;flex-wrap:wrap;width:240px;height:240px;left:0;right:0;margin:0 auto;font-size:20px;font-weight:700}.user-column{grid-column:1 / span 6}.user-message p{height:min-content;overflow-wrap:break-word;text-align:center}.user-message a{width:max-content;height:min-content;padding:8px 16px;border:none;border-radius:6px;background-color:#5383d3;font-size:20px;font-weight:700;color:#ffffff;cursor:pointer}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let pathname;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="foreignuser-header svelte-1k2k6n1"><div class="foreignuser-head svelte-1k2k6n1"><img src="${escape(DIR, true) + "/uploads/avatars/" + escape(data.foreignUser?.avatar, true)}" alt="Avatar of the user" class="svelte-1k2k6n1">
		<div class="foreignuser-options svelte-1k2k6n1"><h1 class="svelte-1k2k6n1">${escape(data.foreignUser?.username)}</h1>
			${data.user?.username === data.foreignUser?.username ? `<i class="fa-solid fa-arrow-up-from-bracket svelte-1k2k6n1"></i>
			<a href="${"/user/" + escape(data.user?.username, true) + "/upload"}" class="svelte-1k2k6n1">UPLOAD</a>
			<p class="svelte-1k2k6n1">●</p>
			<i class="fa-solid fa-gear svelte-1k2k6n1"></i>
			<a href="${"/user/" + escape(data.user?.username, true) + "/settings"}" class="svelte-1k2k6n1">SETTINGS</a>
				${data.user?.role === UserRole.ADMIN || data.user?.role === UserRole.SUPER ? `<p class="svelte-1k2k6n1">●</p>
				<i class="fa-solid fa-user svelte-1k2k6n1"></i>
				<a href="/admin" class="svelte-1k2k6n1">ADMIN</a>` : ``}` : ``}</div>
		<div class="foreignuser-links svelte-1k2k6n1"><a class="${escape(
    null_to_empty(pathname === `/user/${data.foreignUser?.username}` ? "selected" : ""),
    true
  ) + " svelte-1k2k6n1"}" href="${"/user/" + escape(data.foreignUser?.username, true) + "/post"}">POST</a>
			<a class="${escape(null_to_empty(""), true) + " svelte-1k2k6n1"}" href="${"/user/" + escape(data.foreignUser?.username, true) + "/favorite"}">FAVORITE</a>
			<a class="${escape(null_to_empty(""), true) + " svelte-1k2k6n1"}" href="${"/user/" + escape(data.foreignUser?.username, true) + "/comment"}">COMMENT</a>
			<a class="${escape(null_to_empty(""), true) + " svelte-1k2k6n1"}" href="${"/user/" + escape(data.foreignUser?.username, true) + "/about"}">ABOUT</a></div></div></div>
${slots.default ? slots.default({}) : ``}`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-329eca5f.js.map
