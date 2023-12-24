<script lang="ts">
	import { goto } from "$app/navigation";
  import axios from "axios";
	import { DIR } from '$lib/config.js';
  import { UserRole } from "$lib/enums";
	import { clickOutside } from "$lib/services/click-outside";
  import { user } from '$lib/stores/user-store';

	let visible: boolean;

	const links = [
		{
		href: `/user/${$user?.username}/post`,
			className: 'fa-regular fa-image',
			name: 'Post'
		},
		{
		href: `/user/${$user?.username}/favorite`,
			className: 'fa-regular fa-star',
			name: 'Favorite'
		},
		{
		href: `/user/${$user?.username}/comment`,
			className: 'fa-regular fa-message',
			name: 'Comments'
		},
		{
		href: `/user/${$user?.username}/about`,
			className: 'fa-regular fa-file',
			name: 'About'
		},
		{
		href: `/user/${$user?.username}/upload`,
			className: 'fa-solid fa-arrow-up-from-bracket',
			name: 'Upload'
		},
		{
		href: `/user/${$user?.username}/settings`,
			className: 'fa-solid fa-gear',
			name: 'Settings'
		}
	];

	async function handleLogout() {
		const data = await axios({
			method: 'POST',
			url: DIR + '/api/auth/logout',
			withCredentials: true
		}).then(res => res.data)
			.catch(() => { return { redirect: false } });

		if (data.redirect) {
			user.resetUser();
			goto('/');
		}
	}
</script>

<button id='nav-avatar' on:click={() => visible = !visible}>
	<img
		class="nav-avatar"
		src="{DIR}/uploads/avatars/{$user?.avatar}"
		alt={$user?.username}
	>
</button>
{#if visible}
	<div
		id="user-list"
		use:clickOutside
		on:outclick={setTimeout(() => visible = false)}
	>
		<div class="user-header">
			<img src="{DIR}/uploads/avatars/{$user?.avatar}" alt="{$user?.username}">
			<div>
				<h3>{$user?.username}</h3>
				<p>{$user?.email}</p>
			</div>
		</div>
		<span></span>
		<ul>
			{#if $user?.role === UserRole.ADMIN || $user?.role === UserRole.SUPER}
				<a href='/admin' on:click={() => visible = false}>
					<i class='fa-solid fa-user'></i>
					<li>Admin</li>
				</a>
			{/if}
			{#each links as link (link.name)}
				<a href={link.href} on:click={() => visible = false}>
					<i class={link.className}></i>
					<li>{link.name}</li>
				</a>
			{/each}
				<a href='/logout' on:click|preventDefault={handleLogout}>
					<i class='fa-solid fa-right-from-bracket'></i>
					<li>Logout</li>
				</a>
		</ul>
	</div>
{/if}

<style lang="postcss">
	img {
		box-shadow: 0 0 4px #666666;
		@apply w-10 h-10 rounded-full object-cover;
	}

	#user-list {
		box-shadow: 0 0 4px #666666;
		@apply flex absolute flex-col top-14 right-5 w-[280px] py-2.5 rounded-lg bg-white gap-y-2.5 z-[200] [&_p]:break-words;

		& .user-header {
			@apply flex items-center px-4 gap-4;
		}

		& img {
			box-shadow: 0 0 2px #666666;
			@apply w-12 h-12 rounded-full object-cover;
		}

		& h3 {
			@apply text-[20px] font-bold break-words;
		}

		& span {
			@apply h-px bg-[#888888];
		}

		& ul {
			@apply flex flex-col;
		}

		& a {
			@apply flex items-center w-full py-1.5 px-5 font-semibold gap-5 hover:bg-[#dddddd];
		}
	}
</style>
