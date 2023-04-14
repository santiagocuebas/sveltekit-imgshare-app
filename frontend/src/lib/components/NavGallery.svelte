<script lang="ts">
  import axios from "axios";
  import type { IImage } from "$lib/global.js";
	import { DIR } from '$lib/config.js';
	import { clickOutside } from "$lib/services/click-outside";

	export let images: IImage[];
	export let visibleBox: boolean = true;

	let visible = false;
	let selectText = 'NEWEST';
	const choiceText = ['NEWEST', 'OLDEST', 'VIEWED'];

	async function handleSubmit(this: HTMLElement) {
		selectText = this.innerText;
		visible = false;

		images = await axios
			.get(`${DIR}/api/gallery/order/${selectText}`)
			.then(res => res.data);
	};
</script>

<div class="gallery-header">
	<i class="fa-solid fa-images gallery-icon"></i>
	IMAGES
	{#if visibleBox}
		<button class="gallery-select" on:click={() => visible = !visible}>
			{selectText}
			<i class="fa-solid fa-caret-down"></i>
		</button>
		{#if visible}
			<ul use:clickOutside on:outclick={() => visible = false}>
				{#each choiceText as text}
					<li on:mousedown={handleSubmit}>
						{text}
					</li>
				{/each}
			</ul>
		{/if}
	{/if}
</div>

<style>
	.gallery-header {
		display: flex;
		position: relative;
		align-items: center;
		width: 100%;
		height: min-content;
		padding: 8px;
		background: #5383d3;
		font-size: 20px;
		font-weight: 700;
		color: #ffffff;
		gap: 10px;
	}

	.gallery-icon {
		font-size: 20px;
	}

	.gallery-select {
		display: flex;
		position: relative;
		align-items: center;
		justify-content: center;
		width: 120px;
		margin-left: auto;
		border: none;
		background-color: #5383d3;
		font-size: 20px;
		font-weight: 700;
		color: #ffffff;
		cursor: pointer;
		gap: 4px;
	}

	ul {
		display: grid;
		position: absolute;
		align-self: start;
		width: 120px;
		right: 7px;
		margin-top: 26px;
		padding: 3px 0;
		background-color: #ffffff;
		box-shadow: 0 0 3px #666666;
		color: #000000;
		z-index: 70;
	}

	li {
		padding: 3px 0;
		text-align: center;
		cursor: pointer;
	}

	li:hover {
		background-color: #dddddd;
	}
</style>
