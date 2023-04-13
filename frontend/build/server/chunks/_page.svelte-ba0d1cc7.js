import { c as create_ssr_component, v as validate_component, h as each, e as escape, d as add_attribute, f as null_to_empty } from './index2-1f46a731.js';
import axios from 'axios';
import { D as DIR } from './config-b1573486.js';
import { G as Gallery } from './Gallery-3a979db5.js';
import { B as BoxGallery } from './BoxGallery-660dcb88.js';
import { format } from 'timeago.js';
import { U as UserRole } from './enums-381f6e0f.js';
import './shared-server-f2d06a89.js';

const css$7 = {
  code: ".user-cell.svelte-1viedwz.svelte-1viedwz{display:grid;position:relative;grid-template-columns:1fr 1px 1fr;align-items:center;grid-auto-rows:1fr;width:100%;height:100%;padding:5px;background-color:#dddddd;column-gap:5px}.user-cell.svelte-1viedwz span.svelte-1viedwz{grid-row:1 / span 4;width:1px;height:97%;background-color:#999999}.user-cell.svelte-1viedwz img.svelte-1viedwz{grid-row:1 / span 4;align-self:center;justify-self:center;width:180px;height:180px;border-radius:50%;box-shadow:0 0 0 2px #000000;object-fit:cover}.user-cell.svelte-1viedwz p.svelte-1viedwz{padding-left:8px;overflow:hidden;text-overflow:ellipsis}.user-white.svelte-1viedwz.svelte-1viedwz{position:absolute;width:100%;height:100%;border:3px outset #cccccc;cursor:pointer}.user-white.svelte-1viedwz.svelte-1viedwz:hover{background-color:#ffffff2f}",
  map: null
};
const UserCell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { user } = $$props;
  let { selectUser } = $$props;
  let { links } = $$props;
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  if ($$props.selectUser === void 0 && $$bindings.selectUser && selectUser !== void 0)
    $$bindings.selectUser(selectUser);
  if ($$props.links === void 0 && $$bindings.links && links !== void 0)
    $$bindings.links(links);
  $$result.css.add(css$7);
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
const css$6 = {
  code: ".user-box-data.svelte-mcq0rv.svelte-mcq0rv{display:grid;align-content:space-between}.user-box-data.svelte-mcq0rv img.svelte-mcq0rv{justify-self:center;width:240px;height:240px;border-radius:50%;box-shadow:0 0 1px 1px #666666;object-fit:cover}.user-box-data.svelte-mcq0rv p.svelte-mcq0rv{padding-left:8px;overflow-wrap:anywhere}.user-box-data.svelte-mcq0rv i.svelte-mcq0rv{color:#1a5ef0}.user-box-data.svelte-mcq0rv i.svelte-mcq0rv:hover{color:#be1af0}",
  map: null
};
const UserData = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { username } = $$props;
  let { email } = $$props;
  let { avatar } = $$props;
  let { role } = $$props;
  let { createdAt } = $$props;
  if ($$props.username === void 0 && $$bindings.username && username !== void 0)
    $$bindings.username(username);
  if ($$props.email === void 0 && $$bindings.email && email !== void 0)
    $$bindings.email(email);
  if ($$props.avatar === void 0 && $$bindings.avatar && avatar !== void 0)
    $$bindings.avatar(avatar);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.createdAt === void 0 && $$bindings.createdAt && createdAt !== void 0)
    $$bindings.createdAt(createdAt);
  $$result.css.add(css$6);
  return `<div class="user-box-data svelte-mcq0rv"><img src="${escape(DIR, true) + "/uploads/avatars/" + escape(avatar, true)}" alt="" class="svelte-mcq0rv">
	<div><h6>Username:
			<a href="${"/user/" + escape(username, true)}" target="_blank" rel="noreferrer"><i class="fa-solid fa-share svelte-mcq0rv"></i></a></h6>
		<p class="svelte-mcq0rv">${escape(username)}</p></div>
	<div><h6>Email:</h6>
		<p class="svelte-mcq0rv">${escape(email)}</p></div>
	<div><h6>Role:</h6>
		<p class="svelte-mcq0rv">${escape(role)}</p></div>
	<div><h6>Join:</h6>
		<p class="svelte-mcq0rv">${escape(format(createdAt))}</p></div>
</div>`;
});
const css$5 = {
  code: ".user-box-option.svelte-10axiao.svelte-10axiao{display:grid;row-gap:5px}.user-box-description.svelte-10axiao.svelte-10axiao,.user-box-links.svelte-10axiao.svelte-10axiao{height:200px;padding:10px;box-shadow:0 0 0 1px #bbbbbb;overflow-y:auto;overflow-x:hidden;overflow-wrap:break-word;scrollbar-width:thin;scrollbar-color:#5383d3 #ffffff;overscroll-behavior:contain}.user-box-description.svelte-10axiao.svelte-10axiao{cursor:pointer}.user-box-option.svelte-10axiao form.svelte-10axiao{display:flex;justify-content:flex-end;flex-wrap:wrap;row-gap:6px;column-gap:5px}.user-box-option.svelte-10axiao textarea.svelte-10axiao{width:100%;border:none;outline:none}.user-box-option.svelte-10axiao button.svelte-10axiao{width:70px;padding:5px 0;border:none;background-color:#db1818;font-weight:700;color:#ffffff;cursor:pointer}.user-box-option.svelte-10axiao .blue.svelte-10axiao{background-color:#4464f3}.user-box-links.svelte-10axiao.svelte-10axiao{display:flex;align-content:start;flex-wrap:wrap;gap:7px}.user-box-links.svelte-10axiao p.svelte-10axiao{display:flex;align-items:center;width:100%;padding:5px;border-radius:6px;box-shadow:0 0 0 1px #bbbbbb}.user-box-links.svelte-10axiao i.svelte-10axiao{display:flex;align-items:center;justify-content:center;width:16px;height:16px;margin-left:auto;padding:2px;border-radius:50%;background-color:#df403b;font-size:12px;color:#ffffff;cursor:pointer}",
  map: null
};
const UserOption = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { username } = $$props;
  let { description } = $$props;
  let { links } = $$props;
  let { showBox } = $$props;
  if ($$props.username === void 0 && $$bindings.username && username !== void 0)
    $$bindings.username(username);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.links === void 0 && $$bindings.links && links !== void 0)
    $$bindings.links(links);
  if ($$props.showBox === void 0 && $$bindings.showBox && showBox !== void 0)
    $$bindings.showBox(showBox);
  $$result.css.add(css$5);
  return `<div class="user-box-option svelte-10axiao"><div class="user-box-option svelte-10axiao"><h6>Description:</h6>
      <form action="${escape(DIR, true) + "/api/admin/" + escape(username, true) + "/description"}" method="POST" class="svelte-10axiao"><textarea class="user-box-description svelte-10axiao" name="description" spellcheck="false" autocomplete="off" maxlength="4200">${description || ""}</textarea>
        ${``}</form></div>
  <div class="user-box-option svelte-10axiao"><h6>Links:</h6>
    <div class="user-box-links svelte-10axiao">${each(links, (link) => {
    return `<p${add_attribute("title", link.url, 0)} class="svelte-10axiao">${escape(link.title)}
          <i${add_attribute("id", link.title, 0)} class="fa-solid fa-xmark svelte-10axiao" title="${"delete-link-" + escape(link.title, true)}"></i>
        </p>`;
  })}</div></div>
</div>`;
});
const css$4 = {
  code: ".user-box-change.svelte-1tedfbp.svelte-1tedfbp{display:grid;grid-auto-rows:1fr;align-items:center}.user-box-change.svelte-1tedfbp div.svelte-1tedfbp{display:flex;flex-wrap:wrap;gap:6px}.user-box-change.svelte-1tedfbp h6.svelte-1tedfbp{width:100%}.user-box-change.svelte-1tedfbp select.svelte-1tedfbp{margin:auto;padding:5px 25px;border:none;background-color:#ffffff;box-shadow:0 0 0 2px #999999;text-align:center;font-weight:700;cursor:pointer}.user-box-change.svelte-1tedfbp option.svelte-1tedfbp:hover{background-color:#000000;color:#ffffff;cursor:pointer}.user-box-change.svelte-1tedfbp button.svelte-1tedfbp{margin:auto;padding:8px 24px;border:none;border-radius:8px;background-color:#df403b;box-shadow:2px 2px 5px #666666;font-size:20px;font-weight:700;color:#ffffff;cursor:pointer}.user-box-change.svelte-1tedfbp button.svelte-1tedfbp:hover{background-color:#ef504b}",
  map: null
};
const UserChange = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { username } = $$props;
  let { role } = $$props;
  let { myRole } = $$props;
  let { alert } = $$props;
  let { showBox } = $$props;
  if ($$props.username === void 0 && $$bindings.username && username !== void 0)
    $$bindings.username(username);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.myRole === void 0 && $$bindings.myRole && myRole !== void 0)
    $$bindings.myRole(myRole);
  if ($$props.alert === void 0 && $$bindings.alert && alert !== void 0)
    $$bindings.alert(alert);
  if ($$props.showBox === void 0 && $$bindings.showBox && showBox !== void 0)
    $$bindings.showBox(showBox);
  $$result.css.add(css$4);
  return `<div class="user-box-change svelte-1tedfbp"><div class="svelte-1tedfbp"><h6 class="svelte-1tedfbp">Change role:</h6>
    <select name="role" id="role" class="svelte-1tedfbp"><option value="editor" ${role === UserRole.EDITOR ? "selected" : ""} ${role === UserRole.ADMIN && myRole !== UserRole.SUPER ? "disabled" : ""} class="svelte-1tedfbp">EDITOR
			</option><option value="mod" ${role === UserRole.MOD ? "selected" : ""} ${role === UserRole.ADMIN && myRole !== UserRole.SUPER ? "disabled" : ""} class="svelte-1tedfbp">MOD
			</option><option value="admin" ${role === UserRole.ADMIN ? "selected" : ""} ${myRole !== UserRole.SUPER ? "disabled" : ""} class="svelte-1tedfbp">ADMIN
			</option></select></div>
  <div class="svelte-1tedfbp"><h6 class="svelte-1tedfbp">Delete user:</h6>
    <button class="svelte-1tedfbp">Delete</button></div>
</div>`;
});
const css$3 = {
  code: "nav.svelte-1emoyzs{display:flex;justify-content:center;width:100%;min-width:800px;height:50px;border:3px outset #5383d3;background-color:#5383d3}form.svelte-1emoyzs{display:grid;grid-template-columns:50px 1fr 50px;align-items:center;justify-items:center;width:100%;max-width:800px}i.svelte-1emoyzs{font-size:20px;color:#ffffff}input.svelte-1emoyzs{width:100%;padding:8px 15px;border:none;outline:none;border-radius:15px}button.svelte-1emoyzs{width:90%;height:90%;border:none;background-color:#5383d3;cursor:pointer}",
  map: null
};
const NavAdmin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { users } = $$props;
  let searchedUser = "";
  if ($$props.users === void 0 && $$bindings.users && users !== void 0)
    $$bindings.users(users);
  $$result.css.add(css$3);
  return `<nav class="svelte-1emoyzs"><form action="${escape(DIR, true) + "/api/admin/" + escape(searchedUser, true)}" method="GET" class="svelte-1emoyzs"><i class="fa-solid fa-user svelte-1emoyzs"></i>
		<input type="text" name="username" placeholder="Search User" class="svelte-1emoyzs"${add_attribute("value", searchedUser, 0)}>
		<button class="svelte-1emoyzs"><i class="fa-solid fa-magnifying-glass svelte-1emoyzs"></i></button></form>
</nav>`;
});
const css$2 = {
  code: ".alert-container.svelte-1gy0q54.svelte-1gy0q54{display:grid;position:fixed;justify-content:center;width:100vw;height:100vh;top:0;background-color:#000000aa;z-index:1000}.alert-container.svelte-1gy0q54 div.svelte-1gy0q54{display:flex;flex-wrap:wrap;justify-content:space-evenly;width:min-content;height:min-content;margin-top:120px;padding:20px 50px;background-color:#ffffff;row-gap:10px}.alert-container.svelte-1gy0q54 p.svelte-1gy0q54{width:max-content;text-align:center;font-weight:500}.alert-container.svelte-1gy0q54 button.svelte-1gy0q54{width:100px;padding:8px 0;border:none;border-radius:12px;background-color:#c23838;box-shadow:0 0 0 1px #666666;font-weight:500;color:#ffffff;cursor:pointer}.alert-container.svelte-1gy0q54 .blue.svelte-1gy0q54{background-color:#384dc2}",
  map: null
};
const AlertUser = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { deleteUser } = $$props;
  if ($$props.deleteUser === void 0 && $$bindings.deleteUser && deleteUser !== void 0)
    $$bindings.deleteUser(deleteUser);
  $$result.css.add(css$2);
  return `<div class="alert-container svelte-1gy0q54"><div class="svelte-1gy0q54"><p class="svelte-1gy0q54">Are you sure want delete this user?</p>
    <button class="svelte-1gy0q54">Cancel
    </button>
    <button class="blue svelte-1gy0q54">Accept
    </button></div>
</div>`;
});
const css$1 = {
  code: "div.svelte-p2ilaf{display:flex;position:fixed;justify-content:space-around;align-items:center;width:400px;height:200px;left:auto;right:auto;bottom:80px;box-shadow:0 0 5px 3px #444444;background-color:#ffffff;z-index:500}i.svelte-p2ilaf{display:flex;align-items:center;justify-content:center;width:180px;height:180px;outline:2px solid #000000;border-radius:50%;font-size:160px}.fa-check.svelte-p2ilaf{background-color:#97f09e;color:#0b7c14}.fa-xmark.svelte-p2ilaf{background-color:#f09797;color:#7c0b0b}p.svelte-p2ilaf{width:180px;text-align:center;font-weight:700}",
  map: null
};
const UserMessage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className } = $$props;
  let { text } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  $$result.css.add(css$1);
  return `<div class="svelte-p2ilaf"><i class="${escape(null_to_empty(className), true) + " svelte-p2ilaf"}"></i>
  <p class="svelte-p2ilaf">${escape(text)}</p>
</div>`;
});
const css = {
  code: ".user-box.svelte-ll97zt.svelte-ll97zt{display:grid;position:relative;grid-template-columns:1fr 1px 1fr 1px 1fr;grid-auto-rows:min-content;justify-self:center;width:800px;padding:10px;border:3px solid #999999;background-color:#ffffff;gap:10px}.user-box-line.svelte-ll97zt.svelte-ll97zt{align-self:center;width:1px;height:100%;background-color:#999999}.close-user.svelte-ll97zt.svelte-ll97zt{display:none;position:absolute;align-items:center;justify-content:center;top:20px;right:20px;width:40px;height:40px;border:none;box-shadow:0 0 5px 1px #000000;border-radius:50%;background-color:#df403b;color:#ffffff;cursor:pointer}.close-user.svelte-ll97zt i.svelte-ll97zt{font-size:20px}.user-box:hover > .close-user{display:flex}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let selectUser = null;
  let linksUser;
  let alert = false;
  let className;
  let text;
  let show = false;
  function showBox(value) {
    if (value) {
      className = "fa-solid fa-check";
      text = "The changes have been applied successfully";
    } else {
      className = "fa-solid fa-xmark";
      text = "An error occurred while trying to apply the changes";
    }
    show = true;
    setTimeout(
      () => {
        show = false;
      },
      3e3
    );
  }
  let deleteUser = async () => {
    const username = selectUser?.username;
    alert = false;
    selectUser = null;
    const resData = await axios({
      method: "DELETE",
      url: `${DIR}/api/admin/${username}`,
      withCredentials: true
    }).then((res) => res.data);
    data.users = data.users.filter((user) => user.username !== username);
    showBox(resData.change);
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${show ? `${validate_component(UserMessage, "UserMessage").$$render($$result, { className, text }, {}, {})}` : ``}

${alert ? `${validate_component(AlertUser, "AlertUser").$$render(
      $$result,
      { deleteUser },
      {
        deleteUser: ($$value) => {
          deleteUser = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}

${selectUser ? `<div class="user-box svelte-ll97zt">${validate_component(UserData, "UserData").$$render(
      $$result,
      {
        username: selectUser.username,
        email: selectUser.email,
        avatar: selectUser.avatar,
        createdAt: selectUser.createdAt,
        role: selectUser.role
      },
      {
        role: ($$value) => {
          selectUser.role = $$value;
          $$settled = false;
        }
      },
      {}
    )}
		<div class="user-box-line svelte-ll97zt"></div>
		${validate_component(UserOption, "UserOption").$$render(
      $$result,
      {
        username: selectUser.username,
        showBox,
        description: selectUser.description,
        links: linksUser
      },
      {
        description: ($$value) => {
          selectUser.description = $$value;
          $$settled = false;
        },
        links: ($$value) => {
          linksUser = $$value;
          $$settled = false;
        }
      },
      {}
    )}
		<div class="user-box-line svelte-ll97zt"></div>
		${validate_component(UserChange, "UserChange").$$render(
      $$result,
      {
        username: selectUser.username,
        showBox,
        role: selectUser.role,
        myRole: data.user.role,
        alert
      },
      {
        role: ($$value) => {
          selectUser.role = $$value;
          $$settled = false;
        },
        myRole: ($$value) => {
          data.user.role = $$value;
          $$settled = false;
        },
        alert: ($$value) => {
          alert = $$value;
          $$settled = false;
        }
      },
      {}
    )}
		<button class="close-user svelte-ll97zt"><i class="fa-solid fa-xmark svelte-ll97zt"></i></button></div>` : ``}

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
              return `${validate_component(UserCell, "UserCell").$$render(
                $$result,
                { user, links: linksUser, selectUser },
                {
                  links: ($$value) => {
                    linksUser = $$value;
                    $$settled = false;
                  },
                  selectUser: ($$value) => {
                    selectUser = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            })}`;
          }
        })}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-ba0d1cc7.js.map
