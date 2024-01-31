<script lang="ts">
	import { goto } from "$app/navigation";
  import axios from "$lib/axios";
  import { Method } from "$lib/enums";
  import { user } from "$lib/stores";

	export let alert: boolean;

	const deleteUser = async () => {
		alert = false;

		await axios({ method: Method.DELETE, url: `/settings/deleteuser` });

		user.resetUser();
		goto('/');
	};
</script>

<div class="alert-absolute">
	<div>
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
		@apply flex fixed justify-center w-screen min-w-[510px] h-screen top-0 bg-[#000000bb] z-[1000];

		& div {
			@apply flex justify-around flex-wrap w-fit max-w-[600px] h-min mt-32 p-5 bg-white rounded-xl;
		}
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
