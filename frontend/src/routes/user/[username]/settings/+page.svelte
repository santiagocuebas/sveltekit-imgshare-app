<script lang="ts">
  import type {
		ILink,
		IKeys,
		ResponseSettings,
		SettingsProps,
		DisabledButton
	} from "$lib/global.js";
  import { onMount } from "svelte";
	import axios from "$lib/axios";
	import { BoxSettings, Alert } from "$lib/components";
  import { ButtonText, SettingText } from "$lib/dictionary";
	import { Method, Settings } from '$lib/enums';
	import {
		setSettingsProps,
		isDisabledButton,
    loadImage,
    handleForm
	} from "$lib/services";
  import { user } from "$lib/stores";

	let settingChoise = '';
	let alert = false;
	let message: string | IKeys<string> | null;
	let settingsProps: SettingsProps;
	let isDisabled: DisabledButton;

	const setSettingChoice = (value: string) => {
		return settingChoise !== value ? value : '';
	};

	const handleClick = (e: Event) => {
		e.preventDefault();
		alert = true;
	};

	async function handleDrop(e: DragEvent) {
		if (e.dataTransfer) {
			settingsProps.avatar = await loadImage(e.dataTransfer.files[0]);
			e.dataTransfer.items.clear();
		}
	}

	async function handleImage(this: HTMLInputElement) {
		if (this.files) settingsProps.avatar = await loadImage(this.files[0]);
	}
	
  const handleDelete = async (link: ILink) => {
		const data: ResponseSettings = await axios({
			method: Method.DELETE,
			url: `/settings/deletelink`,
			data: link
		}).then(res => res.data)
			.catch(err => {
				console.log(err.message);
				return { message: { log: 'Logged Error' } };
			});

		if (typeof data.message === 'string') user.removeLink(link);

		message = data.message;

		if (typeof message === 'string') setTimeout(() => message = null, 3000);
  };

	async function handleSubmit(this: HTMLFormElement) {
		const data: ResponseSettings = await handleForm(this)
			.catch(err => {
				console.log(err.message);
				return { message: { log: 'Logged Error' } };
			});

		if (typeof data.message === 'string') {
			if (this.id === Settings.AVATAR) user.changeAvatar(data.filename);
			else if (this.id === Settings.DESCRIPTION) {
				user.changeDescription(settingsProps.description);
			} else if (this.id === Settings.LINKS) user.addLink(settingsProps.link);

			if ($user) {
				settingsProps = setSettingsProps($user);
				isDisabled = isDisabledButton($user);
			}
		}

		message = data.message;

		if (typeof message === 'string') setTimeout(() => message = null, 3000);
	}

	onMount(() => {
		if ($user) {
			settingsProps = setSettingsProps($user);
			isDisabled = isDisabledButton($user);
		}
	});
</script>

