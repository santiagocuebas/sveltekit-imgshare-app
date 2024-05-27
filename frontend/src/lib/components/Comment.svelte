<script lang="ts">
	import type { IComment } from "$lib/types/global";
	import { format } from "timeago.js";
	import axios from "$lib/axios";
  import { clickOutside, catchLike, handleForm } from "$lib/services";
	import { user } from '$lib/stores';
	import { Method, Score, UserRole } from "$lib/types/enums";

	export let comment: IComment;
	export let comments: IComment[];

	let input: HTMLElement;
	let visible = false;
	let editable = false;
	let description = comment.comment;

	async function focusComment() {
		editable = true;
		visible = false;
		input.focus();
	}

	async function cancelComment() {
		editable = false;
		description = comment.comment;
		input.blur();
	}

	async function editComment(this: HTMLFormElement) {
		editable = false;

		const data = await handleForm(this)
			.then(() => true)
			.catch(() => false);

		if (data) {
			comment.edit = true;
			comment.comment = description;
		} else description = comment.comment;
	}

	async function handleLike(score: string) {
		if (!$user) return;

		const data = await axios({
			method: Method.POST,
			url:`/comment/${comment.id}/score?score=${score}`
		}).then(() => true)
			.catch(() => false);

		if (data) [comment.likes, comment.dislikes] = catchLike([comment.likes, comment.dislikes], score, $user.username);
	}
	
	async function deleteComment() {
		visible = false;

		const data = await axios({ method: Method.DELETE, url: `/comment/${comment.id}` })
			.then(() => true)
			.catch(() => false);

		if (data) comments = comments.filter(({ id }) => id !== comment.id);
	}
</script>

<div class="comment">
	<picture class="avatar-comment">
		<a href="/user/{comment.author}">
			<img src={comment.avatar} alt={comment.author}>
		</a>
	</picture>
	<div class="author-comment">
		<a href="/user/{comment.author}">{comment.author}</a>
		&#x25CF;
		<p>{format(comment.createdAt)}</p>
		{#if comment.edit}
			<p class="disabled">(edit)</p>
		{/if}
	</div>
	{#if editable}
		<form
			class="form-comment"
			action="/comment/{comment.id}/edit"
			method={Method.POST}
			on:submit|preventDefault={editComment}
		>
			<input
				type="text"
				name="comment"
				spellcheck="false"
				autocomplete="off"
				maxlength="4200"
				bind:value={description}
				bind:this={input}
			>
			<button class="red" on:click|preventDefault={cancelComment}>
				<i class="fa-solid fa-cancel"></i>
				Cancel
			</button>
			<button disabled={!description.length}>
				<i class="fa-solid fa-check"></i>
				Done
			</button>
		</form>
		{:else}
		<div class="content-comment">
			{comment.comment}
		</div>
	{/if}
	<div class="stats-comment">
		<button on:click={() => handleLike(Score.LIKE)}>
			<i
				class="fa-solid fa-thumbs-up"
				class:selected={comment.likes.includes($user?.username ?? '')}
			></i>
			{comment.likes.length}
		</button>
		<button on:click={() => handleLike(Score.DISLIKE)}>
			<i
				class="fa-solid fa-thumbs-up"
				class:selected={comment.dislikes.includes($user?.username ?? '')}
			></i>
			{comment.dislikes.length}
		</button>
	</div>
	<div class="options-comment">
		{#if $user && ($user.username === comment.author || $user.username === comment.receiver || $user.role !== UserRole.EDITOR)}
			<button on:click={() => visible = !visible}>
				<i class="fa-solid fa-ellipsis-vertical fa-lg"></i>
			</button>
			{#if visible}
			<ul use:clickOutside on:outclick={() => setTimeout(() => visible = false)}>
				{#if ($user.username === comment.author)}
					<li role="none" on:click={focusComment}>
						<i class="fa-solid fa-pen"></i>
						Edit
					</li>
				{/if}
				<li role="none" on:click={deleteComment}>
					<i class="fa-solid fa-square-minus"></i>
					Delete
				</li>
			</ul>
			{/if}
		{/if}
	</div>
</div>

<style lang="postcss">
	.comment {
		grid-template-columns: 40px 1fr 40px;
		grid-auto-rows: min-content;
		border-bottom: 2px solid #333333;
		@apply grid relative pb-2.5 gap-x-2.5 gap-y-1.5;

		&:hover .options-comment > button {
			@apply block;
		}
	}

	.avatar-comment {
		grid-row: 1 / span 3;
		@apply w-10 h-10;

		& img {
			box-shadow: 0 0 2px #666666;
			@apply w-full h-full rounded-full object-cover;
		}
	}
	
	.author-comment {
		@apply flex w-full gap-1 [&_a]:font-semibold [&_.disabled]:text-[#777777];
	}

	.form-comment {
		@apply flex flex-wrap justify-end gap-2.5;

		& input {
			border-bottom: 1px solid #888888;
			@apply w-full py-1;
		}

		& button {
			@apply flex items-center justify-evenly w-[100px] py-1.5 rounded bg-[#383be6] font-semibold text-white [&.red]:bg-[#e93e3e];

			&[disabled] {
				@apply bg-[#dddddd] text-[#888888] cursor-auto;
			}
		}
	}

	.content-comment {
		@apply w-full min-h-[35px] break-words;
	}

	.stats-comment {
		@apply flex gap-1.5;

		& button {
			@apply flex items-center gap-1.5 [&_.selected]:text-[#777777];
		}
	}

	.options-comment {
		grid-column: 3 / span 1;
		grid-row: 1 / span 3;

		& button {
			@apply hidden w-10 h-10 ml-auto rounded-full bg-white hover:bg-[#cccccc];
		}

		& ul {
			box-shadow: 0 0 1px 2px #666666;
			@apply flex absolute flex-col right-0 top-10 py-1.5 rounded bg-white z-[200];
		}

		& li {
			@apply flex items-center justify-start w-[180px] py-1 px-5 font-semibold cursor-pointer gap-5 hover:bg-[#cccccc];
		}
	}
</style>
