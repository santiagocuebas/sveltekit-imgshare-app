<script lang="ts">
	import type { IComment } from '$lib/types/global';
	import { handleForm } from "$lib/services";
  import { user } from '$lib/stores';
	import { Method } from '$lib/types/enums';

	export let id: string | undefined;
	export let comments: IComment[];

	let input = '';
	let visible = false;
	let inputElement: HTMLInputElement;

	const changeVisibility = () => {
		input = '';
		inputElement.blur();
		visible = false;
	};

	async function handleSubmit(this: HTMLFormElement) {
		const data: IComment | null = await handleForm(this)
			.catch(err => {
				console.error(err?.message);
				return null;
			});

		if (data) comments = [data, ...comments];

		changeVisibility();
	}
</script>

<div>
	<h2 class="title">
		<i class="fa-regular fa-copy title-icon"></i>
		Post
	</h2>
	<form
		action="/comment/?id={id}"
		method={Method.POST}
		on:submit|preventDefault={handleSubmit}
	>
		<picture>
			<img src={$user?.avatar} alt={id}>
		</picture>
		<input
			type="text"
			name="comment"
			placeholder="Send a comment..."
			autocomplete="off"
			spellcheck="false"
			bind:value={input}
			bind:this={inputElement}
			on:focus={() => visible = true}
		>
		{#if visible}
			<span>
				<button class="blue" disabled={!input.length}>
					Comment
				</button>
				<button on:click={changeVisibility}>
					Cancel
				</button>
			</span>
		{/if}
	</form>
</div>

<style lang="postcss">
	div {
		box-shadow: 0 0 4px #666666;
		@apply w-full bg-white;
	}

	form {
		grid-template-columns: 40px 1fr;
		grid-auto-rows: min-content;
		@apply grid p-2.5 gap-2.5;
	}

	picture {
		grid-row: 1 / span 2;
		@apply w-10 h-10;
	}

	img {
		box-shadow: 0 0 2px #666666;
		@apply w-full h-full rounded-full object-cover;
	}

	input {
		border-bottom: 1px solid #888888;
		@apply w-full py-1;

		&:focus {
			border-bottom: 2px solid #333333;
		}
	}

	span {
		@apply flex flex-row-reverse ml-auto gap-2.5;

		& button {
			@apply w-[100px] h-10 bg-white font-bold hover:bg-[#dddddd];

			&.blue {
				@apply bg-[#5383d3] text-white hover:bg-[#4373c3];
			}

			&[disabled] {
				@apply bg-[#dddddd] text-[#888888] cursor-auto;
			}
		}
	}
</style>
