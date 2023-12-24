<script lang="ts">
	import type { ResponseData } from '$lib/global';
	import { format } from 'timeago.js';
	import { DIR } from '$lib/config.js';
	import { handleRegister, handleRequest } from '$lib/services/services';
	import { image, user } from '$lib/stores';

	export let description: boolean;

	async function changeDescription(this: HTMLFormElement) {
		description = false;

		handleRequest(this).catch(err => console.log(err.message));
	}
	
	async function handleLike(type: string) {
		if ($user) {
			const url = `${DIR}/api/image/${$image.id}/like`;
			const data: ResponseData = await handleRegister(url, type)
				.catch(() => undefined);

			if (data) image.changeLikes(data.likes, data.dislikes);
		}
	}

	async function handleFavotite(type: string) {
		if ($user) {
			const url = `${DIR}/api/image/${$image.id}/favorite`;
			const data: ResponseData = await handleRegister(url, type)
				.catch(() => undefined);

			if (data) image.changeFavorite(data.favorite);
		}
	}
</script>

<slot />
<div id="image-author">
	<picture>
		<a href="/user/{$image?.author}">
			<img
				src="{DIR}/uploads/avatars/{$image?.avatar ?? 'default.png'}"
				alt="{$image?.author}"
			>
		</a>
	</picture>
	<div>
		<a href="/user/{$image?.author}">
			{$image?.author}
		</a>
		<p>{$image?.views} views &#x25CF; {format($image?.createdAt)}</p>
	</div>
</div>
<picture id="image-content">
	<img src="{DIR}/uploads/{$image?.filename}" alt="{$image?.title}">
</picture>
<div id="image-description">
	{#if description}
		<form
			action="{DIR}/api/image/{$image.id}/description"
			method="POST"
			on:submit|preventDefault={changeDescription}
		>
			<textarea
				id="edit"
				name="description"
				rows="1"
				spellcheck="false"
				autocomplete="off"
				maxlength="4200"
				bind:value={$image.description}
			></textarea>
			<button on:click|preventDefault={() => description = false}>
				Cancel
			</button>
			<button class="blue">
				Send
			</button>
		</form>
		{:else}
		{@html $image.description}
	{/if}
</div>
<div id="image-stats">
	<button on:click={() => handleLike('like')}>
		<i
			class="fa-solid fa-thumbs-up"
			class:selected={$image.likes?.includes($user?.username ?? '')}
		></i>
		{$image.likes?.length}
	</button>
	<button on:click={() => handleLike('dislike')}>
		<i
			class="fa-solid fa-thumbs-down"
			class:selected={$image.dislikes?.includes($user?.username ?? '')}
		></i>
		{$image.dislikes?.length}
	</button>
	<button on:click={() => handleFavotite('favorite')}>
		<i
			class="fa-solid fa-star"
			class:selected={$image.favorites?.includes($user?.username ?? '')}
		></i>
		{$image.favorites?.length}
	</button>
</div>

<style lang="postcss">
	#image-author {
		@apply flex content-center p-1.5 gap-x-2.5;

		& picture {
			@apply flex-none w-12 h-12;
		}

		& img {
			box-shadow: 0 0 2px #666666;
			@apply w-full h-full rounded-full object-scale-down;
		}

		& div {
			@apply flex flex-col justify-between w-full py-1;
		}

		& div a {
			@apply w-min text-[20px] font-semibold;
		}
	}

	#image-content {
		container-type: inline-size;
		@apply w-full;

		& img {
			@apply w-auto max-w-[768px] m-auto;
		}

		@container (width < 768px) {
			& img {
				@apply w-full;
			}
		}
	}

	#image-description {
		@apply p-5 break-words text-center;

		& form {
			@apply flex flex-wrap justify-center gap-2.5;
		}

		& textarea {
			border-bottom: 2px solid #666666;
			scrollbar-width: none;
			@apply w-full h-fit p-2.5 break-words text-center;
		}

		& button {
			@apply w-[100px] py-2 rounded-md bg-[#d33535] font-bold text-white [&.blue]:bg-[#4d4adb];
		}
	}

	#image-stats {
		@apply flex items-center justify-end h-14 pr-[30px] bg-[#5383d3] text-white gap-[60px];

		& button {
			@apply flex items-center gap-1.5 cursor-auto;
		}

		& i {
			@apply cursor-pointer [&.selected]:text-black;
		}
	}
</style>
