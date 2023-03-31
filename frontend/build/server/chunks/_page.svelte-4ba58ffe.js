import { c as create_ssr_component, v as validate_component, f as each } from './index2-dd005ad7.js';
import { B as BoxGallery } from './BoxGallery-fc2dc603.js';
import { G as Gallery } from './Gallery-b1cea591.js';
import { I as Image } from './Image-e9ffa86f.js';
import { N as NavUser } from './NavUser-5e20a191.js';
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
            author: data.user?.username,
            innerText: "FAVORITES",
            images: data.favorites
          },
          {
            images: ($$value) => {
              data.favorites = $$value;
              $$settled = false;
            }
          },
          {}
        )}
	${validate_component(BoxGallery, "BoxGallery").$$render($$result, { className: "image-cell" }, {}, {
          default: () => {
            return `${data.favorites.length > 0 ? `${each(data.favorites, (image) => {
              return `${validate_component(Image, "Image").$$render($$result, { image }, {}, {})}`;
            })}` : ``}`;
          }
        })}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-4ba58ffe.js.map
