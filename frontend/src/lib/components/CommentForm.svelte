<script lang="ts">
  import axios from "axios";

	export let imageId: string;
	export let avatar: string;
	export let comments: any;

	let input = '';
	let visible = false;
	let inputElement: HTMLInputElement;

	const changeVisibility = (value: boolean) => {
		input = '';
		inputElement.blur();
		visible = value;
	};

	async function handleSubmit(this: HTMLFormElement) {
		const data = await axios({
			method: this.method,
			url: this.action,
			withCredentials: true,
			data: this
		}).then(res => res.data);

		if (data.comment) {
			comments = [data.comment, ...comments];
		}

		changeVisibility(false);
	}
</script>

<div class="comment-form">
	<h2 class="title">
		<i class="fa-regular fa-copy title-icon"></i>
		Post
	</h2>
	<form
		action="http://localhost:4200/api/image/{imageId}/comment"
		method="POST"
		on:submit|preventDefault={handleSubmit}
	>
		<img src="http://localhost:4200/uploads/avatars/{avatar}" alt="">
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
		<div class="comment-buttons">
			<button on:click={() => changeVisibility(false)}>
				Cancel
			</button>
			<button
				class="blue {input.length > 0 ? '' : 'disabled'}"
				disabled={!(input.length > 0)}
			>
				Comment
			</button>
		</div>
		{/if}
	</form>
</div>

<style>
	.comment-form {
		width: 100%;
		background-color: #ffffff;
		box-shadow: 0 2px 10px #666666;
	}

	form {
		display: grid;
		grid-template-columns: 40px 1fr;
		grid-auto-rows: min-content;
		padding: 10px;
		gap: 10px;
	}

	img {
		grid-row: 1 / span 2;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		box-shadow: 0 0 1px 1px #666666;
		object-fit: cover;
	}

	input {
		width: 100%;
		height: min-content;
		padding: 4px 0;
		border: none;
		outline: none;
		border-bottom: 1px solid #888888;
	}

	input:focus {
		border-bottom: 2px solid #333333;
	}

	.comment-buttons {
		display: flex;
		margin-left: auto;
		gap: 10px;
	}

	button {
		width: 100px;
		height: 40px;
		border: none;
		background-color: #ffffff;
		font-weight: 700;
		cursor: pointer;
	}

	button:hover {
		background-color: #dddddd;
	}

	.blue {
		background-color: #5383d3;
		color: #ffffff;
	}

	.blue:hover {
		background-color: #4373c3;
	}

	.disabled {
		background-color: #dddddd;
		color: #888888;
		cursor: auto;
	}
</style>
