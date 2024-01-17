<script lang="ts">
	import type { IUserExtended } from "$lib/global";
	import axios from "$lib/axios";
	import { DIR } from '$lib/config.js';

	export let users: IUserExtended[];
	let searchedUser = '';

	async function handleSubmit(this: HTMLFormElement) {
		const data = await axios({ url: this.action })
			.then(res => res.data)
			.catch(err => {
				console.error(err?.message);
				return { users: [] }
			});

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
		<div>
			<i class="fa-solid fa-user"></i>
		</div>
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

<style lang="postcss">
	nav {
		border: 3px outset #5383d3;
		@apply flex justify-center w-full min-w-[800px] h-[50px] bg-[#5383d3];
	}

	form {
		grid-template-columns: 50px 1fr 50px;
		@apply grid items-center justify-center w-full max-w-[800px];
	}

	input {
		@apply w-full py-2 px-4 rounded-2xl;
	}

	button, div {
		@apply flex items-center justify-center w-[90%] h-[90%] bg-[#5383d3] text-white [&_i]:text-[20px];
	}
</style>
