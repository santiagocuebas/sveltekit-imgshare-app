import { c as create_ssr_component, v as validate_component } from './index2-dd005ad7.js';
import { D as DIR } from './config-b1573486.js';
import { C as ContainerForm } from './ContainerForm-2d207669.js';
import { F as Form, E as ErrorBox } from './ErrorBox-95cf1730.js';
import './shared-server-f2d06a89.js';

const css = {
  code: "input.svelte-jn909o{width:100%;padding:12px 14px;border:none;outline:1px solid #bbbbbb;border-radius:10px}input.svelte-jn909o:focus{outline:2px solid #5383d3}button.svelte-jn909o{margin-left:auto;padding:12px;border:none;background-color:#3cb85b;font-size:20px;font-weight:700;color:#ffffff;cursor:pointer}button.svelte-jn909o:hover{background-color:#109326}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let errors = {};
  let visible = false;
  let changeBoxErrors = (value) => visible = value;
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
            change: changeBoxErrors,
            errors: setErrors
          },
          {},
          {
            default: () => {
              return `${visible ? `${validate_component(ErrorBox, "ErrorBox").$$render(
                $$result,
                { errors, hide: changeBoxErrors },
                {
                  hide: ($$value) => {
                    changeBoxErrors = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}` : ``}
		<input type="text" name="username" placeholder="Username" minlength="5" maxlength="40" required class="svelte-jn909o">
		<input type="email" name="email" placeholder="Email" maxlength="100" required class="svelte-jn909o">
		<input type="password" name="password" placeholder="Password" minlength="8" maxlength="40" required class="svelte-jn909o">
		<input type="password" name="confirmPassword" placeholder="Confirm password" required class="svelte-jn909o">
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
//# sourceMappingURL=_page.svelte-21ddc27d.js.map
