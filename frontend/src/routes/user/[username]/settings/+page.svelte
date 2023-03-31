<script lang="ts">
	import type { PageData } from "./$types";
  import type { IMessage } from "$lib/global.js";
	import { DIR } from '$lib/config.js';
	import Option from "$lib/components/OptionSettings.svelte";
	import Link from '$lib/components/Link.svelte';
  import BoxSettings from "$lib/components/BoxSettings.svelte";
  import Alert from "$lib/components/Alert.svelte";
	import { handleImage } from "$lib/services/handle-image";
	import { handleRequest } from "$lib/services/services";

	export let data: PageData;
	let links = JSON.parse(data.user.links);
	let visible = false;
	let alert = false;
	let title: string;
	let url: string;
	let className: string;
	let message: string | IMessage;

	function updatedBoxSettings(data: any) {
		className = data.class;
		message = data.message;
		visible = true;

		if (data.class === 'success-settings') {
			setTimeout(() => {
				visible = false;
			}, 2000);
		}
	}

	async function handleAvatar(this: HTMLFormElement) {
		const data = await handleRequest(this);

		if (data.class === 'success-settings') {
			const navAvatar = document.getElementById('nav-avatar') as HTMLImageElement;
			navAvatar.src = `${DIR}/uploads/avatars/${data.filename}`;
		}

		updatedBoxSettings(data);
	}

	async function handleDescription(this: HTMLFormElement) {
		const data = await handleRequest(this);
		updatedBoxSettings(data);
	}

	async function handlePassword(this: HTMLFormElement) {
		const data = await handleRequest(this);

		if (data.class === 'success-settings') {
			for (const child of this.children as any) {
				child.value = '';
			}
		}

		updatedBoxSettings(data);
	}

	async function handleLink(this: HTMLFormElement) {
		const data = await handleRequest(this);

		if (data.class === 'success-settings') {
			links = [...links, { title, url }];
			title = '';
			url = '';
		}

		updatedBoxSettings(data);
	}
</script>

{#if visible}
	<BoxSettings className={className} message={message} bind:visible={visible} />
{/if}
{#if alert}
	<Alert bind:alert={alert} />
{/if}
<div class="settings-container">
	<h1>
		Settings
	</h1>
	<div class="settings-options">
		<Option title='Set Avatar'>
			<form
				id='avatar'
				action="{DIR}/api/settings/avatar"
				method="POST"
				on:submit|preventDefault={handleAvatar}
			>
				<div>Change the avatar:</div>
				<label
					class="settings-avatar"
					style="background-image: url({DIR}/uploads/avatars/{data.user.avatar});"
				>
					<input
						type="file"
						name="image"
						on:change={handleImage}
					>
				</label>
				<button>Send</button>
			</form>
		</Option>
		<span></span>
		<Option title='Set Description'>
			<form
				id='description'
				action="{DIR}/api/settings/description"
				method="POST"
				on:submit|preventDefault={handleDescription}
			>
				<label for="description">Change the description:</label>
				<textarea
					id="description"
					name="description"
					rows="5"
					spellcheck="false"
					autocomplete="off"
					maxlength="4200"
					bind:value={data.user.description}
					required
				></textarea>
				<button>Accept</button>
			</form>
		</Option>
		<span></span>
		<Option title='Change Password'>
			<form
				id='password'
				action="{DIR}/api/settings/password"
				method="POST"
				on:submit|preventDefault={handlePassword}
			>
				<label for="actPassword">Enter the actual password:</label>
				<input
					type="password"
					name="actPassword"
					placeholder="Actual Password"
					minlength="8"
					maxlength="40"
					required
				>
				<label for="newPassword">Enter the new password:</label>
				<input
					type="password"
					name="password"
					placeholder="New Password"
					minlength="8"
					maxlength="40"
					required
				>
				<label for="confirmPassword">Confirm the new password:</label>
				<input
					type="password"
					name="confirmPassword"
					placeholder="Confirm Password"
					minlength="8"
					maxlength="40"
					required
				>
				<button>Send</button>
			</form>
		</Option>
		<span></span>
		<Option title='Register Link'>
			<form
				id='link'
				action="{DIR}/api/settings/link"
				method="POST"
				on:submit|preventDefault={handleLink}
			>
				<label for="title">Enter the title:</label>
				<input
					type="text"
					name="title"
					placeholder="Title"
					maxlength="20"
					bind:value={title}
					required
				>
				<label for="url">Enter the URL:</label>
				<input
					type="url"
					name="url"
					placeholder="URL"
					maxlength="4000"
					bind:value={url}
					required
				>
				<button>Send</button>
			</form>
			{#if links.length > 0}
			<div class="settings-delete-links">
				{#each links as link (link.title)}
					<Link title={link.title} url={link.url} bind:links={links} />
				{/each}
			</div>
			{/if}
		</Option>
		<span></span>
		<Option title='Delete User'>
			<form
				id='deleteuser'
				action="{DIR}/api/settings/deleteuser"
				method="DELETE"
			>
				<button
					class="delete-user"
					on:click|preventDefault={() => alert = true}
				>
					Delete User
				</button>
			</form>
		</Option>
	</div>
</div>

<style>
	.settings-container {
		width: 600px;
		height: min-content;
		border-radius: 16px;
		background-color: #ffffff;
		box-shadow: 0 2px 10px #666666;
	}

	h1 {
		padding: 20px;
		border-bottom: 2px solid #333333;
		font-size: 40px;
		font-weight: 500;
	}

	.settings-options {
		width: 100%;
		display: grid;
		grid-auto-columns: 100%;
		grid-auto-rows: min-content;
	}

	span {
		width: 100%;
		height: 1px;
		background-color: #666666;
	}

	form {
		display: grid;
		width: 100%;
		row-gap: 7px;
	}

	textarea {
		padding: 10px;
		border: none;
		border-radius: 6px;
		outline: 1px solid #bbbbbb;
	}

	input {
		padding: 10px;
		border: none;
		outline: 1px solid #bbbbbb;
		border-radius: 6px;
	}

	input[type="file"] {
		display: none;
	}

	.settings-avatar {
		justify-self: center;
		width: 300px;
		height: 300px;
		outline: 1px solid #bbbbbb;
		border-radius: 50%;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		cursor: pointer;
	}

	button {
		justify-self: end;
		width: min-content;
		padding: 8px 24px;
		border: none;
		outline: none;
		border-radius: 8px;
		background-color: #129e35;
		font-size: 20px;
		font-weight: 700;
		color: #ffffff;
		cursor: pointer;
	}

	button:hover {
		background-color: #028e25;
	}

	.settings-delete-links {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		padding: 6px;
		gap: 7px;
	}

	.delete-user {
		justify-self: center;
		width: fit-content;
		margin: 5px 0;
		padding: 12px 24px;
		background-color: #c91a1a;
	}

	.delete-user:hover {
		background-color: #b90a0a;
	}
</style>
