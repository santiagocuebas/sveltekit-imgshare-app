<script lang="ts">
	import { goto } from "$app/navigation";
  import axios from "axios";
	import { DIR } from '$lib/config.js';
  import { user } from "$lib/stores/user-store";

	export let alert: boolean;

	const deleteUser = async () => {
		alert = false;

		await axios({
			method: 'DELETE',
			url: `${DIR}/api/settings/deleteuser`,
			withCredentials: true
		});

		user.resetUser();
		goto('/');
	};
</script>

<div class="alert-absolute">
	<div class="alert-container">
		<p>Are you sure want delete this user?</p>
		<button on:click={() => alert = false}>
			Cancel
		</button>
		<button class="blue" on:click={deleteUser}>
			Accept
		</button>
	</div>
</div>

<style lang="postcss">
	.alert-absolute {
		@apply flex fixed justify-center w-screen h-screen top-0 bg-[#000000bb] z-[1000];
	}

	.alert-container {
		@apply flex flex-col justify-around w-fit h-min mt-[100px] p-5 bg-white;
	}

	p {
		@apply w-full mb-5 text-center break-words text-[24px] font-bold;
	}

	button {
		box-shadow: 0 0 0 2px #444444;
		@apply w-[100px] py-2 bg-[#c23838] text-[20px] font-bold text-white
		[&.blue]:bg-[#384dc2];
	}
</style>
