import { c as create_ssr_component, v as validate_component, e as escape, h as add_attribute, f as each } from './index2-dd005ad7.js';
import { D as DIR } from './config-b1573486.js';
import './shared-server-f2d06a89.js';

const css$2 = {
  code: "div.svelte-19r5mz2{display:flex;flex-wrap:wrap;padding:20px;gap:10px}h2.svelte-19r5mz2{display:flex;align-items:center;width:100%;font-size:32px;font-weight:400}button.svelte-19r5mz2{display:flex;align-items:center;justify-content:center;width:48px;height:48px;margin-left:auto;border:none;border-radius:50%;background-color:#ffffff;cursor:pointer}button.svelte-19r5mz2:hover{background-color:#dddddd}i.svelte-19r5mz2{width:26px;font-size:32px;font-weight:300}",
  map: null
};
const OptionSettings = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  $$result.css.add(css$2);
  return `<div class="svelte-19r5mz2"><h2 class="svelte-19r5mz2">${escape(title)}
    <button class="svelte-19r5mz2"><i class="fa-solid fa-plus svelte-19r5mz2"></i></button></h2>
  ${``}
</div>`;
});
const css$1 = {
  code: "div.svelte-114iok{display:flex;align-items:center;width:100%;padding:10px;outline:1px solid #bbbbbb;border-radius:4px;font-weight:700}button.svelte-114iok{display:flex;align-items:center;justify-content:center;width:28px;height:28px;margin-left:auto;border:none;border-radius:50%;background-color:#d62525;color:#ffffff;cursor:pointer}i.svelte-114iok{font-size:20px}",
  map: null
};
const Link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { url } = $$props;
  let { links } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.links === void 0 && $$bindings.links && links !== void 0)
    $$bindings.links(links);
  $$result.css.add(css$1);
  return `<div${add_attribute("title", url, 0)} class="svelte-114iok">${escape(title)}
  <button class="svelte-114iok"><i class="fa-solid fa-xmark svelte-114iok"></i></button>
</div>`;
});
const css = {
  code: '.settings-container.svelte-3w2akr{width:600px;height:min-content;border-radius:16px;background-color:#ffffff;box-shadow:0 2px 10px #666666}h1.svelte-3w2akr{padding:20px;border-bottom:2px solid #333333;font-size:40px;font-weight:500}.settings-options.svelte-3w2akr{width:100%;display:grid;grid-auto-columns:100%;grid-auto-rows:min-content}span.svelte-3w2akr{width:100%;height:1px;background-color:#666666}form.svelte-3w2akr{display:grid;width:100%;row-gap:7px}textarea.svelte-3w2akr{padding:10px;border:none;border-radius:6px;outline:1px solid #bbbbbb}input.svelte-3w2akr{padding:10px;border:none;outline:1px solid #bbbbbb;border-radius:6px}input[type="file"].svelte-3w2akr{display:none}.settings-avatar.svelte-3w2akr{justify-self:center;width:300px;height:300px;outline:1px solid #bbbbbb;border-radius:50%;background-position:center;background-repeat:no-repeat;background-size:cover;cursor:pointer}button.svelte-3w2akr{justify-self:end;width:min-content;padding:8px 24px;border:none;outline:none;border-radius:8px;background-color:#129e35;font-size:20px;font-weight:700;color:#ffffff;cursor:pointer}button.svelte-3w2akr:hover{background-color:#028e25}.settings-delete-links.svelte-3w2akr{display:flex;flex-wrap:wrap;width:100%;padding:6px;gap:7px}.delete-user.svelte-3w2akr{justify-self:center;width:fit-content;margin:5px 0;padding:12px 24px;background-color:#c91a1a}.delete-user.svelte-3w2akr:hover{background-color:#b90a0a}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let links = JSON.parse(data.user.links);
  let title;
  let url;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${``}
${``}
<div class="settings-container svelte-3w2akr"><h1 class="svelte-3w2akr">Settings
	</h1>
	<div class="settings-options svelte-3w2akr">${validate_component(OptionSettings, "Option").$$render($$result, { title: "Set Avatar" }, {}, {
      default: () => {
        return `<form id="avatar" action="${escape(DIR, true) + "/api/settings/avatar"}" method="POST" class="svelte-3w2akr"><div>Change the avatar:</div>
				<label class="settings-avatar svelte-3w2akr" style="${"background-image: url(" + escape(DIR, true) + "/uploads/avatars/" + escape(data.user.avatar, true) + ");"}"><input type="file" name="image" class="svelte-3w2akr"></label>
				<button class="svelte-3w2akr">Send</button></form>`;
      }
    })}
		<span class="svelte-3w2akr"></span>
		${validate_component(OptionSettings, "Option").$$render($$result, { title: "Set Description" }, {}, {
      default: () => {
        return `<form id="description" action="${escape(DIR, true) + "/api/settings/description"}" method="POST" class="svelte-3w2akr"><label for="description">Change the description:</label>
				<textarea id="description" name="description" rows="5" spellcheck="false" autocomplete="off" maxlength="4200" required class="svelte-3w2akr">${data.user.description || ""}</textarea>
				<button class="svelte-3w2akr">Accept</button></form>`;
      }
    })}
		<span class="svelte-3w2akr"></span>
		${validate_component(OptionSettings, "Option").$$render($$result, { title: "Change Password" }, {}, {
      default: () => {
        return `<form id="password" action="${escape(DIR, true) + "/api/settings/password"}" method="POST" class="svelte-3w2akr"><label for="actPassword">Enter the actual password:</label>
				<input type="password" name="actPassword" placeholder="Actual Password" minlength="8" maxlength="40" required class="svelte-3w2akr">
				<label for="newPassword">Enter the new password:</label>
				<input type="password" name="password" placeholder="New Password" minlength="8" maxlength="40" required class="svelte-3w2akr">
				<label for="confirmPassword">Confirm the new password:</label>
				<input type="password" name="confirmPassword" placeholder="Confirm Password" minlength="8" maxlength="40" required class="svelte-3w2akr">
				<button class="svelte-3w2akr">Send</button></form>`;
      }
    })}
		<span class="svelte-3w2akr"></span>
		${validate_component(OptionSettings, "Option").$$render($$result, { title: "Register Link" }, {}, {
      default: () => {
        return `<form id="link" action="${escape(DIR, true) + "/api/settings/link"}" method="POST" class="svelte-3w2akr"><label for="title">Enter the title:</label>
				<input type="text" name="title" placeholder="Title" maxlength="20" required class="svelte-3w2akr"${add_attribute("value", title, 0)}>
				<label for="url">Enter the URL:</label>
				<input type="url" name="url" placeholder="URL" maxlength="4000" required class="svelte-3w2akr"${add_attribute("value", url, 0)}>
				<button class="svelte-3w2akr">Send</button></form>
			${links.length > 0 ? `<div class="settings-delete-links svelte-3w2akr">${each(links, (link) => {
          return `${validate_component(Link, "Link").$$render(
            $$result,
            { title: link.title, url: link.url, links },
            {
              links: ($$value) => {
                links = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        })}</div>` : ``}`;
      }
    })}
		<span class="svelte-3w2akr"></span>
		${validate_component(OptionSettings, "Option").$$render($$result, { title: "Delete User" }, {}, {
      default: () => {
        return `<form id="deleteuser" action="${escape(DIR, true) + "/api/settings/deleteuser"}" method="DELETE" class="svelte-3w2akr"><button class="delete-user svelte-3w2akr">Delete User
				</button></form>`;
      }
    })}</div>
</div>`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-a5bd9e8d.js.map
