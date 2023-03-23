<script lang="ts">
  import axios from "axios";
	import type { IUser } from "$lib/global.js";
  import { UserRole } from "$lib/enums";
	import { clickOutside } from "$lib/services/click-outside";

	export let user: IUser;
	export let change: () => boolean;
	export let visible: boolean;

	const links = [
		{
			href: `/user/${user.username}/post`,
			className: 'fa-regular fa-image',
			name: 'Post'
		},
		{
			href: `/user/${user.username}/favorite`,
			className: 'fa-regular fa-star',
			name: 'Favorite'
		},
		{
			href: `/user/${user.username}/comment`,
			className: 'fa-regular fa-message',
			name: 'Comments'
		},
		{
			href: `/user/${user.username}/about`,
			className: 'fa-regular fa-file',
			name: 'About'
		},
		{
			href: `/user/${user.username}/upload`,
			className: 'fa-solid fa-arrow-up-from-bracket',
			name: 'Upload'
		},
		{
			href: `/user/${user.username}/settings`,
			className: 'fa-solid fa-gear',
			name: 'Settings'
		}
	];

	async function handleLogout(e: Event) {
		const element = e.currentTarget as HTMLElement;
		const url = element.getAttribute('href') as string;

		const data = await axios({
			method: 'POST',
			url,
			withCredentials: true
		}).then(res => res.data);

		change();

		if (data.url) window.location.href = '/';
	}
</script>

<div class="user-list" use:clickOutside on:outclick={() => (visible = false)}>
	<div class="user-header">
		<img src="http://localhost:4200/uploads/avatars/{user?.avatar}" alt="">
		<div>
			<h3>{user?.username}</h3>
			<p>{user?.email}</p>
		</div>
	</div>
	<span></span>
	<ul>
		{#if user?.role === UserRole.ADMIN || user?.role === UserRole.SUPER}
			<a
				href='/admin'
				on:click={change}
			>
				<i class='fa-solid fa-user'></i>
				<li>Admin</li>
			</a>
		{/if}
		{#each links as link (link.name)}
			<a
				href={link.href}
				on:click={change}
			>
				<i class={link.className}></i>
				<li>{link.name}</li>
			</a>
		{/each}
			<a
				href='http://localhost:4200/api/auth/logout'
				on:click|preventDefault={handleLogout}
			>
				<i class='fa-solid fa-right-from-bracket'></i>
				<li>Logout</li>
			</a>
	</ul>
</div>

<style>
	.user-list {
		display: grid;
		grid-auto-rows: min-content;
		position: absolute;
		top: 56px;
		right: 20px;
		width: 280px;
		min-width: 280px;
		padding: 10px 0;
		border-radius: 8px;
		background-color: #ffffff;
		box-shadow: 0 2px 10px #666666;
		row-gap: 10px;
		z-index: 200;
	}

	.user-header {
		display: flex;
		align-items: center;
		padding: 0 15px;
		gap: 15px;
	}

	.user-header img {
		width: 48px;
		height: 48px;
		border-radius: 50%;
		box-shadow: 0 0 4px 1px #333333;
		object-fit: cover;
	}

	.user-header h3 {
		font-size: 20px;
		overflow-wrap: anywhere; 
	}

	.user-header p {
		overflow-wrap: anywhere; 
	}

	.user-list span {
		height: 1px;
		background-color: #888888;
	}

	.user-list ul {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
	}

	.user-list a {
		display: flex;
		align-items: center;
		width: 100%;
		padding: 5px 20px;
		font-weight: 600;
		gap: 20px;
	}

	.user-list a:hover {
		background-color: #dddddd;
	}
</style>
