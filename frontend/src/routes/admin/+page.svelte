<script lang="ts">
  import axios from 'axios';
	import type { PageData } from './$types';
  import type { ILink, IUserExtended } from '$lib/global';
	import { DIR } from '$lib/config.js';
	import Gallery from '$lib/components/Gallery.svelte';
  import BoxGallery from '$lib/components/BoxGallery.svelte';
  import UserCell from '$lib/components/UserCell.svelte';
	import UserData from '$lib/components/UserData.svelte';
	import UserOption from '$lib/components/UserOption.svelte';
	import UserChange from '$lib/components/UserChange.svelte';
  import NavAdmin from '$lib/components/NavAdmin.svelte';
  import AlertUser from '$lib/components/AlertUser.svelte';
  import UserMessage from '$lib/components/UserMessage.svelte';
	
	export let data: PageData;

	let selectUser: IUserExtended | null = null;
	let linksUser: ILink[];
	let alert = false;
	let className: string;
	let text: string;
	let show = false;

	function showBox(value: boolean) {
		if (value) {
			className = 'fa-solid fa-check';
			text = 'The changes have been applied successfully';
		} else {
			className = 'fa-solid fa-xmark';
			text = 'An error occurred while trying to apply the changes';
		}

		show = true;

		setTimeout(() => {
			show = false;
		}, 3000);
	}

	let deleteUser = async () => {
		const username = selectUser?.username;
		alert = false;
		selectUser = null;

		const resData = await axios({
			method: 'DELETE',
			url: `${DIR}/api/admin/${username}`,
			withCredentials: true
		}).then(res => res.data);

		data.users= data.users.filter((user: IUserExtended) => user.username !== username);

		showBox(resData.change);
	};
</script>
{#if show}
	<UserMessage className={className} text={text} />	
{/if}
{#if alert}
	<AlertUser bind:alert={alert} bind:deleteUser={deleteUser} />
{/if}
{#if selectUser}
	<div class="user-box">
		<UserData
			username={selectUser.username}
			email={selectUser.email}
			avatar={selectUser.avatar}
			bind:role={selectUser.role}
			createdAt={selectUser.createdAt}
		/>
		<div class="user-box-line"></div>
		<UserOption
			username={selectUser.username}
			bind:description={selectUser.description}
			bind:links={linksUser}
			showBox={showBox}
		/>
		<div class="user-box-line"></div>
		<UserChange
			username={selectUser.username}
			bind:role={selectUser.role}
			bind:myRole={data.user.role}
			bind:alert={alert}
			showBox={showBox}
		/>
		<button class="close-user" on:click|preventDefault={() => selectUser = null}>
			<i class="fa-solid fa-xmark"></i>
		</button>
	</div>
{/if}
<Gallery className='gallery-users'>
	<NavAdmin bind:users={data.users} />
	<BoxGallery className='image-cell-user'>
		{#each data.users as user (user.username)}
			<UserCell
				bind:links={linksUser}
				bind:selectUser={selectUser}
				user={user} 
			/>
		{/each}
	</BoxGallery>
</Gallery>

<style>
	.user-box {
		display: grid;
		position: relative;
		grid-template-columns: 1fr 1px 1fr 1px 1fr;
		grid-auto-rows: min-content;
		justify-self: center;
		width: 800px;
		padding: 10px;
		border: 3px solid #999999;
		background-color: #ffffff;
		gap: 10px;
	}

	.user-box-line {
		align-self: center;
		width: 1px;
		height: 100%;
		background-color: #999999;
	}

	.close-user {
		display: none;
		position: absolute;
		align-items: center;
		justify-content: center;
		top: 20px;
		right: 20px;
		width: 40px;
		height: 40px;
		border: none;
		box-shadow: 0 0 5px 1px #000000;
		border-radius: 50%;
		background-color: #df403b;
		color: #ffffff;
		cursor: pointer;
	}

	.close-user i {
		font-size: 20px;
	}

	:global(.user-box:hover > .close-user) {
		display: flex;
	}
</style>
