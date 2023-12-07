<script lang="ts">
  import type { IUser, IImage, IComment } from "$lib/global";
	import { DIR } from '$lib/config.js';
  import { isComment, isImage } from "$lib/function.js";
	import { handleRegister } from "$lib/services/services";
  import { beforeUpdate } from "svelte";

	export let user: IUser;
	export let object: IImage | IComment;
	export let id: string = 'like';

	let check = checkElement();
	let name = selectClassName();
	let count = countElements();

	function selectIcon() {
		if (id === 'like') return 'fa-thumbs-up'
		if (id === 'dislike') return 'fa-thumbs-down'
		return 'fa-star'
	}

	function checkElement() {
		if (isImage(object) && id === 'fav') return object.favorites.includes(user?.username);
		else if (id === 'like') return object.likes.includes(user?.username);
		return object.dislikes.includes(user?.username);
	}

	function selectClassName() {
		if (isComment(object)) return 'grey'
		return 'selected'
	};

	function countElements() {
		if (isImage(object) && id === 'fav') return object.favorites.length;
		else if (id === 'like') return object.likes.length;
		return object.dislikes.length;
	}

  async function handleLike() {
		if (user) {
			let text = 'image';

			if (isComment(object)) text = 'comment';

			const url = `${DIR}/api/${text}/${object.id}/like`;
			const { likes, dislikes } = await handleRegister(url, id);

			object.likes = likes;
			object.dislikes = dislikes;
		}
	}

	async function handleFavotite() {
		if (user && isImage(object)) {
			const url = `${DIR}/api/image/${object.id}/favorite`;
			const { favorites } = await handleRegister(url, id);

			if (favorites) {
				object.favorites = favorites;
			}
		}
	}

	beforeUpdate(() => {
		check = checkElement();
		name = selectClassName();
		count = countElements();
	});
</script>

<div>
	<i
		class="fa-solid {selectIcon()} {check ? name : ''}"
		role="none"
		on:mousedown={id === 'fav' ? handleFavotite : handleLike}
	></i>
	{count}
</div>

<style>
	div {
		display: flex;
		align-items: center;
		gap: 6px;
	}

	i {
		cursor: pointer;
	}

	.selected {
		color: #000000;
	}
	
	.grey {
		color: #777777;
	}
</style>
