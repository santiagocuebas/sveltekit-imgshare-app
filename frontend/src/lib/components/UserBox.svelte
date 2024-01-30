<script lang="ts">
  import { afterUpdate } from "svelte";
	import { format } from 'timeago.js';
	import axios from "$lib/axios";
  import { Method, UserRole } from "$lib/enums";
	import { clickOutside, handleForm } from "$lib/services";
	import { user as properUser, selectUser as user } from '$lib/stores';
	
	export let show: boolean;
	export let alert: boolean;
	export let text: string;

	let visible = false;
	let description = $user?.description ?? '';

	function showBox(value: boolean) {
		text = value ? 'accept' : 'error';
		show = true;
		setTimeout(() => show = false, 3000);
	}
  
  async function handleSubmit(this: HTMLFormElement) {
		const data: { change: boolean } = await handleForm(this)
			.catch(() => {
				return { change: false };
			});
		
		if (data.change) user.changeDescription(description);
		visible = false;

		showBox(data.change);
	}

	async function deleteLink(title: string) {
		const data: { change: boolean } = await axios({
			method: Method.DELETE,
			url: `/admin/${$user?.username}/link`, 
			data: { link: title }
		}).then(res => res.data)
			.catch(() => {
				return { change: false };
			});

		if (data.change && $user) {
			const reloadLinks = $user.links.filter(link => link.title !== title);
			user.changeLinks(reloadLinks);
		}
		
		showBox(data.change);
	}

	async function changeRole(this: HTMLOptionElement) {
		const data: { change: boolean } = await axios({
			method: Method.POST,
			url: `/admin/${$user?.username}/role`,
			data: { role: this.value }
		}).then(res => res.data)
			.catch(() => {
				return { change: false };
			});

		user.changeRole(this.value);
		
		showBox(data.change);
	}

	afterUpdate(() => {
		if (!visible) description = $user?.description ?? '';
	});
</script>

