import { c as create_ssr_component, v as validate_component, f as each, e as escape, h as add_attribute } from './index2-dd005ad7.js';
import { D as DIR } from './config-b1573486.js';
import { F as Form, E as ErrorBox } from './ErrorBox-95cf1730.js';
import { B as BoxGallery } from './BoxGallery-fc2dc603.js';
import './shared-server-f2d06a89.js';

const css = {
  code: "div.svelte-1e5nczb{display:flex;flex-wrap:wrap;width:600px;height:min-content;background-color:#ffffff;box-shadow:0 2px 10px #666666}label.svelte-1e5nczb{width:480px;height:270px;margin:auto;background-image:url('/label-img.png');background-position:center;background-repeat:no-repeat;background-size:contain;cursor:pointer}input[type='file'].svelte-1e5nczb{display:none}.upload-input.svelte-1e5nczb{width:100%;padding:12px;border:none;outline:1px solid #bbbbbb;border-radius:4px}.upload-input.svelte-1e5nczb:focus{outline:1px solid #5383d3}button.svelte-1e5nczb{margin-left:auto;padding:12px 20px;background:#63c187;border:none;border-radius:4px;font-size:18px;font-weight:600;color:#ffffff;cursor:pointer}button.svelte-1e5nczb:hover{background:#53b177}a.svelte-1e5nczb{width:180px;height:180px;box-shadow:0 0 1px 2px #666666}img.svelte-1e5nczb{width:100%;height:100%;object-fit:contain}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let errors = {};
  let visible = false;
  let changeBoxErrors = (value) => visible = value;
  const setErrors = (data2) => errors = data2;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="svelte-1e5nczb"><h2 class="title"><i class="fa-solid fa-image title-icon"></i>
		Upload Image
	</h2>
	${validate_component(Form, "Form").$$render(
      $$result,
      {
        action: DIR + "/api/image/upload",
        prefix: "/gallery",
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
		<label class="svelte-1e5nczb"><input type="file" name="image" class="svelte-1e5nczb"></label>
		<input class="upload-input svelte-1e5nczb" type="text" name="title" placeholder="Title" spellcheck="false" autocomplete="off" minlength="5" maxlength="40" required>
		<textarea class="upload-input svelte-1e5nczb" name="description" placeholder="Description" rows="3" spellcheck="false" autocomplete="off" maxlength="4200"></textarea>
		<button class="svelte-1e5nczb"><i class="fa-solid fa-upload"></i>
			Upload
		</button>`;
        }
      }
    )}</div>
<div class="svelte-1e5nczb"><h2 class="title"><i class="fa-solid fa-images title-icon"></i>
		Recent Uploads
	</h2>
	${validate_component(BoxGallery, "BoxGallery").$$render($$result, { className: "image-upload" }, {}, {
      default: () => {
        return `${each(data.images, (image) => {
          return `<a href="${"/gallery/" + escape(image.id, true)}" class="svelte-1e5nczb"><img src="${escape(DIR, true) + "/uploads/" + escape(image.filename, true)}"${add_attribute("alt", image.title, 0)} class="svelte-1e5nczb">
		</a>`;
        })}`;
      }
    })}
</div>`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-89018f5c.js.map
