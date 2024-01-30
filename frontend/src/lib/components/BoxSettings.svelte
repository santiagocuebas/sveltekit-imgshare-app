<script lang="ts">
	import type { IKeys } from "$lib/global";

	export let message: string | IKeys<string>;
</script>

<div class:errors={typeof message !== 'string'}>
	{#if typeof message !== 'string'}
		<p>Have been found the next errors:</p>
		<ul>
			{#each Object.entries(message) as [key, value]}
				<li>&#x25CF; {key}: {value}</li>
			{/each}
		</ul>
		<i class="fa-solid fa-xmark"></i>
		<button on:click>
			<i class="fa-solid fa-xmark"></i>
		</button>
	{:else}
		<p>{message}</p>
		<i class="fa-solid fa-check"></i>
	{/if}
</div>

<style lang="postcss">
	div {
		box-shadow: 0 0 0 3px #0f8015;
		scrollbar-width: none;
		@apply flex fixed flex-col w-[250px] h-fit min-h-[250px] bottom-2.5 right-2.5 p-2.5 rounded-2xl bg-[#bef8c1] overflow-hidden font-semibold gap-y-2.5 [&_p]:font-bold;

		&.errors {
			box-shadow: 0 0 0 3px #800f0f;
			@apply bg-[#f5bfbf];
		}
	}

	li {
		@apply overflow-hidden break-words text-center list-none;
	}

	i {
		@apply self-center text-[150px] [&.fa-xmark]:text-[#800f0f] [&.fa-check]:text-[#0f8015];
	}

	button {
		@apply absolute top-2 right-2 bg-inherit [&_.fa-xmark]:p-1.5 [&_.fa-xmark]:text-[#000000] [&_i]:text-[16px] z-[2000];
	}
</style>
