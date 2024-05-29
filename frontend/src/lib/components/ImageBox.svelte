<script lang="ts">
	import type { IImage } from '$lib/types/global';
	import { format } from 'timeago.js';
	import axios from '$lib/axios';
	import { DIR } from '$lib/config';
	import { catchLike, handleForm } from '$lib/services';
	import { user } from '$lib/stores';
	import { Method, Score } from '$lib/types/enums';

	export let image: IImage | null;
	export let description: boolean;

	$: imageDescription = image?.description;

	async function changeDescription(this: HTMLFormElement) {
		description = false;

		handleForm(this)
			.catch(() => imageDescription = image?.description);
	}
	
	async function handleLike(score: string) {
		if (!image || !$user) return;
	
		const data = await axios({
			method: Method.POST,
			url: `/image/${image.id}/score?score=${score}`
		}).then(() => true)
			.catch(() => false);

		if (data) [image.likes, image.dislikes] = catchLike([image.likes, image.dislikes], score, $user.username);
	}

	async function handleFavotite() {
		if (!image || !$user) return;

		const data = await axios({
			method: Method.POST,
			url: `/image/${image.id}/favorite`
		}).then(() => true)
			.catch(() => false);

		if (data) image.favorites = image.favorites.includes($user.username)
			? image.favorites.filter(username => username !== $user?.username)
			: [$user.username, ...image.favorites];
	}
</script>

<slot />
<h2 class="title">
	<i class="fa-solid fa-image title-icon"></i>
	{image?.title}
</h2>
<div id="image-author">
	<picture>
		<a href="/user/{image?.author}">
			<img src={DIR + '/' + image?.avatar} alt={image?.author}>
		</a>
	</picture>
	<div>
		<a href="/user/{image?.author}">
			{image?.author}
		</a>
		<p>
			{image?.views} views &#x25CF; {format(image?.createdAt ?? Date.now())}
		</p>
	</div>
</div>
<picture id="image-content">
	<img alt={image?.title} src={DIR + '/' + image?.filename}>
</picture>
<div id="image-description">
	{#if description}
		<form
			action="/image/{image?.id}/description"
			method={Method.POST}
			on:submit|preventDefault={changeDescription}
		>
			<textarea
				id="edit"
				name="description"
				rows="1"
				spellcheck="false"
				autocomplete="off"
				maxlength="4200"
				bind:value={imageDescription}
			></textarea>
			<button on:click|preventDefault={() => description = false}>
				Cancel
			</button>
			<button class="blue">
				Send
			</button>
		</form>
		{:else}
		{@html image?.description}
	{/if}
</div>
<div id="image-stats">
	<button on:click={() => handleLike(Score.LIKE)}>
		<i
			class="fa-solid fa-thumbs-up"
			class:selected={image?.likes.includes($user?.username ?? '')}
		></i>
		{image?.likes.length}
	</button>
	<button on:click={() => handleLike(Score.DISLIKE)}>
		<i
			class="fa-solid fa-thumbs-down"
			class:selected={image?.dislikes.includes($user?.username ?? '')}
		></i>
		{image?.dislikes.length}
	</button>
	<button on:click={handleFavotite}>
		<i
			class="fa-solid fa-star"
			class:selected={image?.favorites.includes($user?.username ?? '')}
		></i>
		{image?.favorites.length}
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
			@apply w-full h-full rounded-full object-cover;
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
