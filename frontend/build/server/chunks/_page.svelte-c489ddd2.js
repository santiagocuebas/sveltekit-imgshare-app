import { c as create_ssr_component, v as validate_component, h as each, e as escape, d as add_attribute } from './index2-1f46a731.js';
import { format } from 'timeago.js';
import { D as DIR } from './config-b1573486.js';
import { U as UserRole } from './enums-381f6e0f.js';
import { B as BoxGallery } from './BoxGallery-660dcb88.js';
import './shared-server-f2d06a89.js';

const css$a = {
  code: ".image-box.svelte-ezq2y0.svelte-ezq2y0{grid-column:1 / span 4;display:grid;grid-auto-rows:min-content;height:min-content;background-color:#ffffff;box-shadow:0 2px 10px #666666}.image-edit.svelte-ezq2y0.svelte-ezq2y0{display:flex;position:relative;justify-content:flex-end;align-items:center;height:30px;padding:0 10px;background-color:#444444}.image-edit.svelte-ezq2y0 i.svelte-ezq2y0{display:flex;align-items:center;justify-content:center;width:24px;height:16px;margin-left:auto;padding:0;border:none;color:#ffffff;cursor:pointer}.image-edit.svelte-ezq2y0 i.svelte-ezq2y0:hover{background-color:#666666}.image-author.svelte-ezq2y0.svelte-ezq2y0{display:grid;grid-template-columns:48px 1fr;grid-auto-rows:min-content;align-content:center;height:min-content;padding:6px;column-gap:10px}.image-author-link.svelte-ezq2y0.svelte-ezq2y0{grid-row:1 / span 2;width:48px;height:48px}.image-author.svelte-ezq2y0 img.svelte-ezq2y0{width:100%;height:100%;border-radius:50%;box-shadow:0 0 1px 1px #666666;object-fit:cover}.image-author-username.svelte-ezq2y0.svelte-ezq2y0{width:max-content;height:min-content;font-size:20px;font-weight:700}.image-content.svelte-ezq2y0.svelte-ezq2y0{width:100%;max-width:768px;height:auto;margin:0 auto}.image-description.svelte-ezq2y0.svelte-ezq2y0{padding:20px;overflow-wrap:anywhere;text-align:center}.image-description.svelte-ezq2y0 form.svelte-ezq2y0{display:flex;flex-wrap:wrap;justify-content:center;gap:10px}.image-description.svelte-ezq2y0 textarea.svelte-ezq2y0{width:100%;height:fit-content;padding:10px;border:none;outline:none;border-bottom:2px solid #666666;overflow-wrap:anywhere;text-align:center;scrollbar-width:none}.image-description.svelte-ezq2y0 button.svelte-ezq2y0{width:100px;padding:8px 0;border:none;border-radius:6px;background-color:#d33535;font-weight:700;color:#ffffff;cursor:pointer}.image-description.svelte-ezq2y0 .blue.svelte-ezq2y0{background-color:#4d4adb}@media(max-width: 1040px){.image-box.svelte-ezq2y0.svelte-ezq2y0{grid-column:1 / span 6}}",
  map: null
};
const ImageBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { image } = $$props;
  let { user } = $$props;
  let { visible } = $$props;
  let { description } = $$props;
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  if ($$props.visible === void 0 && $$bindings.visible && visible !== void 0)
    $$bindings.visible(visible);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  $$result.css.add(css$a);
  return `<div class="image-box svelte-ezq2y0">${user && (user.username === image.author || user.role !== UserRole.EDITOR) ? `<div class="image-edit svelte-ezq2y0"><i class="fa-solid fa-ellipsis svelte-ezq2y0"></i>
			${slots.default ? slots.default({}) : ``}</div>` : ``}
	<h2 class="title"><i class="fa-solid fa-image title-icon"></i>
		${escape(image.title)}</h2>
	<div class="image-author svelte-ezq2y0"><a class="image-author-link svelte-ezq2y0" href="${"/user/" + escape(image.author, true)}"><img src="${escape(DIR, true) + "/uploads/avatars/" + escape(image.avatar, true)}"${add_attribute("alt", image.author, 0)} class="svelte-ezq2y0"></a>
		<a class="image-author-username svelte-ezq2y0" href="${"/user/" + escape(image.author, true)}">${escape(image.author)}</a>
		<p>${escape(image.views)} views ● ${escape(format(image.createdAt))}</p></div>
	<img class="image-content svelte-ezq2y0" src="${escape(DIR, true) + "/uploads/" + escape(image.filename, true)}"${add_attribute("alt", image.title, 0)}>
	<div class="image-description svelte-ezq2y0">${description ? `<form action="${escape(DIR, true) + "/api/image/" + escape(image.id, true) + "/description"}" method="POST" class="svelte-ezq2y0"><textarea id="edit" name="description" rows="1" spellcheck="false" autocomplete="off" maxlength="4200" class="svelte-ezq2y0">${image.description || ""}</textarea>
				<button class="svelte-ezq2y0">Cancel
				</button>
				<button class="blue svelte-ezq2y0">Send
				</button></form>` : `<!-- HTML_TAG_START -->${image.description}<!-- HTML_TAG_END -->`}</div>
	${slots.assessment ? slots.assessment({}) : ``}
</div>`;
});
const css$9 = {
  code: ".sidebar.svelte-pei3k5{grid-column:5 / span 2;grid-row:1 / span 2}.sidebar-container.svelte-pei3k5{margin-left:20px;background-color:#ffffff;box-shadow:0 2px 10px #666666}@media(max-width: 1040px){.sidebar.svelte-pei3k5{display:none}}",
  map: null
};
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$9);
  return `<div class="sidebar svelte-pei3k5"><div class="sidebar-container svelte-pei3k5"><h2 class="title"><i class="fa-solid fa-images title-icon"></i>
			Recent Uploads
		</h2>
		${slots.default ? slots.default({}) : ``}</div>
</div>`;
});
const css$8 = {
  code: ".comments.svelte-1n6d5p9{grid-column:1 / span 4;display:flex;flex-wrap:wrap;height:min-content;margin-top:20px;gap:20px}@media(max-width: 1040px){.comments.svelte-1n6d5p9{grid-column:1 / span 6}}",
  map: null
};
const CommentsContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$8);
  return `<div class="comments svelte-1n6d5p9">${slots.default ? slots.default({}) : ``}
</div>`;
});
const css$7 = {
  code: ".register.svelte-5jkpge.svelte-5jkpge{display:flex;align-items:center;width:100%;padding:20px;background-color:#ffffff;font-weight:700;box-shadow:0 2px 10px #666666}.register.svelte-5jkpge div.svelte-5jkpge{display:flex;margin-left:auto;gap:5px}.register.svelte-5jkpge button.svelte-5jkpge{width:70px;height:40px;padding:10px;border:none;font-weight:700;color:#ffffff;cursor:pointer}.black.svelte-5jkpge.svelte-5jkpge{background-color:#000000}.green.svelte-5jkpge.svelte-5jkpge{background-color:#3cb85b}",
  map: null
};
const Register = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$7);
  return `<div class="register svelte-5jkpge">Must be register to comment
  <div class="svelte-5jkpge"><a href="/signin"><button class="black svelte-5jkpge">Signin
      </button></a>
    <a href="/signup"><button class="green svelte-5jkpge">Signup
      </button></a></div>
</div>`;
});
const css$6 = {
  code: "div.svelte-1slore9{width:100%;background-color:#ffffff;box-shadow:0 2px 10px #666666}form.svelte-1slore9{display:grid;grid-template-columns:40px 1fr;grid-auto-rows:min-content;padding:10px;gap:10px}img.svelte-1slore9{grid-row:1 / span 2;width:40px;height:40px;border-radius:50%;box-shadow:0 0 1px 1px #666666;object-fit:cover}input.svelte-1slore9{width:100%;height:min-content;padding:4px 0;border:none;outline:none;border-bottom:1px solid #888888}input.svelte-1slore9:focus{border-bottom:2px solid #333333}span.svelte-1slore9{display:flex;margin-left:auto;gap:10px}button.svelte-1slore9{width:100px;height:40px;border:none;background-color:#ffffff;font-weight:700;cursor:pointer}button.svelte-1slore9:hover{background-color:#dddddd}.blue.svelte-1slore9{background-color:#5383d3;color:#ffffff}.blue.svelte-1slore9:hover{background-color:#4373c3}.disabled.svelte-1slore9{background-color:#dddddd;color:#888888;cursor:auto}",
  map: null
};
const CommentForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { imageId } = $$props;
  let { avatar } = $$props;
  let { comments } = $$props;
  let input = "";
  let inputElement;
  if ($$props.imageId === void 0 && $$bindings.imageId && imageId !== void 0)
    $$bindings.imageId(imageId);
  if ($$props.avatar === void 0 && $$bindings.avatar && avatar !== void 0)
    $$bindings.avatar(avatar);
  if ($$props.comments === void 0 && $$bindings.comments && comments !== void 0)
    $$bindings.comments(comments);
  $$result.css.add(css$6);
  return `<div class="svelte-1slore9"><h2 class="title"><i class="fa-regular fa-copy title-icon"></i>
		Post
	</h2>
	<form action="${escape(DIR, true) + "/api/image/" + escape(imageId, true) + "/comment"}" method="POST" class="svelte-1slore9"><img src="${escape(DIR, true) + "/uploads/avatars/" + escape(avatar, true)}"${add_attribute("alt", imageId, 0)} class="svelte-1slore9">
		<input type="text" name="comment" placeholder="Send a comment..." autocomplete="off" spellcheck="false" class="svelte-1slore9"${add_attribute("value", input, 0)}${add_attribute("this", inputElement, 0)}>
		${``}</form>
</div>`;
});
const css$5 = {
  code: ".comments-container.svelte-1y2cz3c{width:100%;background-color:#ffffff;box-shadow:0 2px 10px #666666}.comments-list.svelte-1y2cz3c{display:grid;grid-auto-rows:min-content;padding:10px;row-gap:10px}",
  map: null
};
const CommentsBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { totalComments } = $$props;
  if ($$props.totalComments === void 0 && $$bindings.totalComments && totalComments !== void 0)
    $$bindings.totalComments(totalComments);
  $$result.css.add(css$5);
  return `<div class="comments-container svelte-1y2cz3c"><h2 class="title"><i class="fa-solid fa-message title-icon"></i>
    ${escape(totalComments)} Comments
  </h2>
  ${totalComments > 0 ? `<div class="comments-list svelte-1y2cz3c">${slots.default ? slots.default({}) : ``}</div>` : ``}
</div>`;
});
const css$4 = {
  code: ".comment.svelte-3y2i6b.svelte-3y2i6b.svelte-3y2i6b{display:grid;position:relative;grid-template-columns:40px 1fr 40px;grid-auto-rows:min-content;padding-bottom:10px;border-bottom:2px solid #333333;column-gap:10px;row-gap:5px}.comment-avatar.svelte-3y2i6b.svelte-3y2i6b.svelte-3y2i6b{grid-row:1 / span 3;width:40px;height:40px}.comment-avatar.svelte-3y2i6b img.svelte-3y2i6b.svelte-3y2i6b{width:100%;height:100%;border-radius:50%;box-shadow:0 0 1px 1px #666666;object-fit:cover}.comment.svelte-3y2i6b div.svelte-3y2i6b.svelte-3y2i6b{display:flex;gap:5px}.comment-author.svelte-3y2i6b a.svelte-3y2i6b.svelte-3y2i6b{font-weight:700}.comment-content.svelte-3y2i6b.svelte-3y2i6b.svelte-3y2i6b{width:100%;min-height:35px;overflow-wrap:anywhere}.comment-form.svelte-3y2i6b.svelte-3y2i6b.svelte-3y2i6b{display:flex;justify-content:flex-end;flex-wrap:wrap;gap:10px}.comment-form.svelte-3y2i6b input.svelte-3y2i6b.svelte-3y2i6b{width:100%;padding:4px 0;border:none;border-bottom:1px solid #888888;outline:none}.comment-form.svelte-3y2i6b button.svelte-3y2i6b.svelte-3y2i6b{display:flex;justify-content:space-evenly;align-items:center;width:100px;padding:6px 0;border:none;border-radius:3px;background-color:#383be6;font-weight:600;color:#ffffff;cursor:pointer}.comment-form.svelte-3y2i6b .red.svelte-3y2i6b.svelte-3y2i6b{background-color:#e93e3e}.comment-form.svelte-3y2i6b .disabled.svelte-3y2i6b.svelte-3y2i6b{background-color:#dddddd;color:#888888;cursor:auto}i.svelte-3y2i6b.svelte-3y2i6b.svelte-3y2i6b{cursor:pointer}.comment-options.svelte-3y2i6b.svelte-3y2i6b.svelte-3y2i6b{grid-column:3 / span 1;grid-row:1 / span 3}.comment-button.svelte-3y2i6b.svelte-3y2i6b.svelte-3y2i6b{display:none;width:40px;height:40px;margin-left:auto;border:none;border-radius:50%;background-color:#ffffff;cursor:pointer}.comment-button.svelte-3y2i6b.svelte-3y2i6b.svelte-3y2i6b:hover{background-color:#cccccc}.comment.svelte-3y2i6b:hover .comment-options.svelte-3y2i6b>button.svelte-3y2i6b{display:block}.comment-options.svelte-3y2i6b ul.svelte-3y2i6b.svelte-3y2i6b{display:grid;position:absolute;right:0;margin-top:40px;padding:5px 0;border-radius:4px;background-color:#ffffff;box-shadow:0 0 1px 2px #666666;z-index:200}.comment-options.svelte-3y2i6b li.svelte-3y2i6b.svelte-3y2i6b{display:flex;align-items:center;justify-content:start;width:180px;padding:5px 20px;font-weight:700;cursor:pointer;gap:20px}.comment-options.svelte-3y2i6b li.svelte-3y2i6b.svelte-3y2i6b:hover{background-color:#cccccc}.grey.svelte-3y2i6b.svelte-3y2i6b.svelte-3y2i6b{color:#777777}",
  map: null
};
const Comment = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { comment } = $$props;
  let { comments } = $$props;
  let { user } = $$props;
  comment.comment;
  if ($$props.comment === void 0 && $$bindings.comment && comment !== void 0)
    $$bindings.comment(comment);
  if ($$props.comments === void 0 && $$bindings.comments && comments !== void 0)
    $$bindings.comments(comments);
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  $$result.css.add(css$4);
  return `<div class="comment svelte-3y2i6b"><a class="comment-avatar svelte-3y2i6b" href="${"/user/" + escape(comment.author, true)}"><img src="${escape(DIR, true) + "/uploads/avatars/" + escape(comment.avatar, true)}"${add_attribute("alt", comment.author, 0)} class="svelte-3y2i6b"></a>
	<div class="comment-author svelte-3y2i6b"><a href="${"/user/" + escape(comment.author, true)}" class="svelte-3y2i6b">${escape(comment.author)}</a>
		●
		<p>${escape(format(comment.createdAt))}</p>
		${comment.edit ? `<p class="grey svelte-3y2i6b">(edit)</p>` : ``}</div>
	${`<div class="comment-content svelte-3y2i6b">${escape(comment.comment)}</div>`}
	<div class="svelte-3y2i6b">${slots.default ? slots.default({}) : ``}</div>
	<div class="comment-options svelte-3y2i6b">${user && (user.username === comment.author || user.username === comment.receiver || user.role !== UserRole.EDITOR) ? `<button class="comment-button svelte-3y2i6b"><i class="fa-solid fa-ellipsis-vertical fa-lg svelte-3y2i6b"></i></button>
			${``}` : ``}</div>
</div>`;
});
const css$3 = {
  code: "a.svelte-18hblro{display:grid;grid-template-columns:80px 1fr;grid-auto-rows:min-content;align-items:center;padding:10px;column-gap:10px;row-gap:5px}a.svelte-18hblro:hover{background-color:#dddddd}img.svelte-18hblro{grid-row:1 / span 3;width:80px;height:80px;object-fit:cover}h2.svelte-18hblro{align-self:flex-start;font-size:20px;overflow:hidden;text-overflow:ellipsis}p.svelte-18hblro{align-self:flex-start;text-overflow:ellipsis;font-weight:600}div.svelte-18hblro{align-self:flex-end;justify-self:end;text-overflow:ellipsis;color:#555555}",
  map: null
};
const SideImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { image } = $$props;
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  $$result.css.add(css$3);
  return `<a href="${"/gallery/" + escape(image.id, true)}"${add_attribute("title", image.title, 0)} class="svelte-18hblro"><img src="${escape(DIR, true) + "/uploads/" + escape(image.filename, true)}"${add_attribute("alt", image.title, 0)} class="svelte-18hblro">
  <h2 class="svelte-18hblro">${escape(image.title)}</h2>
  <p class="svelte-18hblro">${escape(image.author)}</p>
  <div class="svelte-18hblro">${escape(image.views)} views ● ${escape(format(image.createdAt))}</div>
</a>`;
});
const css$2 = {
  code: "ul.svelte-1jhluf3{display:grid;position:absolute;width:200px;top:0;right:0;margin-top:30px;padding:5px 0;border-radius:4px;background-color:#444444;box-shadow:0 0 10px 2px #666666}a.svelte-1jhluf3{display:flex;justify-content:space-between;align-items:center;padding:5px 20px;font-weight:700;color:#ffffff;cursor:pointer}a.svelte-1jhluf3:hover{background-color:#ffffff;color:#000000}",
  map: null
};
const ImageOptions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { image } = $$props;
  let { visible } = $$props;
  let { description } = $$props;
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.visible === void 0 && $$bindings.visible && visible !== void 0)
    $$bindings.visible(visible);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  $$result.css.add(css$2);
  return `<ul class="svelte-1jhluf3"><a href="#edit" class="svelte-1jhluf3"><li>Edit</li>
		<i class="fa-solid fa-pen"></i></a>
	<a href="#placeholder" class="svelte-1jhluf3"><li>Public</li>
		${image.isPublic ? `<i class="fa-solid fa-eye"></i>` : `<i class="fa-solid fa-eye-slash"></i>`}</a>
	<a href="#placeholder" class="svelte-1jhluf3"><li>Delete</li>
		<i class="fa-solid fa-delete-left"></i></a>
</ul>`;
});
const css$1 = {
  code: "div.svelte-xdj7pf{display:flex;align-items:center;gap:6px}i.svelte-xdj7pf{cursor:pointer}.selected.svelte-xdj7pf{color:#000000}.grey.svelte-xdj7pf{color:#777777}",
  map: null
};
const ImageIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { user } = $$props;
  let { object } = $$props;
  let { id = "like" } = $$props;
  let { text = "image" } = $$props;
  let { icon = "fa-thumbs-up" } = $$props;
  let { className = "selected" } = $$props;
  let { include } = $$props;
  let { fav = false } = $$props;
  let { assessment } = $$props;
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  if ($$props.object === void 0 && $$bindings.object && object !== void 0)
    $$bindings.object(object);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.include === void 0 && $$bindings.include && include !== void 0)
    $$bindings.include(include);
  if ($$props.fav === void 0 && $$bindings.fav && fav !== void 0)
    $$bindings.fav(fav);
  if ($$props.assessment === void 0 && $$bindings.assessment && assessment !== void 0)
    $$bindings.assessment(assessment);
  $$result.css.add(css$1);
  return `<div class="svelte-xdj7pf"><i${add_attribute("id", id, 0)} class="${"fa-solid " + escape(icon, true) + " " + escape(include ? className : "", true) + " svelte-xdj7pf"}"></i>
	${escape(assessment)}
</div>`;
});
const css = {
  code: ".image-container.svelte-2mhczw{display:grid;grid-template-columns:repeat(6, minmax(85px, 1fr));grid-auto-rows:min-content 1fr;width:90%;min-width:510px;max-width:1520px}.image-stats.svelte-2mhczw{display:flex;align-items:center;justify-content:flex-end;height:56px;padding-right:30px;background-color:#5383d3;color:#ffffff;gap:60px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let visible = false;
  let description = false;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="image-container svelte-2mhczw">${validate_component(ImageBox, "ImageBox").$$render(
      $$result,
      {
        image: data.image,
        user: data.user,
        visible,
        description
      },
      {
        visible: ($$value) => {
          visible = $$value;
          $$settled = false;
        },
        description: ($$value) => {
          description = $$value;
          $$settled = false;
        }
      },
      {
        assessment: () => {
          return `<div class="image-stats svelte-2mhczw" slot="assessment">${validate_component(ImageIcon, "ImageIcon").$$render(
            $$result,
            {
              user: data.user,
              include: data.image.like.includes(data.user?.username),
              assessment: data.image.like.length,
              object: data.image
            },
            {
              object: ($$value) => {
                data.image = $$value;
                $$settled = false;
              }
            },
            {}
          )}
			${validate_component(ImageIcon, "ImageIcon").$$render(
            $$result,
            {
              user: data.user,
              id: "dislike",
              icon: "fa-thumbs-down",
              assessment: data.image.dislike.length,
              include: data.image.dislike.includes(data.user?.username),
              object: data.image
            },
            {
              object: ($$value) => {
                data.image = $$value;
                $$settled = false;
              }
            },
            {}
          )}
			${validate_component(ImageIcon, "ImageIcon").$$render(
            $$result,
            {
              user: data.user,
              id: "fav",
              fav: true,
              icon: "fa-star",
              assessment: data.image.favorite.length,
              include: data.image.favorite.includes(data.user?.username),
              object: data.image
            },
            {
              object: ($$value) => {
                data.image = $$value;
                $$settled = false;
              }
            },
            {}
          )}</div>`;
        },
        default: () => {
          return `${visible ? `${validate_component(ImageOptions, "ImageOptions").$$render(
            $$result,
            { image: data.image, visible, description },
            {
              image: ($$value) => {
                data.image = $$value;
                $$settled = false;
              },
              visible: ($$value) => {
                visible = $$value;
                $$settled = false;
              },
              description: ($$value) => {
                description = $$value;
                $$settled = false;
              }
            },
            {}
          )}` : ``}`;
        }
      }
    )}
	${validate_component(Sidebar, "Sidebar").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(BoxGallery, "BoxGallery").$$render($$result, { className: "image-sidebar" }, {}, {
          default: () => {
            return `${each(data.sidebar, (image) => {
              return `${validate_component(SideImage, "SideImage").$$render($$result, { image }, {}, {})}`;
            })}`;
          }
        })}`;
      }
    })}
	${validate_component(CommentsContainer, "CommentsContainer").$$render($$result, {}, {}, {
      default: () => {
        return `${data.user ? `${validate_component(CommentForm, "CommentForm").$$render(
          $$result,
          {
            imageId: data.image.id,
            avatar: data.user.avatar,
            comments: data.comments
          },
          {
            comments: ($$value) => {
              data.comments = $$value;
              $$settled = false;
            }
          },
          {}
        )}` : `${validate_component(Register, "Register").$$render($$result, {}, {}, {})}`}
		${validate_component(CommentsBox, "CommentsBox").$$render($$result, { totalComments: data.comments.length }, {}, {
          default: () => {
            return `${each(data.comments, (comment) => {
              return `${validate_component(Comment, "Comment").$$render(
                $$result,
                {
                  user: data.user,
                  comments: data.comments,
                  comment
                },
                {
                  comments: ($$value) => {
                    data.comments = $$value;
                    $$settled = false;
                  },
                  comment: ($$value) => {
                    comment = $$value;
                    $$settled = false;
                  }
                },
                {
                  default: () => {
                    return `${validate_component(ImageIcon, "ImageIcon").$$render(
                      $$result,
                      {
                        user: data.user,
                        text: "comment",
                        assessment: comment.like.length,
                        className: "grey",
                        include: comment.like.includes(data.user?.username),
                        object: comment
                      },
                      {
                        object: ($$value) => {
                          comment = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )}
					${validate_component(ImageIcon, "ImageIcon").$$render(
                      $$result,
                      {
                        user: data.user,
                        id: "dislike",
                        text: "comment",
                        icon: "fa-solid fa-thumbs-down",
                        className: "grey",
                        assessment: comment.dislike.length,
                        include: comment.dislike.includes(data.user?.username),
                        object: comment
                      },
                      {
                        object: ($$value) => {
                          comment = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )}
				`;
                  }
                }
              )}`;
            })}`;
          }
        })}`;
      }
    })}
</div>`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-c489ddd2.js.map
