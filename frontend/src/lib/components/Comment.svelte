<script lang="ts">
	import axios from "axios";
	import { format } from "timeago.js";
	import type { IComment, IUser } from "$lib/global.js";
	import { UserRole } from "$lib/enums.js";
	import { clickOutside } from "$lib/services/click-outside";
	import { handleRequest } from "$lib/services/services";

	export let comment: IComment;
	export let comments: IComment[];
	export let user: IUser;
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
		comment.edit = true;
		comment.comment = description;

		handleRequest(this);
	}

	async function deleteComment() {
		visible = false;
		comments = comments.filter(({ id }) => id !== comment.id);

		await axios({
			method: 'DELETE', 
			url: `http://localhost:4200/api/comment/${comment.id}`,
			withCredentials: true
		});
	}
</script>

<div class="comment">
	<a class="comment-avatar" href="/user/{comment.author}">
		<img src="http://localhost:4200/uploads/avatars/{comment.avatar}" alt="">
	</a>
	<div class="comment-author">
		<a href="/user/{comment.author}">{comment.author}</a>
		&#x25CF;
		<p>{format(comment.createdAt)}</p>
		{#if comment.edit}
		<p class="grey">(edit)</p>
		{/if}
	</div>
	{#if editable}
		<form
			class="comment-form"
			action="http://localhost:4200/api/comment/{comment.id}/edit"
			method="POST"
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
			<button
				class="{description.length > 0 ? '' : 'disabled'}"
				disabled={!(description.length > 0)}
			>
				<i class="fa-solid fa-check"></i>
				Done
			</button>
		</form>
		{:else}
		<div class="comment-content">
			{comment.comment}
		</div>
	{/if}
	<div>
		<slot></slot>
	</div>
	<div class="comment-options">
		{#if user && (user.username === comment.author || user.username === comment.receiver || user.role !== UserRole.EDITOR)}
			<button class="comment-button" on:click={() => visible = !visible}>
				<i class="fa-solid fa-ellipsis-vertical fa-lg"></i>
			</button>
			{#if visible}
			<ul use:clickOutside on:outclick={() => visible = false}>
				{#if (user.username === comment.author)}
				<li on:mousedown={focusComment}>
					<i class="fa-solid fa-pen"></i>
					Edit
				</li>
				{/if}
				<li on:mousedown={deleteComment}>
					<i class="fa-solid fa-square-minus"></i>
					Delete
				</li>
			</ul>
			{/if}
		{/if}
	</div>
</div>

<style>
	.comment {
		display: grid;
		position: relative;
		grid-template-columns: 40px 1fr 40px;
		grid-auto-rows: min-content;
		padding-bottom: 10px;
		border-bottom: 2px solid #333333;
		column-gap: 10px;
		row-gap: 5px;
	}

	.comment-avatar {
		grid-row: 1 / span 3;
		width: 40px;
		height: 40px;
	}

	.comment-avatar img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		box-shadow: 0 0 1px 1px #666666;
		object-fit: cover;
	}

	.comment div {
		display: flex;
		gap: 5px;
	}

	.comment-author a {
		font-weight: 700;
	}

	.comment-content {
		width: 100%;
		min-height: 35px;
		overflow-wrap: anywhere;
	}

	.comment-form {
		display: flex;
		justify-content: flex-end;
		flex-wrap: wrap;
		gap: 10px;
	}

	.comment-form input {
		width: 100%;
		padding: 4px 0;
		border: none;
		border-bottom: 1px solid #888888;
		outline: none;
	}

	.comment-form button {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		width: 100px;
		padding: 6px 0;
		border: none;
		border-radius: 3px;
		background-color: #383be6;
		font-weight: 600;
		color: #ffffff;
		cursor: pointer;
	}

	.comment-form .red {
		background-color: #e93e3e;
	}

	.comment-form .disabled {
		background-color: #dddddd;
		color: #888888;
		cursor: auto;
	}

	i {
		cursor: pointer;
	}

	.comment-options {
		grid-column: 3 / span 1;
		grid-row: 1 / span 3;
	}

	.comment-button {
		display: none;
		width: 40px;
		height: 40px;
		margin-left: auto;
		border: none;
		border-radius: 50%;
		background-color: #ffffff;
		cursor: pointer;
	}

	.comment-button:hover {
		background-color: #cccccc;
	}

	.comment:hover .comment-options > button {
		display: block;
	}

	.comment-options ul {
		display: grid;
		position: absolute;
		right: 0;
		margin-top: 40px;
		padding: 5px 0;
		border-radius: 4px;
		background-color: #ffffff;
		box-shadow: 0 0 1px 2px #666666;
		z-index: 200;
	}

	.comment-options li {
		display: flex;
		align-items: center;
		justify-content: start;
		width: 180px;
		padding: 5px 20px;
		font-weight: 700;
		cursor: pointer;
		gap: 20px;
	}

	.comment-options li:hover {
		background-color: #cccccc;
	}

	.grey {
		color: #777777;
	}
</style>