{#if message}
	<BoxSettings message={message} on:click={() => message = null} />
{/if}

{#if alert}
	<Alert bind:alert={alert} />
{/if}

<div id="settings-container">
	<h1>
		Settings
	</h1>
	<div id="settings-options">
		{#each Object.values(Settings) as value}
			<div class="settings-option">
				<h2>
					{SettingText[value]}
					<button on:click={() => settingChoise = setSettingChoice(value)}>
						<i class="fa-solid fa-plus"></i>
					</button>
				</h2>
				{#if settingChoise === value}
					<form
						id={value}
						action="/settings/{value}"
						method={value !== Settings.DELETE ? Method.POST : Method.DELETE}
						on:submit|preventDefault={handleSubmit}
					>
						{#if value === Settings.AVATAR}
							<div>
								Change the avatar:
							</div>
							<label class="settings-avatar" on:drop|preventDefault={handleDrop}>
								<input type="file" name="image" on:change={handleImage}>
								<img src={settingsProps.avatar} alt={$user?.username}>
							</label>
						{/if}
						{#if value === Settings.DESCRIPTION}
							<label for="description">
								Change the description:
							</label>
							<textarea
								name="description"
								rows="5"
								spellcheck="false"
								autocomplete="off"
								bind:value={settingsProps.description}
							></textarea>
						{/if}
						{#if value === Settings.PASSWORD}
							<label for="actPassword">
								Enter the actual password:
							</label>
							<input
								type="password"
								name="actPassword"
								placeholder="Actual Password"
								autocomplete="off"
								bind:value={settingsProps.password.old}
							>
							<label for="newPassword">
								Enter the new password:
							</label>
							<input
								type="password"
								name="password"
								placeholder="New Password"
								autocomplete="off"
								bind:value={settingsProps.password.new}
							>
							<label for="confirmPassword">
								Confirm the new password:
							</label>
							<input
								type="password"
								name="confirmPassword"
								placeholder="Confirm Password"
								autocomplete="off"
								bind:value={settingsProps.password.confirm}
							>
						{/if}
						{#if value === Settings.LINKS}
							<label for="title">
								Enter the title:
							</label>
							<input
								type="text"
								name="title"
								placeholder="Title"
								bind:value={settingsProps.link.title}
							>
							<label for="url">
								Enter the URL:
							</label>
							<input
								type="url"
								name="url"
								placeholder="URL"
								maxlength="4000"
								bind:value={settingsProps.link.url}
							>
						{/if}
						<button
							class:delete-user={value === Settings.DELETE}
							disabled={!(isDisabled[value](settingsProps[value]))}
							on:click={value === Settings.DELETE ? handleClick : () => {}}
						>{ButtonText[value]}</button>
					</form>
				{/if}
				{#if value === Settings.LINKS && settingChoise === Settings.LINKS && $user?.links.length}
					<ul>
						{#each $user.links as link (link.title)}
							<li title={link.url}>
								{link.title}
								<button on:click|preventDefault={() => handleDelete(link)}>
									<i class="fa-solid fa-xmark fa-lg"></i>
								</button>
							</li>
						{/each}
					</ul>
				{/if}
			</div>
			{#if value !== Settings.DELETE}
				<span></span>
			{/if}
		{/each}
	</div>
</div>

<style lang="postcss">
	#settings-container {
		box-shadow: 0 0 4px #666666;
		@apply w-[600px] h-min rounded-2xl bg-white;

		& h1 {
			border-bottom: 2px solid #333333;
			@apply p-5 text-[40px] font-medium leading-tight;
		}

		& span {
			@apply w-full h-px bg-[#666666];
		}
	}

	#settings-options {
		@apply flex flex-col;
	}

	.settings-option {
		@apply flex flex-col p-5 gap-2.5;

		& h2 {
			@apply flex items-center justify-between text-[32px];

			& button {
				@apply py-2 px-2.5 rounded-full bg-white leading-none hover:bg-[#dddddd] [&_i]:text-[32px] [&_i]:font-light;
			}
		}

		& form {
			@apply flex flex-col gap-y-2;

			& .settings-avatar {
				outline: 1px solid #bbbbbb;
				@apply w-[300px] h-[300px] m-auto rounded-full cursor-pointer;

				& img {
					@apply w-full h-full rounded-full object-cover;
				}
			}

			& input, textarea {
				outline: 1px solid #bbbbbb;
				@apply p-2.5 rounded-md;
			}

			& button {
				@apply flex-none ml-auto py-2 px-6 rounded-lg bg-[#129e35] text-[20px] font-bold text-white hover:bg-[#028e25];

				&.delete-user {
					@apply flex-none m-auto my-1.5 py-3 px-6 bg-[#c91a1a] hover:bg-[#b90a0a];
				}

				&[disabled] {
					@apply bg-[#dddddd] text-[#666666] cursor-auto;
				}
			}
		}

		& ul {
			@apply flex flex-col p-1.5 gap-2;

			& li {
				outline: 1px solid #bbbbbb;
				@apply flex items-center justify-between p-2.5 rounded font-bold;
			}

			& button {
				@apply flex flex-none items-center justify-center w-7 h-7 rounded-full bg-[#d62525] text-white;
			}
		}
	}
</style>
