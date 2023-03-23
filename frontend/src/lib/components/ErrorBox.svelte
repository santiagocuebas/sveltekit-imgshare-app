<script lang="ts">
	export let hide: (value: boolean) => {};
	export let errors: any;
</script>

<div class="error-container">
	<div class="error-box">
		<p>The following errors have been found</p>
		<ul class="error-list">
			{#each Object.keys(errors) as value}
				<li>
					{value}: {errors[value]}
				</li>
			{/each}
		</ul>
	</div>
	<button class="error-delete" on:click|preventDefault={() => hide(false)}>
		<i class="error-icon fa-solid fa-xmark"></i>
	</button>
</div>

<style>
	.error-container{
		display: flex;
		align-items: center;
		width: 100%;
		height: min-content;
		padding: 20px;
		border: 1px solid #e6df88;
		outline: 1px solid #e6df88;
		border-radius: 4px;
		background-color: #f2f8a1;
		font-weight: 700;
		color: #727010;
	}

	.error-box {
		width: 100%;
	}

	.error-list {
		padding-left: 20px;
		list-style-type: disc;
	}

	.error-delete {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 8px;
		border: none;
		border-radius: 50%;
		background-color: #727010;
		color: #f2f8a1;
		cursor: pointer;
	}

	.error-icon {
		width: 16px;
		height: 16px;
	}
</style>
