import { c as create_ssr_component, v as validate_component, h as each, e as escape } from './index2-1f46a731.js';
import { B as BoxGallery } from './BoxGallery-660dcb88.js';
import { G as Gallery } from './Gallery-3a979db5.js';
import { I as Image } from './Image-c445e586.js';
import { N as NavUser } from './NavUser-951209c3.js';
import './config-b1573486.js';
import './shared-server-f2d06a89.js';
import './enums-381f6e0f.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Gallery, "Gallery").$$render($$result, { className: "gallery-user" }, {}, {
      default: () => {
        return `${validate_component(NavUser, "NavUser").$$render(
          $$result,
          {
            username: data.foreignUser?.username,
            role: data.user?.role,
            author: data.user?.username,
            images: data.images
          },
          {
            images: ($$value) => {
              data.images = $$value;
              $$settled = false;
            }
          },
          {}
        )}
	${validate_component(BoxGallery, "BoxGallery").$$render($$result, { className: "image-cell" }, {}, {
          default: () => {
            return `${data.images.length > 0 ? `${each(data.images, (image) => {
              return `${validate_component(Image, "Image").$$render($$result, { image }, {}, {})}`;
            })}` : `<div class="user-message user-column"><p>This user hasn&#39;t uploaded any image yet</p>
				${data.user ? `<a href="${"/user/" + escape(data.user.username, true) + "/upload"}">Start now
					</a>` : ``}</div>`}`;
          }
        })}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-60faa9ae.js.map
