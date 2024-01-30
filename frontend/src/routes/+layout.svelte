<script lang="ts">
	import type { LayoutServerData } from './$types';
  import type { RawUser } from '$lib/global';
	import { beforeUpdate, onMount } from 'svelte';
	import jsCookie from 'js-cookie';
  import axios from '$lib/axios';
	import { Nav, BoxUser, Footer } from '$lib/components';
	import { user } from '$lib/stores';
	import '../app.css';

	export let data: LayoutServerData & { user: RawUser & { links: string } };

	let visible = true;
	let pathname: string;

	if (data.user) user.setUser(data.user);
	
	async function changeVisibility(e: WheelEvent) {
		visible = e.deltaY <= 0;
	}

	onMount(() => {
		const token = jsCookie.get('authenticate');
		axios.defaults.headers.common['Authorization'] = token;
	});

	beforeUpdate(() => pathname = location.pathname);
</script>

<svelte:window on:wheel={changeVisibility} />

<Nav>
	<BoxUser />
</Nav>
<main>
	<slot></slot>
</main>
{#if visible && (pathname === '/' || pathname?.includes('/gallery'))}
	<Footer />
{/if}

<style lang="postcss">
	:global(*) {
		font-family: 'Quicksand', Helvetica, sans-serif;
		@apply box-border text-[16px] leading-none;
	}

	:global(textarea) {
		@apply resize-none;
	}

	:global(input, textarea) {
		border: none;
		outline: none;
	}

	:global(input:focus, textarea:focus) {
		border: none;
		outline: none;
	}

	:global(input[type='file']) {
		@apply hidden;
	}

	:global(a) {
		@apply bg-transparent no-underline text-black;
	}

	:global(ul) {
		list-style-type: none;
	}

	main {
		grid-auto-rows: min-content 1fr;
		min-height: calc(100vh - 56px);
		@apply grid relative items-start justify-items-center w-full min-w-[510px] mt-14 py-5 bg-[#ecedf2] gap-y-5 leading-tight;
	}

	:global(.title) {
		@apply flex items-center w-full p-2 bg-[#5383d3] truncate text-[32px] font-bold text-white leading-tight gap-2;
	}

	:global(.title-icon) {
		@apply text-[32px];
	}

	:global(.footer-title) {
		@apply text-[72px] font-medium;
	}

	:global(.footer-container) {
		box-shadow: 0 0 4px #666666;
		@apply w-3/5 min-w-[500px] max-w-[800px] p-5 rounded-xl bg-white text-balance;
	}
</style>
