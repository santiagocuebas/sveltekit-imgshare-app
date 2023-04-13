<script lang="ts">
  export let deleteUser: () => void;
</script>

<div class="alert-container">
  <div>
    <p>Are you sure want delete this user?</p>
    <button on:click>
      Cancel
    </button>
    <button class="blue" on:click={deleteUser}>
      Accept
    </button>
  </div>
</div>

<style>
	.alert-container {
		display: grid;
		position: fixed;
		justify-content: center;
		width: 100vw;
		height: 100vh;
		top: 0;
		background-color: #000000aa;
		z-index: 1000;
	}

	.alert-container div {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		width: min-content;
		height: min-content;
		margin-top: 120px;
		padding: 20px 50px;
		background-color: #ffffff;
		row-gap: 10px;
	}

	.alert-container p {
		width: max-content;
		text-align: center;
		font-weight: 500;
	}

	.alert-container button {
		width: 100px;
		padding: 8px 0;
		border: none;
		border-radius: 12px;
		background-color: #c23838;
		box-shadow: 0 0 0 1px #666666;
		font-weight: 500;
		color: #ffffff;
		cursor: pointer;
	}

	.alert-container .blue {
		background-color: #384dc2;
	}
</style>
