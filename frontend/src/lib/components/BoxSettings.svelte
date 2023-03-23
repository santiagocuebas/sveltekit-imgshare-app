<script lang="ts">
	import type { IMessage } from "$lib/global.js";

	export let className: string;
	export let message: string | IMessage;
	export let visible: boolean;

	const closeBox = () => {
		visible = false;
	};
</script>

<div class={className}>
	{#if typeof message !== 'string'}
		<p>Have been found the next errors:</p>
		<ul>
			{#each Object.keys(message) as key}
				<li>&#x25CF; {key}: {message[key]}</li>
			{/each}
		</ul>
		<i class="fa-solid fa-xmark"></i>
		<button on:click={closeBox}>
			<i class="fa-solid fa-xmark"></i>
		</button>
	{:else}
		<p>{message}</p>
		<span></span>
		<i class="fa-solid fa-check"></i>
	{/if}
</div>

<style>
	div {
		display: grid;
		position: fixed;
		grid-auto-rows: min-content min-content 1fr;
		align-items: center;
		justify-items: center;
		bottom: 10px;
		right: 10px;
		width: 250px;
		height: fit-content;
		min-height: 250px;
		padding: 10px;
		border-radius: 15px;
		overflow-x: auto;
		scrollbar-width: none;
		font-weight: 600;
		row-gap: 10px;
	}

	.success-settings {
		background-color: #bef8c1;
		box-shadow: 0 0 0 3px #0f8015;
	}

  .errors-settings {
    background-color: #f5bfbf;
		box-shadow: 0 0 0 3px #800f0f;
  }

	p {
		font-weight: 700;
	}

	li {
		overflow: hidden;
		overflow-wrap: break-word;
		text-align: center;
		list-style-type: none;
	}

	i {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 93.75px;
		font-size: 150px;
	}

	.fa-xmark {
		color: #800f0f;
	}

	.fa-check {
		width: 132px;
		color: #0f8015;
	}

	button {
		position: absolute;
		top: 10px;
		right: 10px;
		border: none;
		background-color: inherit;
		cursor: pointer;
	}

	button .fa-xmark {
		height: 10px;
		font-size: 16px;
		color: #000000;
	}
</style>