<div id="user-box">
	<div id="user-data">
		<picture>
			<img src={$user?.avatar} alt={$user?.username}>
		</picture>
		<div>
			<h3>
				Username:
				<a href="/user/{$user?.username}" target="_blank" rel="noreferrer">
					<i class="fa-solid fa-share"></i>
				</a>
			</h3>
			<p>{$user?.username}</p>
		</div>
		<div>
			<h3>Email:</h3>
			<p>{$user?.email}</p>
		</div>
		<div>
			<h3>Role:</h3>
			<p>{$user?.role}</p>
		</div>
		<div>
			<h3>Join:</h3>
			<p>{format($user?.createdAt ?? Date.now())}</p>
		</div>
	</div>
	<span></span>
	<div id="user-option">
		<div>
			<h3>Description:</h3>
				<form
					action="/admin/{$user?.username}/description"
					method={Method.POST}
					on:submit|preventDefault={handleSubmit}
					use:clickOutside
					on:outclick={() => visible = false}
				>
					<textarea
						name="description"
						spellcheck="false"
						autocomplete="off"
						maxlength="4200"
						rows="6"
						bind:value={description} 
						on:focus={() => visible = true}
					></textarea>
					{#if visible}
						<button on:click|preventDefault={() => visible = false}>
							Cancel
						</button>
						<button class="blue" disabled={description === $user?.description}>
							Done
						</button>
					{/if}
				</form>
		</div>
		<div>
			<h3>Links:</h3>
			<ul>
				{#each $user?.links ?? [] as { title, url } (title)}
					<li title="{url}">
						{title}
						<button on:click={() => deleteLink(title)}>
							<i class="fa-solid fa-xmark" title='delete-link-{title}'></i>
						</button>
					</li>
				{/each}
				{#if !$user?.links.length}
					<p>The user does not have any links</p>
				{/if}
			</ul>
		</div>
	</div>
	<span></span>
	<div id="user-change">
		<div>
			<h3>Change role:</h3>
			<select name="role" id="role" on:change={changeRole}>
				<option
					value={UserRole.EDITOR}
					selected={$user?.role === UserRole.EDITOR}
					disabled={$user?.role === UserRole.ADMIN &&
						$properUser?.role !== UserRole.SUPER}
				>{UserRole.EDITOR.toUpperCase()}</option>
				<option
					value={UserRole.MOD}
					selected={$user?.role === UserRole.MOD}
					disabled={$user?.role === UserRole.ADMIN &&
						$properUser?.role !== UserRole.SUPER}
				>{UserRole.MOD.toUpperCase()}</option>
				<option
					value={UserRole.ADMIN}
					selected={$user?.role === UserRole.ADMIN}
					disabled={$properUser?.role !== UserRole.SUPER}
				>{UserRole.ADMIN.toUpperCase()}</option>
			</select>
		</div>
		<div>
			<h3>Delete user:</h3>
			<button
				disabled={$user?.role === UserRole.ADMIN &&
					$properUser?.role !== UserRole.SUPER}
				on:click={() => alert = true}
			>Delete</button>
		</div>
	</div>
	<button id="user-button" on:click={() => user.resetUser()}>
		<i class="fa-solid fa-xmark fa-lg"></i>
	</button>
</div>

<style lang="postcss">
	#user-box {
		grid-template-columns: 1fr 1px 1fr 1px 1fr;
		grid-auto-rows: min-content;
		border: 3px solid #999999;
		@apply grid relative justify-self-center w-[800px] bg-white;

		&:hover > #user-button {
			@apply flex;
		}

		h3 {
			@apply w-full font-bold;
		}

		span {
			@apply self-center h-[90%] bg-[#999999];
		}
	}

	#user-data {
		@apply flex flex-col p-2 gap-y-2 [&_i]:text-[#1a5ef0] [&_i:hover]:text-[#be1af0];

		& picture {
			@apply self-center w-60 h-60;
		}

		& img {
			box-shadow: 0 0 1px #666666;
			@apply w-full h-full rounded-full object-cover;
		}

		& p {
			@apply pl-2 break-words;
		}
	}

	#user-option {
		@apply flex flex-col justify-between h-full p-2 gap-y-2;

		& div {
			@apply flex flex-col h-full gap-y-2;
		}

		& form {
			@apply flex flex-wrap content-between justify-end h-full gap-x-1.5;

			& textarea {
				box-shadow: 0 0 0 1px #bbbbbb;
				@apply w-full p-1.5 rounded-md cursor-pointer;
			}

			& button {
				@apply w-20 py-2 rounded bg-[#db1818] font-bold text-white [&.blue]:bg-[#4464f3];

				&[disabled] {
					@apply bg-[#dddddd] text-[#666666];
				}
			}
		}

		& ul {
			scrollbar-width: thin;
			scrollbar-color: #5383d3 #ffffff;
			overscroll-behavior: contain;
			@apply flex flex-col h-full overflow-y-auto break-words gap-2;

			& li {
				border-bottom: 1px solid #bbbbbb;
				@apply flex justify-between w-full p-1.5;
			}

			& button {
				@apply flex items-center justify-center w-5 h-5 rounded-full bg-[#df403b] text-white;
			}

			& p {
				@apply flex w-full p-1 text-center text-[18px] text-[#555555] font-semibold;
			}
		}
	}
	
	#user-change {
		@apply flex flex-col justify-around p-2;

		& div {
			@apply flex flex-wrap gap-2;
		}

		& select {
			box-shadow: 0 0 0 2px #999999;
			@apply m-auto py-1 px-6 bg-white text-center font-bold cursor-pointer;

			& option:hover {
				@apply bg-black text-white cursor-pointer;
			}
		}

		& button {
			box-shadow: 0 0 2px #666666;
			@apply m-auto py-2 px-8 rounded-full bg-[#df403b] text-[20px] font-bold text-white;

			&[disabled] {
				@apply bg-[#dddddd] text-[#555555] cursor-auto;
			}
		}
	}
	
	#user-button {
		box-shadow: 0 0 1px #000000;
		@apply hidden absolute items-center justify-center w-10 h-10 top-5 right-5 rounded-full bg-[#df403b] text-white cursor-pointer;
	}
</style>
