<script lang="ts">
	import type { LayoutData } from './$types';
  import type { ResponseForeign } from '$lib/types/global';
  import { beforeUpdate } from 'svelte';
	import { DIR } from '$lib/config';
  import { user } from '$lib/stores';
  import { LinksOptions, UserRole } from '$lib/types/enums';
	
	export let data: LayoutData & ResponseForeign;

	let pathname: string;

	$: ({ avatar, username } = data.foreignUser);

	beforeUpdate(() => pathname = location.pathname);
</script>

<div id="foreign-head">
	<picture>
		<img src={DIR + '/' + avatar} alt={username}>
	</picture>
	<div id="foreign-options">
			<h1>{username}</h1>
			<div>
				{#if $user?.username === username}
					<i class="fa-solid fa-arrow-up-from-bracket"></i>
					<a href="/user/{username}/upload">
						UPLOAD
					</a>
					<p>&#x25CF;</p>
					<i class="fa-solid fa-gear"></i>
					<a href="/user/{username}/settings">
						SETTINGS
					</a>
					{#if $user?.role === UserRole.ADMIN || $user?.role === UserRole.SUPER}
						<p>&#x25CF;</p>
						<i class="fa-solid fa-user"></i>
						<a href="/admin">
							ADMIN
						</a>
					{/if}
				{/if}
			</div>
	</div>
	<div id="foreign-links">
		{#each Object.values(LinksOptions) as text}
			<a
				class:selected={pathname?.includes('/' + text) ||
					(text === LinksOptions.POST && pathname === `/user/${username}`)}
				href="/user/{username}/{text}"
			>{text.toUpperCase()}</a>
		{/each}
	</div>
</div>
<slot></slot>

<style lang="postcss">
	#foreign-head {
		@apply flex relative items-center justify-center w-full min-w-[510px] -mt-5 py-5 px-[10%] bg-[#5383d3] gap-x-5;

		@media (width < 1632px) {
			@apply px-[5%];
		}

		@media (width < 768px) {
			@apply px-5;
		}
	}

	picture {
		@apply flex-none w-[120px] h-[120px];

		& img {
			box-shadow: 0 0 4px #555555;
			@apply w-full h-full rounded-full object-cover;
		}
	}

	#foreign-options {
		@apply flex flex-col flex-1 justify-center gap-y-1;

		& h1 {
			@apply w-full font-bold text-[40px];
		}

		& div {
			@apply flex gap-x-1.5;
		}

		& a, i, p {
			@apply flex-none font-bold text-white;
		}
	}

	#foreign-links {
		@apply self-end flex absolute bottom-2.5 gap-x-1;

		& a {
			@apply font-medium text-white [&.selected]:font-bold;

			&.selected {
				border-bottom: 3px solid #ffffff;
			}
		}
	}
	
	:global(.user-message) {
		@apply flex flex-col items-center justify-evenly w-60 h-60 mx-auto font-bold;

		& :global(p) {
			@apply text-center text-[20px] break-words;
		}

		& :global(a) {
			@apply py-2 px-4 rounded-md bg-[#5383d3] text-[20px] text-white;
		}
	}
</style>
