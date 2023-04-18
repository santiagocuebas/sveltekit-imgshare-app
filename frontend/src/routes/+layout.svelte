<script lang="ts">
	import { beforeUpdate } from 'svelte';
  import type { LayoutServerData } from './$types';
	import Nav from '$lib/components/Nav.svelte';
	import BoxUser from '$lib/components/BoxUser.svelte';
  import Footer from '$lib/components/Footer.svelte';

	export let data: LayoutServerData;

	let visible = false;
	let visibleFooter = true;
	let pathname: string;
	
	async function changeVisibility(e: WheelEvent) {
		if (e.deltaY <=  0) visibleFooter = true;
		else visibleFooter = false;
	}

	beforeUpdate(() => pathname = window.location.pathname);
</script>

<Nav user={data.user} on:click={() => visible = !visible}>
	{#if visible}
		<BoxUser user={data.user} bind:visible={visible} />
	{/if}
</Nav>
<div class="main-container" on:wheel={changeVisibility}>
	<slot></slot>
</div>
{#if visibleFooter && (pathname === '/' || pathname?.includes('/gallery'))}
<Footer />
{/if}

<style>
	:global(*) {
  	box-sizing: border-box;
		margin: 0;
		padding: 0;
		font-size: 16px;
		font-family: 'Quicksand', Helvetica, sans-serif;
	}

	:global(textarea) {
		resize: none;
	}

	:global(a) {
		background-color: transparent;
		color: #000;
		text-decoration: none;
	}

	:global(img) {
		border-style: none;
  	max-width: 100%;
	}

	:global(button, input, optgroup, select, textarea) {
		font-family: inherit;
  	font-size: 100%;
  	line-height: 1.15;
	}

	:global(ul) {
		list-style-type: none;
	}

	:global(.main-container) {
		display: grid;
		position: relative;
		justify-items: center;
		align-items: flex-start;
		grid-auto-rows: min-content;
		width: 100%;
		min-width: 510px;
		min-height: calc(100vh - 56px);
		margin-top: 56px;
		padding: 20px 0;
		background: #ecedf2;
		row-gap: 20px;
	}

	:global(.title) {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 8px;
    background-color: #5383d3;
    font-size: 32px;
    color: #ffffff;
    gap: 8px;
  }

	:global(.title-icon) {
    font-size: 32px;
  }
</style>
