<script lang="ts">
	export let totalComments: number;
</script>

<div class="comments-container">
  <h2 class="title">
		<i class="fa-solid fa-message title-icon"></i>
    {totalComments} Comments
  </h2>
  {#if totalComments > 0}
  <div class="comments-list">
    <slot></slot>
  </div>
  {/if}
</div>

<style>
	.comments-container {
		width: 100%;
    background-color: #ffffff;
		box-shadow: 0 2px 10px #666666;
	}

	.comments-list {
		display: grid;
		grid-auto-rows: min-content;
		padding: 10px;
		row-gap: 10px;
	}
</style>
