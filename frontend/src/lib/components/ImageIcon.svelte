<script lang="ts">
  import type { IUser, IImage, IComment } from "$lib/global";
	import { DIR } from '$lib/config.js';
  import { isImage } from "$lib/function.js";
	import { handleRegister } from "$lib/services/services";

	export let user: IUser;
	export let object: IImage | IComment;
	export let id: string = 'like';
	export let text: string = 'image';
	export let icon: string = 'fa-thumbs-up';
	export let className: string = 'selected';
	export let include: boolean;
	export let fav: boolean = false;
	export let assessment: number;

  async function handleLike(this: HTMLElement) {
		if (user) {
			const url = `${DIR}/api/${text}/${object.id}/like`;
			const { like, dislike } = await handleRegister(url, this.id);

			object.like = like;
			object.dislike = dislike;
		}
	}

	async function handleFavotite(this: HTMLElement) {
		if (user && isImage(object)) {
			const url = `${DIR}/api/image/${object.id}/favorite`;
			const { favorite } = await handleRegister(url, this.id);

			object.favorite = favorite;
		}
	}
</script>

<div>
	<i
		id={id}
		class="fa-solid {icon} {include ? className : ''}"
		on:mousedown={fav ? handleFavotite : handleLike}
	></i>
	{assessment}
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
