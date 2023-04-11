<script lang="ts">
  import { UserRole } from '$lib/enums';
	import { DIR } from '$lib/config.js';
  import { beforeUpdate } from 'svelte';
	import type { PageData } from './$types';
	
	export let data: PageData;
	let pathname: string;

	beforeUpdate(() => pathname = window.location.pathname);
</script>

<div class="foreignuser-header">
	<div class="foreignuser-head">
		<img src="{DIR}/uploads/avatars/{data.foreignUser?.avatar}" alt={data.foreignUser?.username}>
		<div class="foreignuser-options">
			<h1>{data.foreignUser?.username}</h1>
			{#if data.user?.username === data.foreignUser?.username}
			<i class="fa-solid fa-arrow-up-from-bracket"></i>
			<a href="/user/{data.user?.username}/upload">UPLOAD</a>
			<p>&#x25CF;</p>
			<i class="fa-solid fa-gear"></i>
			<a href="/user/{data.user?.username}/settings">SETTINGS</a>
				{#if data.user?.role === UserRole.ADMIN || data.user?.role === UserRole.SUPER}
					<p>&#x25CF;</p>
					<i class="fa-solid fa-user"></i>
					<a href="/admin">ADMIN</a>
				{/if}
			{/if}
		</div>
		<div class="foreignuser-links">
			<a class={pathname?.includes('/post') || pathname === `/user/${data.foreignUser?.username}` ? 'selected' : ''} href="/user/{data.foreignUser?.username}/post">POST</a>
			<a class={pathname?.includes('/favorite') ? 'selected' : ''} href="/user/{data.foreignUser?.username}/favorite">FAVORITE</a>
			<a class={pathname?.includes('/comment') ? 'selected' : ''} href="/user/{data.foreignUser?.username}/comment">COMMENT</a>
			<a class={pathname?.includes('/about') ? 'selected' : ''} href="/user/{data.foreignUser?.username}/about">ABOUT</a>
		</div>
	</div>
</div>
<slot></slot>

<style>
	.foreignuser-header {
		display: flex;
		width: 100%;
		margin-top: -20px;
		background-color: #5383d3;
	}

	.foreignuser-head {
		display: grid;
		grid-template-columns: 120px 1fr;
		grid-auto-rows: 20px min-content;
		width: 90%;
		min-width: 510px;
		max-width: 1520px;
		margin: auto;
		padding: 10px 0;
		column-gap: 10px;
	}

	.foreignuser-header img {
		grid-row: 2 / span 1;
		width: 120px;
		height: 120px;
		border-radius: 50%;
		box-shadow: 0 0 6px 2px #555555;
		object-fit: cover;
		object-position: center;
	}

	.foreignuser-options {
		grid-row: 2 / span 1;
		display: flex;
		flex-wrap: wrap;
		align-self: center;
		align-items: center;
		column-gap: 10px;
	}

	.foreignuser-options h1 {
		width: 100%;
		font-size: 40px;
	}

	.foreignuser-options a, i, p {
		height: min-content;
		font-weight: 700;
		color: #ffffff;
	}

	.foreignuser-links {
		grid-row: 3 / span 1;
		grid-column: 1 / span 2;
		justify-self: center;
	}

	.foreignuser-links a {
		font-weight: 600;
		color: #ffffff;
	}

	.selected {
		border-bottom: 2px solid #ffffff;
		font-weight: 700;
	}

	:global(.user-message) {
		display: flex;
		align-content: space-evenly;
		justify-content: center;
		flex-wrap: wrap;
		width: 240px;
		height: 240px;
		left: 0;
		right: 0;
		margin: 0 auto;
		font-size: 20px;
		font-weight: 700;
	}

	:global(.user-column) {
		grid-column: 1 / span 6;
	}

	:global(.user-message p) {
		height: min-content;
		overflow-wrap: break-word;
		text-align: center;
	}

	:global(.user-message a) {
		width: max-content;
		height: min-content;
		padding: 8px 16px;
		border: none;
		border-radius: 6px;
		background-color: #5383d3;
		font-size: 20px;
		font-weight: 700;
		color: #ffffff;
		cursor: pointer;
	}
</style>

