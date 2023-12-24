<script lang="ts">
	import type { PageData } from './$types';
  import axios from 'axios';
	import { DIR } from '$lib/config.js';
	import { ClassName, TextData } from '$lib/dictionary.js';
	import { selectUser } from '$lib/stores';
	import {
		Gallery,
		BoxGallery,
		UserCell,
		NavAdmin,
		UserBox
	} from '$lib/components';
	
	export let data: PageData;

	let alert = false;
	let show = false;
	let text: string;

	function showBox(value: boolean) {
		text = (value) ? 'accept' : 'error';
		show = true;
		setTimeout(() => show = false, 3000);
	}

	let deleteUser = async () => {
		const username = $selectUser?.username;
		alert = false;
		selectUser.resetUser();

		const resData = await axios({
			method: 'DELETE',
			url: `${DIR}/api/admin/${username}`,
			withCredentials: true
		}).then(res => res.data)
			.catch(err => {
				console.log(err.message);
				return { change: false };
			});

		if (resData.change) {
			data.users = data.users.filter(user => user.username !== username);
		}

		showBox(resData.change);
	};
</script>

{#if show}
	<div id="user-message">
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
	<div id="container-user">
		<UserBox bind:show={show} bind:alert={alert} bind:text={text} />
	</div>
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
    box-shadow: 0 0 4px #444444;
		@apply flex fixed justify-around items-center w-[400px] h-[200px] left-auto right-auto bottom-20 bg-white z-[500];

		& i {
			outline: 2px solid #000000;
			@apply flex place-content-center w-[180px] h-[180px] rounded-full text-[160px] [&.fa-check]:bg-[#97f09e] [&.fa-check]:text-[#0b7c14] [&.fa-xmark]:bg-[#f09797] [&.fa-xmark]:text-[#7c0b0b];
		}

		& p {
			@apply w-[180px] text-center font-bold;
		}
	}

	#container-user {
		@apply p-2.5;
	}
</style>
