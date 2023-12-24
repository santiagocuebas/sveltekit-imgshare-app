<script lang="ts">
	import type { PageData } from "./$types";
  import type { ILink, IMessage, ResponseData } from "$lib/global.js";
  import axios from "axios";
	import { DIR } from '$lib/config.js';
  import { ButtonText, SettingText } from "$lib/dictionary";
	import { Settings } from '$lib/enums.js';
	import { handleRequest } from "$lib/services/services";
	import { BoxSettings, Alert } from "$lib/components";
	
	export let data: PageData;

	const validExt = ['image/jpeg', 'image/png', 'image/gif'];
	let links: ILink[] = [];
	let settingChoise = '';
	let visible = false;
	let alert = false;
	let title: string;
	let url: string;
	let className: string;
	let message: string | IMessage;

	$: ({ username, avatar, description } = data.user);

	const setSettingChoice = (value: string) => {
		return settingChoise !== value ? value : '';
	};

	const handleClick = (e: Event) => {
		e.preventDefault();
		alert = true;
	};
	
  const handleDelete = async () => {
    const data: ResponseData = await axios({
      method: 'DELETE',
      url: `${DIR}/api/settings/deletelink`,
      withCredentials: true,
      data: { title, url }
    }).then(res => res.data);

    if (data.change) links = links.filter(link => link.title !== title);
  };

	function handleImage(this: HTMLInputElement) {
		const reader = new FileReader();
		const [file] = this.files ?? [];

		reader.addEventListener('load', ({ target }) => {
			avatar = target?.result as string ?? avatar;
		}, false);

		if (file && file.size < 2 * 1e7 && validExt.includes(file.type)) {
			reader.readAsDataURL(file);
		}
	}

	async function handleSubmit(this: HTMLFormElement) {
		const data = await handleRequest(this)
			.catch(err => {
				console.log(err.message);
				return { class: 'error-settings', message: 'Logged Error' };
			});

		if (data.class === 'success-settings') {
			if (this.id === Settings.AVATAR) {
				const navAvatar = document.getElementById('nav-avatar') as HTMLImageElement;
				navAvatar.src = `${DIR}/uploads/avatars/${data.filename}`;
			} else if (this.id === Settings.PASSWORD) {
				for (const child of this.children as any) {
					child.value = '';
				}
			} else if (this.id === Settings.LINKS) {
				links = [...links, { title, url }];
				title = '';
				url = '';
			}
		}

		className = data.class;
		message = data.message;
		visible = true;

		if (data.class === 'success-settings') {
			setTimeout(() => visible = false, 3000);
		}
	}
</script>

{#if visible}
	<BoxSettings
		className={className}
		message={message}
		on:click={() => visible = false}
	/>
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
						action="{DIR}/api/settings/{value}"
						method={value !== Settings.DELETE ? 'POST' : 'DELETE'}
						on:submit|preventDefault={handleSubmit}
					>
						{#if value === Settings.AVATAR}
							<div>
								Change the avatar:
							</div>
							<label class="settings-avatar">
								<input type="file" name="image" on:change={handleImage}>
								<img src="{DIR}/uploads/avatars/{avatar}" alt={username}>
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
								bind:value={description}
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
							>
							<label for="newPassword">
								Enter the new password:
							</label>
							<input
								type="password"
								name="password"
								placeholder="New Password"
							>
							<label for="confirmPassword">
								Confirm the new password:
							</label>
							<input
								type="password"
								name="confirmPassword"
								placeholder="Confirm Password"
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
								bind:value={title}
							>
							<label for="url">
								Enter the URL:
							</label>
							<input
								type="url"
								name="url"
								placeholder="URL"
								maxlength="4000"
								bind:value={url}
							>
						{/if}
						<button
							class:delete-user={value === Settings.DELETE}
							on:click={value === Settings.DELETE ? handleClick : () => {}}
						>{ButtonText[value]}</button>
					</form>
				{/if}
				{#if value === Settings.LINKS && settingChoise === Settings.LINKS && links.length}
					<ul>
						{#each links as { title, url } (title)}
							<li title={url}>
								{title}
								<button on:click|preventDefault={handleDelete}>
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
			@apply p-5 text-[40px] font-medium;
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
				@apply py-2 px-2.5 rounded-full bg-white leading-none hover:bg-[#dddddd];

				& i {
					@apply text-[32px] font-light;
				}
			}
		}

		& form {
			@apply flex flex-col gap-y-2;

			& .settings-avatar {
				outline: 1px solid #bbbbbb;
				@apply w-[300px] h-[300px] m-auto rounded-full cursor-pointer;

				& img {
					@apply w-full h-full object-cover;
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
