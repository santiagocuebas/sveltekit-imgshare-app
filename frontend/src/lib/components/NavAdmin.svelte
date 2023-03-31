<script lang="ts">
	import axios from "axios";
	import type { IUserExtended } from "$lib/global";
	import { DIR } from '$lib/config.js';

	export let users: IUserExtended[];
	let searchedUser = '';

	async function handleSubmit(this: HTMLFormElement) {
		const data = await axios({
			method: this.method,
			url: this.action,
			withCredentials: true
		}).then(res => res.data);

		searchedUser = '';
		users = data.users;
	}
</script>

<nav>
	<form
		action="{DIR}/api/admin/{searchedUser}"
		method="GET"
		on:submit|preventDefault={handleSubmit}
	>
		<i class="fa-solid fa-user"></i>
		<input
			type="text"
			name="username"
			placeholder="Search User"
			bind:value={searchedUser}
		>
		<button>
			<i class="fa-solid fa-magnifying-glass"></i>
		</button>
	</form>
</nav>

<style>
	nav {
		display: flex;
		justify-content: center;
		width: 100%;
		min-width: 800px;
		height: 50px;
		border: 3px outset #5383d3;
		background-color: #5383d3;
	}

	form {
		display: grid;
		grid-template-columns: 50px 1fr 50px;
		align-items: center;
		justify-items: center;
		width: 100%;
		max-width: 800px;
	}

	i {
		font-size: 20px;
		color: #ffffff;
	}

	input {
		width: 100%;
		padding: 8px 15px;
		border: none;
		outline: none;
		border-radius: 15px;
	}

	button {
		width: 90%;
		height: 90%;
		border: none;
		background-color: #5383d3;
		cursor: pointer;
	}
</style>
