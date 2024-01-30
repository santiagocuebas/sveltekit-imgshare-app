<script lang="ts">
	import type { IComment } from '$lib/global';
	import { Method } from '$lib/enums';
	import { handleForm } from "$lib/services";
  import { user } from '$lib/stores';

	export let id: string | undefined;
	export let comments: IComment[];

	let input = '';
	let visible = false;
	let inputElement: HTMLInputElement;

	const changeVisibility = (value: boolean) => {
		input = '';
		inputElement.blur();
		visible = value;
	};

	async function handleSubmit(this: HTMLFormElement) {
		const data: { comment: IComment | null } = await handleForm(this)
			.catch(() => {
				return { comment: null }
			});

		if (data.comment) comments = [data.comment, ...comments];

		changeVisibility(false);
	}
</script>

<div>
	<h2 class="title">
		<i class="fa-regular fa-copy title-icon"></i>
		Post
	</h2>
	<form
		action="/image/{id}/comment"
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
				<button on:click={() => changeVisibility(false)}>
					Cancel
				</button>
				<button class="blue" disabled={!input.length}>
					Comment
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
		@apply flex ml-auto gap-2.5;

		& button {
			@apply w-[100px] h-10 bg-white font-bold hover:bg-[#dddddd];

			&[disabled] {
				@apply bg-[#dddddd] text-[#888888] cursor-auto;
			}

			&.blue {
				@apply bg-[#5383d3] text-white hover:bg-[#4373c3];
			}
		}
	}
</style>
