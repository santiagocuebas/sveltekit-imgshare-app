<script lang="ts">
	import type { PageData } from './$types';
  import type { IUserExtended } from '$lib/types/global';
  import { afterNavigate } from '$app/navigation';
	import axios from '$lib/axios';
	import { Gallery, BoxGallery, UserCell, NavAdmin, UserBox } from '$lib/components';
	import { ClassName, TextData } from '$lib/dictionary';
	import { selectUser } from '$lib/stores';
	import { Method } from '$lib/types/enums';
	
	export let data: PageData & { users: IUserExtended[] };

	let alert = false;
	let show = false;
	let text: string;

	let deleteUser = async () => {
		const username = $selectUser?.username;
		alert = false;
		selectUser.resetUser();

		const change: boolean = await axios({
			method: Method.DELETE,
			url: `/admin/?username=${username}`
		}).then(res => res.data?.change ?? false)
			.catch(err => {
				console.log(err?.message);
				return false;
			});

		if (change) {
			data.users = data.users.filter(user => user.username !== username);
		}

		text = (change) ? 'accept' : 'error';
		show = true;

		setTimeout(() => show = false, 3000);
	};

	afterNavigate(() => selectUser.resetUser());
</script>

{#if show}
	<div id="user-message" class={text}>
		<i class='fa-solid {ClassName[text]}'></i>
		<p>{TextData[text]}</p>
	</div>
{/if}

{#if alert}
	<div id="alert-container">
		<div>
			<p>Are you sure want delete this user?</p>
			<button on:click={() => alert = false}>
				Cancel
			</button>
			<button class="blue" on:click={deleteUser}>
				Accept
			</button>
		</div>
	</div>
{/if}

{#if $selectUser}
	<UserBox bind:show={show} bind:alert={alert} bind:text={text} />
{/if}

<Gallery className='gallery-users'>
	<NavAdmin bind:users={data.users} />
	<BoxGallery className='image-user'>
		{#each data.users as user (user.username)}
			<UserCell user={user} on:click={() => selectUser.setUser(user)} />
		{/each}
	</BoxGallery>
</Gallery>

<style lang="postcss">
	#alert-container {
		@apply grid fixed justify-center w-screen h-screen top-0 bg-black/70 z-[1000];

		& div {
			@apply flex flex-wrap justify-evenly w-min h-min mt-32 py-5 px-12 bg-white gap-y-2.5;
		}

		& p {
			@apply w-max text-center font-medium;
		}

		& button {
			box-shadow: 0 0 0 1px #666666;
			@apply w-[100px] py-2 rounded-xl bg-[#c23838] font-medium text-white
			[&.blue]:bg-[#384dc2];
		}
	}

	#user-message {
    box-shadow: 0 0 0 4px #0b7c14;
		@apply flex fixed justify-around items-center w-[400px] h-[200px] left-auto right-auto bottom-20 bg-[#97f09e] rounded-lg z-[500];

		&.error {
			box-shadow: 0 0 0 2px #7c0b0b;
			@apply bg-[#f09797];
		}

		& i {
			@apply flex place-content-center w-[180px] h-[180px] rounded-full text-[160px] [&.fa-check]:text-[#0b7c14] [&.fa-xmark]:text-[#7c0b0b];
		}

		& p {
			@apply w-[180px] text-center font-bold;
		}
	}
</style>
