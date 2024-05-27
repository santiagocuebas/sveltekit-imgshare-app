<script lang="ts">
  import type { IKeys } from "$lib/types/global";

	export let errors: IKeys<string>;
</script>

<div>
	<p>The following errors have been found</p>
	<ul>
		{#each Object.keys(errors) as value}
			<li>
				{value}: {errors[value]}
			</li>
		{/each}
	</ul>
	<button on:click|preventDefault>
		<i class="fa-solid fa-xmark"></i>
	</button>
</div>

<style lang="postcss">
	div {
		grid-template-columns: 1fr 32px;
		grid-auto-rows: min-content;
		border: 1px solid #e6df88;
		outline: 1px solid #e6df88;
		@apply grid items-center w-full h-min p-5 rounded bg-[#f2f8a1] font-bold text-[#222203] gap-1;
	}

	ul {
		@apply pl-5 list-disc;
	}

	button {
		grid-column: 2 / span 1;
		grid-row: 1 / span 2;
		@apply flex justify-center items-center p-2 rounded-full bg-[#222203] text-[#f2f8a1];
	}
</style>
