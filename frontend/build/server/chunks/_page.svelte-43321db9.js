import { c as create_ssr_component, v as validate_component, h as each, e as escape } from './index2-deb300cf.js';
import { B as BoxGallery } from './BoxGallery-42285b37.js';
import { G as Gallery } from './Gallery-a6eac7b9.js';
import { format } from 'timeago.js';
import { N as NavUser } from './NavUser-8071d79b.js';
import './config-b1573486.js';
import './shared-server-f2d06a89.js';
import './enums-381f6e0f.js';

const css = {
  code: ".user-comment-container.svelte-prz2ve{display:flex;flex-wrap:wrap;width:90%;min-width:490px;max-width:600px;height:100%;margin:0 auto;padding:10px;border-radius:10px;background-color:#eeeeee;box-shadow:0 0 2px #000000;gap:8px}a.svelte-prz2ve{font-weight:700}.user-comment-content.svelte-prz2ve{width:100%;max-height:120px;overflow:scroll;overflow-wrap:anywhere;scrollbar-width:none}p.svelte-prz2ve{margin-left:auto}",
  map: null
};
const CommentUser = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { comment } = $$props;
  if ($$props.comment === void 0 && $$bindings.comment && comment !== void 0)
    $$bindings.comment(comment);
  $$result.css.add(css);
  return `<div class="user-comment-container svelte-prz2ve"><a href="${"/gallery/" + escape(comment.imageId, true)}" class="svelte-prz2ve">http://localhost:3000/gallery/${escape(comment.imageId)}</a>
	<div class="user-comment-content svelte-prz2ve">${escape(comment.comment)}</div>
	<p class="svelte-prz2ve">${escape(format(comment.createdAt))}</p>
</div>`;
});
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
            innerText: "COMMENTS",
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
            return `${data.comments.length > 0 ? `${each(data.comments, (comment) => {
              return `${validate_component(CommentUser, "CommentUser").$$render($$result, { comment }, {}, {})}`;
            })}` : `<div class="user-message"><p>This user hasn&#39;t commented yet</p></div>`}`;
          }
        })}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-43321db9.js.map
