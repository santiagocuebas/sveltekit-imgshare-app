<script lang="ts">
	import type { LayoutServerData } from './$types';
	import { beforeUpdate } from 'svelte';
	import { user } from '$lib/stores/index';
	import { Nav, BoxUser, Footer } from '$lib/components';
	import '../app.css';

	export let data: LayoutServerData;

	console.log(data);

	let visibleFooter = true;
	let pathname: string;

	if (data.user) user.setUser(data.user);
	
	async function changeVisibility(e: WheelEvent) {
		visibleFooter = (e.deltaY <=  0) ? true : false;
	}

	beforeUpdate(() => pathname = location.pathname);
</script>

<Nav>
	<BoxUser />
</Nav>
<main on:wheel={changeVisibility}>
	<slot></slot>
</main>
{#if visibleFooter && (pathname === '/' || pathname?.includes('/gallery'))}
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
		text-decoration: none;
		@apply bg-transparent text-black;
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
</style>
