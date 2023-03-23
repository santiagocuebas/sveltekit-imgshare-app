<script lang="ts">
	export let title: string;
  let visible = false;
</script>

<div>
  <h2>
    {title}
    <button on:click={() => visible = !visible}>
      <i class="fa-solid fa-plus"></i>
    </button>
  </h2>
  {#if visible}
    <slot></slot>
  {/if}
</div>

<style>
  div {
		display: flex;
		flex-wrap: wrap;
		padding: 20px;
		gap: 10px;
	}

	h2 {
		display: flex;
		align-items: center;
		width: 100%;
		font-size: 32px;
		font-weight: 400;
	}

	button {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 48px;
		height: 48px;
		margin-left: auto;
		border: none;
		border-radius: 50%;
		background-color: #ffffff;
		cursor: pointer;
	}

	button:hover {
		background-color: #dddddd;
	}

	i {
		width: 26px;
		font-size: 32px;
		font-weight: 300;
	}
</style>