<script lang="ts">
	export let errors: any;
</script>

<div class="error-container">
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

<style>
	.error-container {
		display: grid;
		grid-template-columns: 1fr 32px;
		grid-auto-rows: min-content;
		align-items: center;
		width: 100%;
		height: min-content;
		padding: 20px;
		border: 1px solid #e6df88;
		outline: 1px solid #e6df88;
		border-radius: 4px;
		background-color: #f2f8a1;
		font-weight: 700;
		color: #222203;
	}

	ul {
		padding-left: 20px;
		list-style-type: disc;
	}

	button {
		grid-column: 2 / span 1;
		grid-row: 1 / span 2;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 8px;
		border: none;
		border-radius: 50%;
		background-color: #222203;
		color: #f2f8a1;
		cursor: pointer;
	}

	i {
		width: 16px;
		height: 16px;
	}
</style>
