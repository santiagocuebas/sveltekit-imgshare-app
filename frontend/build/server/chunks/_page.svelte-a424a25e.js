import { c as create_ssr_component, v as validate_component, h as each, e as escape, d as add_attribute } from './index2-1f46a731.js';
import { format } from 'timeago.js';
import { B as BoxGallery } from './BoxGallery-660dcb88.js';
import { G as Gallery } from './Gallery-3a979db5.js';
import { N as NavUser } from './NavUser-951209c3.js';
import './config-b1573486.js';
import './shared-server-f2d06a89.js';
import './enums-381f6e0f.js';

const css = {
  code: ".about-container.svelte-1xu0vqr.svelte-1xu0vqr{display:grid;grid-template-columns:repeat(3, minmax(160px, 1fr));grid-auto-rows:min-content;justify-items:center}.about-box.svelte-1xu0vqr.svelte-1xu0vqr{grid-column:1 / span 2;display:flex;flex-wrap:wrap;width:90%;max-width:900px;min-width:300px;padding:10px 0;border-bottom:1px solid #cccccc;gap:10px}.about-box.svelte-1xu0vqr p.svelte-1xu0vqr{width:100%;min-height:20px}.about-box.svelte-1xu0vqr div.svelte-1xu0vqr{display:flex;flex-wrap:wrap;width:100%;min-height:20px}.about-box.svelte-1xu0vqr span.svelte-1xu0vqr{width:50%;padding:10px 0}.about-box.svelte-1xu0vqr a.svelte-1xu0vqr{width:max-content;color:#4e7ad8}.about-box.svelte-1xu0vqr a.svelte-1xu0vqr:hover{color:#9a4ed8}.about-statistics.svelte-1xu0vqr.svelte-1xu0vqr{grid-column:3 / span 1;grid-row:1 / span 3;width:100%;max-width:400px}h2.svelte-1xu0vqr.svelte-1xu0vqr{width:100%;font-size:20px;font-weight:500}.about-statistics.svelte-1xu0vqr h2.svelte-1xu0vqr{padding:10px 0;border-bottom:1px solid #cccccc}.about-statistics.svelte-1xu0vqr p.svelte-1xu0vqr{width:100%;padding:10px 0;border-bottom:1px solid #cccccc}",
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
    $$rendered = `${validate_component(Gallery, "Gallery").$$render($$result, { className: "gallery-user" }, {}, {
      default: () => {
        return `${validate_component(NavUser, "NavUser").$$render(
          $$result,
          {
            innerText: "ABOUT",
            username: data.foreignUser.username,
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
	${validate_component(BoxGallery, "BoxGallery").$$render($$result, { className: "image-row" }, {}, {
          default: () => {
            return `<div class="about-container svelte-1xu0vqr"><div class="about-box svelte-1xu0vqr"><h2 class="svelte-1xu0vqr">Description</h2>
				<p class="svelte-1xu0vqr"><!-- HTML_TAG_START -->${data.foreignUser.description}<!-- HTML_TAG_END --></p></div>
			<div class="about-box svelte-1xu0vqr"><h2 class="svelte-1xu0vqr">Links</h2>
				<div class="svelte-1xu0vqr">${each(data.foreignUser.links, (link) => {
              return `<span class="svelte-1xu0vqr"><a${add_attribute("href", link.url, 0)} target="_blank" rel="noreferrer" class="svelte-1xu0vqr">${escape(link.title)}</a>
					</span>`;
            })}</div></div>
			<div class="about-statistics svelte-1xu0vqr"><h2 class="svelte-1xu0vqr">Statistics</h2>
				<p class="svelte-1xu0vqr">Join ${escape(format(data.foreignUser.createdAt))}</p>
				<p class="svelte-1xu0vqr">${escape(data.foreignUser.totalViews)} views</p></div></div>`;
          }
        })}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-a424a25e.js.map
