<script lang="ts">
	import { format } from 'timeago.js';
  import { UserRole } from '$lib/enums.js';
  import type { IUser, IImage } from '$lib/global.js';
	import { handleRequest } from '$lib/services/services';

	export let image: IImage;
	export let user: IUser;
	export let visible: boolean;
	export let description: boolean;

	async function changeDescription(this: HTMLFormElement) {
		description = false;

		handleRequest(this);
	}

	async function cancelDescription() {
		description = false;
	}
</script>

<div class="image-box">
	{#if user && (user.username === image.author || user.role !== UserRole.EDITOR)}
		<div class="image-edit">
			<i
				class="fa-solid fa-ellipsis"
				on:mousedown={() => visible = !visible}
			></i>
			<slot></slot>
		</div>
	{/if}
	<h2 class="title">
		<i class="fa-solid fa-image title-icon"></i>
		{image.title}
	</h2>
	<div class="image-author">
		<a class="image-author-link" href="/user/{image.author}">
			<img
				class="image-author-avatar"
				src="http://localhost:4200/uploads/avatars/{image.avatar}"
				alt=""
			>
		</a>
		<a class="image-author-username" href="/user/{image.author}">
			{image.author}
		</a>
		<p>
			{image.views} views &#x25CF; {format(image.createdAt)}
		</p>
	</div>
	<img
		class="image-content"
		src="http://localhost:4200/uploads/{image.filename}"
		alt=""
	>
	<div class="image-description">
		{#if description}
			<form
				class="image-form"
				action="http://localhost:4200/api/image/{image.id}/description"
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
					bind:value={image.description}
				></textarea>
				<button on:click|preventDefault={cancelDescription}>
					Cancel
				</button>
				<button class="blue">
					Send
				</button>
			</form>
			{:else}
			{@html image.description}
		{/if}
	</div>
	<slot name='assessment'></slot>
</div>

<style>
  .image-box {
		grid-column: 1 / span 4;
		display: grid;
		grid-auto-rows: min-content;
		background-color: #ffffff;
		box-shadow: 0 2px 10px #666666;
	}

	.image-edit {
		display: flex;
		position: relative;
		justify-content: flex-end;
		align-items: center;
		height: 30px;
		padding: 0 10px;
		background-color: #444444;
	}

	.image-edit i {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 24px;
		height: 16px;
		margin-left: auto;
		padding: 0;
		border: none;
		color: #ffffff;
		cursor: pointer;
	}

	.image-edit i:hover {
		background-color: #666666;
	}

	.image-author {
		display: grid;
		grid-template-columns: 48px 1fr;
		grid-auto-rows: min-content;
		align-content: center;
		height: min-content;
		padding: 6px;
		column-gap: 10px;
	}

	.image-author-link {
		grid-row: 1 / span 2;
		width: 48px;
		height: 48px;
	}

	.image-author-avatar {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		box-shadow: 0 0 1px 1px #666666;
		object-fit: cover;
	}

	.image-author-username {
		height: min-content;
		font-size: 20px;
		font-weight: 700;
	}

	.image-content {
		width: 100%;
		max-width: 768px;
		height: auto;
		margin: 0 auto;
	}

	.image-description {
		padding: 20px;
		overflow-wrap: anywhere;
		text-align: center;
	}

	.image-form {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 10px;
	}

	.image-form textarea {
		width: 100%;
		height: fit-content;
		padding: 10px;
		border: none;
		outline: none;
		border-bottom: 2px solid #666666;
		overflow-wrap: anywhere;
		text-align: center;
		scrollbar-width: none;
	}

	.image-form button {
		width: 100px;
		padding: 8px 0;
		border: none;
		border-radius: 6px;
		background-color: #d33535;
		font-weight: 700;
		color: #ffffff;
		cursor: pointer;
	}

	.image-form .blue {
		background-color: #4d4adb;
	}

	@media (max-width: 1040px) {
		.image-box {
			grid-column: 1 / span 6;
		}
	}
</style>
