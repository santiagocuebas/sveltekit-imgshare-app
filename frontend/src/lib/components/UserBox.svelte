<script lang="ts">
  import type { ResponseData } from "$lib/global";
  import axios from "axios";
	import { format } from 'timeago.js';
	import { DIR } from '$lib/config.js';
  import { UserRole } from "$lib/enums";
	import { handleRequest } from "$lib/services/services";
	import { user as properUser, selectUser as user } from '$lib/stores';
	
	export let show: boolean;
	export let alert: boolean;
	export let text: string;

	let visibility = false;

	function showBox(value: boolean) {
		text = value ? 'accept' : 'error';
		show = true;
		setTimeout(() => show = false, 3000);
	}
  
  async function handleSubmit(this: HTMLFormElement) {
		visibility = false;

		const data = await handleRequest(this).catch(() => {
			return { change: false };
		});

		if (data.change) {
			const description = new FormData(this).get('description');
			
			if (typeof description === 'string') user.changeDescription(description);
		}

		showBox(data.change);
	}

	async function deleteLink(title: string) {
		const data: ResponseData = await axios({
			method: 'DELETE',
			url: `${DIR}/api/admin/${$user?.username}/link`,
			data: { link: title },
			withCredentials: true
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
		const data = await axios({
			method: 'POST',
			url: `${DIR}/api/admin/${$user?.username}/role`,
			data: { role: this.value },
			withCredentials: true
		}).then(res => res.data);

		user.changeRole(this.value);
		
		showBox(data.change);
	}

	async function deleteUser() {
		if ($user?.role !== UserRole.ADMIN || $properUser?.role === UserRole.SUPER) {
			alert = true;
		}
	}
</script>

<div id="user-box">
	<div id="user-data">
		<img src="{DIR}/uploads/avatars/{$user?.avatar}" alt="">
		<div>
			<h3>
				Username:
				<a href="/user/{$user?.username}" target="_blank" rel="noreferrer">
					<i class="fa-solid fa-share hover:text-[#be1af0]"></i>
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
	<div id="user-option">
		<div>
			<h3>Description:</h3>
				<form
					action="{DIR}/api/admin/{$user?.username}/description"
					method='POST'
					on:submit|preventDefault={handleSubmit}
				>
					<textarea
						name="description"
						spellcheck="false"
						autocomplete="off"
						maxlength="4200"
						rows="6"
						value={$user?.description} 
						on:focus={() => visibility = true}
					></textarea>
					{#if visibility}
						<button on:click|preventDefault={() => visibility = false}>
							Cancel
						</button>
						<button class="blue">
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
			</ul>
		</div>
	</div>
	<div id="user-change">
		<div>
			<h3>Change role:</h3>
			<select name="role" id="role" on:change={changeRole}>
				<option
					value="editor"
					selected={$user?.role === UserRole.EDITOR}
					disabled={$user?.role === UserRole.ADMIN &&
						$properUser?.role !== UserRole.SUPER}
				>EDITOR</option>
				<option
					value="mod"
					selected={$user?.role === UserRole.MOD}
					disabled={$user?.role === UserRole.ADMIN &&
						$properUser?.role !== UserRole.SUPER}
				>MOD</option>
				<option
					value="admin"
					selected={$user?.role === UserRole.ADMIN}
					disabled={$properUser?.role !== UserRole.SUPER}
				>ADMIN</option>
			</select>
		</div>
		<div>
			<h3>Delete user:</h3>
			<button on:click|preventDefault={deleteUser}>Delete</button>
		</div>
	</div>
	<button id="user-button" on:click={() => user.resetUser()}>
		<i class="fa-solid fa-xmark fa-lg"></i>
	</button>
</div>

<style lang="postcss">
	#user-box {
		grid-template-columns: 1fr 1fr 1fr;
		grid-auto-rows: min-content;
		border: 3px solid #999999;
		@apply grid relative justify-self-center w-[800px] p-2 bg-white gap-x-2;

		&:hover > #user-button {
			@apply flex;
		}

		h3 {
			@apply w-full font-bold;
		}
	}

	#user-data {
		@apply flex flex-col gap-y-2 [&_i]:text-[#1a5ef0] [&_i:hover]:text-[#be1af0];

		& img {
			box-shadow: 0 0 1px #666666;
			@apply justify-self-center w-60 h-60 rounded-full object-cover;
		}

		& p {
			@apply pl-2 break-words;
		}
	}

	#user-option {
		@apply flex flex-col justify-between h-full gap-y-2;

		& div {
			@apply flex flex-col h-full gap-y-1;
		}

		& form {
			@apply flex flex-wrap content-between justify-end h-full gap-x-1;

			& textarea {
				box-shadow: 0 0 0 1px #bbbbbb;
				@apply w-full p-1.5 rounded-md cursor-pointer;
			}

			& button {
				@apply w-[72px] py-1 rounded-sm bg-[#db1818] font-bold text-white [&.blue]:bg-[#4464f3];
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
		}
	}
	
	#user-change {
		@apply flex flex-col justify-around;

		& div {
			@apply flex flex-wrap gap-1.5;
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
			@apply m-auto py-2 px-6 rounded-full bg-[#df403b] text-[20px] font-bold text-white hover:bg-[#ef504b];
		}
	}
	
	#user-button {
		box-shadow: 0 0 2px #000000;
		@apply hidden absolute items-center justify-center w-10 h-10 top-5 right-5 rounded-full bg-[#df403b] text-white cursor-pointer;
	}
</style>
