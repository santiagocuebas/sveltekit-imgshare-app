import { c as create_ssr_component, v as validate_component, e as escape } from './index2-1f46a731.js';
import { D as DIR } from './config-b1573486.js';
import './shared-server-f2d06a89.js';

const css$1 = {
  code: "nav.svelte-1d0j6v1.svelte-1d0j6v1{display:flex;position:fixed;align-items:center;justify-content:space-between;min-width:510px;width:100%;height:56px;margin-top:-56px;padding:0 20px;background-color:#5383d3;box-shadow:0 0 10px #666666;gap:20px;z-index:100}.nav-logo.svelte-1d0j6v1.svelte-1d0j6v1{width:160px;min-width:160px;height:40px}.nav-tiny-logo.svelte-1d0j6v1.svelte-1d0j6v1{display:none}img.svelte-1d0j6v1.svelte-1d0j6v1{height:100%}form.svelte-1d0j6v1.svelte-1d0j6v1{display:flex;width:65%;min-width:320px;max-width:700px;height:min-content;outline:1px solid #cccccc;background-color:#cccccc;gap:1px}input.svelte-1d0j6v1.svelte-1d0j6v1{width:100%;padding:10px 16px;border:none;outline:none}.nav-button.svelte-1d0j6v1.svelte-1d0j6v1{width:64px;min-width:64px;padding:10px 0;border:none;background-color:#e8e8e8;cursor:pointer}.nav-button.svelte-1d0j6v1.svelte-1d0j6v1:hover{background-color:#d8d8d8}.nav-sign.svelte-1d0j6v1.svelte-1d0j6v1{display:flex;align-items:center;height:fit-content;gap:15px}.nav-sign.svelte-1d0j6v1 button.svelte-1d0j6v1{display:none;align-items:center;justify-content:center;width:100%;height:100%;border:none;border-radius:50%;background-color:#ffffff;color:#5383d3;cursor:pointer}.nav-sign.svelte-1d0j6v1 i.svelte-1d0j6v1{font-size:24px}.nav-signin.svelte-1d0j6v1.svelte-1d0j6v1,.nav-signup.svelte-1d0j6v1.svelte-1d0j6v1{font-size:18px;font-weight:700;color:#ffffff}.nav-signup.svelte-1d0j6v1.svelte-1d0j6v1{padding:9px 14px;background:#3cb85b}.nav-avatar.svelte-1d0j6v1.svelte-1d0j6v1{width:40px;min-width:40px;height:40px;border-radius:50%;box-shadow:0 0 5px 1px #666666;object-fit:cover;object-position:center;cursor:pointer}.nav-sign-list.svelte-1d0j6v1.svelte-1d0j6v1{position:absolute;align-self:start;top:50px;right:20px;padding:5px 0;border-radius:4px;background-color:#ffffff;box-shadow:0 0 6px #666666;z-index:100}.nav-sign-list.svelte-1d0j6v1 a.svelte-1d0j6v1{display:flex;align-items:center;padding:5px 20px;font-weight:700;gap:20px}.nav-sign-list.svelte-1d0j6v1 a.svelte-1d0j6v1:nth-child(1):hover{background-color:#5383d3;color:#ffffff}.nav-sign-list.svelte-1d0j6v1 a.svelte-1d0j6v1:nth-child(2):hover{background-color:#3cb85b;color:#ffffff}@media(max-width: 1040px){.nav-logo.svelte-1d0j6v1.svelte-1d0j6v1{width:40px;min-width:40px;height:40px}.nav-main-logo.svelte-1d0j6v1.svelte-1d0j6v1{display:none}.nav-tiny-logo.svelte-1d0j6v1.svelte-1d0j6v1{display:inline-block}.nav-sign.svelte-1d0j6v1.svelte-1d0j6v1{width:40px;min-width:40px;height:40px}.nav-signin.svelte-1d0j6v1.svelte-1d0j6v1{display:none}.nav-signup.svelte-1d0j6v1.svelte-1d0j6v1{display:none}.nav-sign.svelte-1d0j6v1 button.svelte-1d0j6v1{display:flex}}",
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { user } = $$props;
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  $$result.css.add(css$1);
  return `<nav class="svelte-1d0j6v1"><a class="nav-logo svelte-1d0j6v1" href="/"><img class="nav-tiny-logo svelte-1d0j6v1" src="/tiny-logo.png" alt="">
		<img class="nav-main-logo svelte-1d0j6v1" src="/imgshare-logo.png" alt=""></a>
	<form action="/search" class="svelte-1d0j6v1"><input type="search" name="q" placeholder="Search" class="svelte-1d0j6v1">
		<button class="nav-button svelte-1d0j6v1"><i class="fa-solid fa-magnifying-glass"></i></button></form>
	${user ? `
		<img id="nav-avatar" class="nav-avatar svelte-1d0j6v1" src="${escape(DIR, true) + "/uploads/avatars/" + escape(user?.avatar, true)}" alt="">
		${slots.default ? slots.default({}) : ``}` : `<div class="nav-sign svelte-1d0j6v1"><a class="nav-signin svelte-1d0j6v1" href="/signin">Signin</a>
			<a class="nav-signup svelte-1d0j6v1" href="/signup">Signup</a>
			<button class="svelte-1d0j6v1"><i class="fa-solid fa-caret-down svelte-1d0j6v1"></i></button></div>
		${``}`}
</nav>`;
});
const css = {
  code: "*{box-sizing:border-box;margin:0;padding:0;font-size:16px;font-family:'Quicksand', Helvetica, sans-serif}textarea{resize:none}a{background-color:transparent;color:#000;text-decoration:none}img{border-style:none;max-width:100%}button, input, optgroup, select, textarea{font-family:inherit;font-size:100%;line-height:1.15}ul{list-style-type:none}.main-container{display:grid;position:relative;justify-items:center;align-items:flex-start;grid-auto-rows:min-content;width:100%;min-width:510px;min-height:calc(100vh - 56px);margin-top:56px;padding:20px 0;background:#ecedf2;row-gap:20px}.title{display:flex;align-items:center;width:100%;padding:8px;background-color:#5383d3;font-size:32px;color:#ffffff;gap:8px}.title-icon{font-size:32px}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Nav, "Nav").$$render($$result, { user: data.user }, {}, {
      default: () => {
        return `${``}`;
      }
    })}
<div class="main-container">${slots.default ? slots.default({}) : ``}</div>
${``}`;
  } while (!$$settled);
  return $$rendered;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-907f8980.js.map
