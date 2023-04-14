import { c as create_ssr_component, v as validate_component, h as each } from './index2-deb300cf.js';
import { L as Logo, N as NavGallery } from './NavGallery-45a636bf.js';
import { G as Gallery } from './Gallery-a6eac7b9.js';
import { B as BoxGallery } from './BoxGallery-42285b37.js';
import { I as Image } from './Image-637278c4.js';
import './config-b1573486.js';
import './shared-server-f2d06a89.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})}
${validate_component(Gallery, "Gallery").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(NavGallery, "NavGallery").$$render(
          $$result,
          { images: data.images },
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
            return `${each(data.images, (image) => {
              return `${validate_component(Image, "Image").$$render($$result, { image }, {}, {})}`;
            })}`;
          }
        })}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-7620c10b.js.map
