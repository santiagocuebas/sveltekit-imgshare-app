<script lang="ts">
  import axios from "axios";
  import type { IImage } from "$lib/global.js";
	import { clickOutside } from "$lib/services/click-outside";
    import { UserRole } from "$lib/enums";

	export let innerText: string = 'PUBLIC';
	export let username: string;
	export let role: string;
	export let author: string;
	export let images: IImage[];
	let publicText = 'PUBLIC';
	let orderText = 'NEWEST';
	let visiblePublic = false;
	let visibleOrder = false;
	let choisePublic = ['PUBLIC', 'PRIVATE', 'ALL'];
	let choiseOrder = ['NEWEST', 'OLDEST', 'VIEWED'];

	const selectIcon = () => {
		if (innerText === 'COMMENTS') return 'message';
		if (innerText === 'ABOUT') return 'file';
		if (innerText === 'FAVORITES') return 'star';
		return 'images';
	};

	function changePublic(this: HTMLElement) {
		publicText = this.innerText;

		handleSubmit();
	};

	function changeOrder(this: HTMLElement) {
		orderText = this.innerText;

		handleSubmit();
	};

	async function handleSubmit() {
		visiblePublic = false;
		visibleOrder = false;

		images = await axios({
			method: 'GET',
			url: `http://localhost:4200/api/user/${username}/${publicText}/${orderText}`,
			withCredentials: true
		}).then(res => res.data);
	}
</script>

<div class="nav-user">
	<i class="fa-solid fa-{selectIcon()}"></i>
	{#if ((username === author || role === UserRole.ADMIN || role === UserRole.SUPER)) && innerText === 'PUBLIC'}
	<button class="nav-user-box" on:click={() => visiblePublic = !visiblePublic}>
		{publicText}
		<i class="fa-solid fa-caret-down"></i>
	</button>
	{#if visiblePublic}
		<ul class="left" use:clickOutside on:outclick={() => visiblePublic = false}>
			{#each choisePublic as choise}
			<li on:mousedown={changePublic}>{choise}</li>
			{/each}
		</ul>
	{/if}
	{:else}
	<div>
		{innerText}
	</div>
	{/if}
	{#if innerText === 'PUBLIC'}
		<button class="nav-user-box ml" on:click={() => visibleOrder = !visibleOrder}>
			{orderText}
			<i class="fa-solid fa-caret-down"></i>
		</button>
		{#if visibleOrder}
			<ul
				class="right"
				use:clickOutside
				on:outclick={() => visibleOrder = false}
			>
				{#each choiseOrder as choise}
				<li on:mousedown={changeOrder}>{choise}</li>
				{/each}
			</ul>
		{/if}
	{/if}
</div>

<style>
	.nav-user {
		display: flex;
		position: relative;
		align-items: center;
		width: 100%;
		padding: 5px 10px;
		background-color: #5383d3;
		font-weight: 700;
		color: #ffffff;
		gap: 8px;
	}

	.nav-user-box {
		display: grid;
		grid-template-columns: 1fr 15px;
		align-items: center;
		justify-content: center;
		width: 100px;
		border: none;
		border-radius: 10px;
		background-color: #5383d3;
		text-align: center;
		font-weight: 700;
		color: #ffffff;
		cursor: pointer;
	}

	.nav-user-box i {
		justify-self: start;
		width: min-content;
		height: min-content;
	}

	.nav-user ul {
		position: absolute;
		align-self: start;
		width: 120px;
		margin-top: 22px;
		padding: 3px 0;
		border-radius: 2px;
		background-color: #ffffff;
		box-shadow: 0 0 6px #666666;
		color: #000000;
		z-index: 90;
	}

	.nav-user li {
		padding: 3px 0;
		text-align: center;
		cursor: pointer;
	}

	.nav-user li:hover {
		background-color: #dddddd;
	}

	.ml {
		margin-right: 5px;
		margin-left: auto;
	}

	.left {
		left: 26px;
	}

	.right {
		right: 3px;
	}
</style>
