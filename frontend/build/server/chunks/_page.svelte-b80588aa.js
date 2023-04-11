import { c as create_ssr_component, v as validate_component, h as each, e as escape, d as add_attribute } from './index2-1f46a731.js';
import { D as DIR } from './config-b1573486.js';
import { F as Form, E as ErrorBox } from './ErrorBox-4da23c36.js';
import { B as BoxGallery } from './BoxGallery-660dcb88.js';
import './shared-server-f2d06a89.js';

const css = {
  code: "div.svelte-17d4s3q{display:flex;flex-wrap:wrap;width:600px;height:min-content;background-color:#ffffff;box-shadow:0 2px 10px #666666}label.svelte-17d4s3q{width:480px;height:270px;margin:auto;background-image:url('/label-img.png');background-position:center;background-repeat:no-repeat;background-size:contain;cursor:pointer}input[type='file'].svelte-17d4s3q{display:none}.upload-input.svelte-17d4s3q{width:100%;padding:12px;border:none;outline:1px solid #bbbbbb;border-radius:4px}.upload-input.svelte-17d4s3q:focus{outline:1px solid #5383d3}button.svelte-17d4s3q{margin-left:auto;padding:12px 20px;background:#63c187;border:none;border-radius:4px;font-size:18px;font-weight:600;color:#ffffff;cursor:pointer}button.svelte-17d4s3q:hover{background:#53b177}a.svelte-17d4s3q{width:180px;height:180px;box-shadow:0 0 1px 2px #666666}img.svelte-17d4s3q{width:100%;height:100%;object-fit:cover}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let errors = {};
  let visible = false;
  const setErrors = (data2) => errors = data2;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="svelte-17d4s3q"><h2 class="title"><i class="fa-solid fa-image title-icon"></i>
		Upload Image
	</h2>
	${validate_component(Form, "Form").$$render(
      $$result,
      {
        action: DIR + "/api/image/upload",
        prefix: "/gallery",
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
		<label class="svelte-17d4s3q"><input type="file" name="image" class="svelte-17d4s3q"></label>
		<input class="upload-input svelte-17d4s3q" type="text" name="title" placeholder="Title" spellcheck="false" autocomplete="off">
		<textarea class="upload-input svelte-17d4s3q" name="description" placeholder="Description" rows="3" spellcheck="false" autocomplete="off"></textarea>
		<button class="svelte-17d4s3q"><i class="fa-solid fa-upload"></i>
			Upload
		</button>`;
        }
      }
    )}</div>
<div class="svelte-17d4s3q"><h2 class="title"><i class="fa-solid fa-images title-icon"></i>
		Recent Uploads
	</h2>
	${validate_component(BoxGallery, "BoxGallery").$$render($$result, { className: "image-upload" }, {}, {
      default: () => {
        return `${each(data.images, (image) => {
          return `<a href="${"/gallery/" + escape(image.id, true)}" class="svelte-17d4s3q"><img src="${escape(DIR, true) + "/uploads/" + escape(image.filename, true)}"${add_attribute("alt", image.title, 0)} class="svelte-17d4s3q">
			</a>`;
        })}`;
      }
    })}
</div>`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-b80588aa.js.map
