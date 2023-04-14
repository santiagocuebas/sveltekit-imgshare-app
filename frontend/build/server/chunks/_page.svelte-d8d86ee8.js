import { c as create_ssr_component, v as validate_component, h as each, e as escape, b as add_attribute } from './index2-deb300cf.js';
import { D as DIR } from './config-b1573486.js';
import { G as Gallery } from './Gallery-a6eac7b9.js';
import { B as BoxGallery } from './BoxGallery-42285b37.js';
import { format } from 'timeago.js';
import './shared-server-f2d06a89.js';

const css$2 = {
  code: ".user-cell.svelte-1viedwz.svelte-1viedwz{display:grid;position:relative;grid-template-columns:1fr 1px 1fr;align-items:center;grid-auto-rows:1fr;width:100%;height:100%;padding:5px;background-color:#dddddd;column-gap:5px}.user-cell.svelte-1viedwz span.svelte-1viedwz{grid-row:1 / span 4;width:1px;height:97%;background-color:#999999}.user-cell.svelte-1viedwz img.svelte-1viedwz{grid-row:1 / span 4;align-self:center;justify-self:center;width:180px;height:180px;border-radius:50%;box-shadow:0 0 0 2px #000000;object-fit:cover}.user-cell.svelte-1viedwz p.svelte-1viedwz{padding-left:8px;overflow:hidden;text-overflow:ellipsis}.user-white.svelte-1viedwz.svelte-1viedwz{position:absolute;width:100%;height:100%;border:3px outset #cccccc;cursor:pointer}.user-white.svelte-1viedwz.svelte-1viedwz:hover{background-color:#ffffff2f}",
  map: null
};
const UserCell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { user } = $$props;
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  $$result.css.add(css$2);
  return `<div class="user-cell svelte-1viedwz"><img src="${escape(DIR, true) + "/uploads/avatars/" + escape(user.avatar, true)}" alt="" class="svelte-1viedwz">
	<span class="svelte-1viedwz"></span>
	<div><h6>Username</h6>
		<p class="svelte-1viedwz">${escape(user.username)}</p></div>
	<div><h6>Email</h6>
		<p class="svelte-1viedwz">${escape(user.email)}</p></div>
	<div><h6>Role</h6>
		<p class="svelte-1viedwz">${escape(user.role)}</p></div>
	<div><h6>Join</h6>
		<p class="svelte-1viedwz">${escape(format(user.createdAt))}</p></div>
	<div class="user-white svelte-1viedwz"></div>
</div>`;
});
const css$1 = {
  code: "nav.svelte-1emoyzs{display:flex;justify-content:center;width:100%;min-width:800px;height:50px;border:3px outset #5383d3;background-color:#5383d3}form.svelte-1emoyzs{display:grid;grid-template-columns:50px 1fr 50px;align-items:center;justify-items:center;width:100%;max-width:800px}i.svelte-1emoyzs{font-size:20px;color:#ffffff}input.svelte-1emoyzs{width:100%;padding:8px 15px;border:none;outline:none;border-radius:15px}button.svelte-1emoyzs{width:90%;height:90%;border:none;background-color:#5383d3;cursor:pointer}",
  map: null
};
const NavAdmin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { users } = $$props;
  let searchedUser = "";
  if ($$props.users === void 0 && $$bindings.users && users !== void 0)
    $$bindings.users(users);
  $$result.css.add(css$1);
  return `<nav class="svelte-1emoyzs"><form action="${escape(DIR, true) + "/api/admin/" + escape(searchedUser, true)}" method="GET" class="svelte-1emoyzs"><i class="fa-solid fa-user svelte-1emoyzs"></i>
		<input type="text" name="username" placeholder="Search User" class="svelte-1emoyzs"${add_attribute("value", searchedUser, 0)}>
		<button class="svelte-1emoyzs"><i class="fa-solid fa-magnifying-glass svelte-1emoyzs"></i></button></form>
</nav>`;
});
const css = {
  code: ".user-box.svelte-ll97zt.svelte-ll97zt{display:grid;position:relative;grid-template-columns:1fr 1px 1fr 1px 1fr;grid-auto-rows:min-content;justify-self:center;width:800px;padding:10px;border:3px solid #999999;background-color:#ffffff;gap:10px}.user-box-line.svelte-ll97zt.svelte-ll97zt{align-self:center;width:1px;height:100%;background-color:#999999}.close-user.svelte-ll97zt.svelte-ll97zt{display:none;position:absolute;align-items:center;justify-content:center;top:20px;right:20px;width:40px;height:40px;border:none;box-shadow:0 0 5px 1px #000000;border-radius:50%;background-color:#df403b;color:#ffffff;cursor:pointer}.close-user.svelte-ll97zt i.svelte-ll97zt{font-size:20px}.user-box:hover > .close-user{display:flex}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${``}

${``}

${``}

${validate_component(Gallery, "Gallery").$$render($$result, { className: "gallery-users" }, {}, {
      default: () => {
        return `${validate_component(NavAdmin, "NavAdmin").$$render(
          $$result,
          { users: data.users },
          {
            users: ($$value) => {
              data.users = $$value;
              $$settled = false;
            }
          },
          {}
        )}
	${validate_component(BoxGallery, "BoxGallery").$$render($$result, { className: "image-cell-user" }, {}, {
          default: () => {
            return `${each(data.users, (user) => {
              return `${validate_component(UserCell, "UserCell").$$render($$result, { user }, {}, {})}`;
            })}`;
          }
        })}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-d8d86ee8.js.map
