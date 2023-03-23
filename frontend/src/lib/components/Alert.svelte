<script lang="ts">
  import axios from "axios";

	export let alert: boolean;

	const deleteUser = async () => {
		alert = false;

		await axios({
			method: 'DELETE',
			url: 'http://localhost:4200/api/settings/deleteuser',
			withCredentials: true
		});

		window.location.href = '/';
	};
</script>

<div class="alert-absolute">
	<div class="alert-container">
		<p>Are you sure want delete this user?</p>
		<button on:click|preventDefault={() => alert = false}>
			Cancel
		</button>
		<button class="blue" on:click|preventDefault={deleteUser}>
			Accept
		</button>
	</div>
</div>

<style>
	.alert-absolute {
		display: grid;
		position: fixed;
		justify-content: center;
		width: 100vw;
		height: 100vh;
		top: 0;
		background-color: #000000bb;
		z-index: 1000;
	}

	.alert-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		width: fit-content;
		height: min-content;
		margin-top: 100px;
		padding: 20px;
		background-color: #ffffff;
	}

	p {
		width: 100%;
		margin-bottom: 20px;
		text-align: center;
		text-overflow: break-word;
		font-size: 24px;
		font-weight: 700;
	}

	button {
		width: 100px;
		padding: 8px 0;
		border: none;
		background-color: #c23838;
		font-size: 20px;
		font-weight: 700;
		color: #ffffff;
		box-shadow: 0 0 0 2px #444444;
		cursor: pointer;
	}

	.blue {
		background-color: #384dc2;
	}
</style>
