import { c as create_ssr_component, v as validate_component } from './index2-1f46a731.js';
import { D as DIR } from './config-b1573486.js';
import { C as ContainerForm } from './ContainerForm-c69ef007.js';
import { F as Form, E as ErrorBox } from './ErrorBox-4da23c36.js';
import './shared-server-f2d06a89.js';

const css = {
  code: "input.svelte-jn909o{width:100%;padding:12px 14px;border:none;outline:1px solid #bbbbbb;border-radius:10px}input.svelte-jn909o:focus{outline:2px solid #5383d3}button.svelte-jn909o{margin-left:auto;padding:12px;border:none;background-color:#3cb85b;font-size:20px;font-weight:700;color:#ffffff;cursor:pointer}button.svelte-jn909o:hover{background-color:#109326}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let errors = {};
  let visible = false;
  const setErrors = (data) => errors = data;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(ContainerForm, "ContainerForm").$$render($$result, { title: "Signup" }, {}, {
      default: () => {
        return `${validate_component(Form, "Form").$$render(
          $$result,
          {
            action: DIR + "/api/auth/signup",
            prefix: "/user",
            errors: setErrors,
            show: visible
          },
          {
            show: ($$value) => {
              visible = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `${visible ? `${validate_component(ErrorBox, "ErrorBox").$$render(
                $$result,
                { errors, hide: visible },
                {
                  hide: ($$value) => {
                    visible = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}` : ``}
		<input type="text" name="username" placeholder="Username" class="svelte-jn909o">
		<input type="email" name="email" placeholder="Email" maxlength="100" required class="svelte-jn909o">
		<input type="password" name="password" placeholder="Password" class="svelte-jn909o">
		<input type="password" name="confirmPassword" placeholder="Confirm password" class="svelte-jn909o">
		<button class="svelte-jn909o">Signup</button>`;
            }
          }
        )}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-b8a4e7ce.js.map
