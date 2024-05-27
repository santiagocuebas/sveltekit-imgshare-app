<script lang="ts">
	import type { IImage } from "$lib/types/global";
	import { goto } from "$app/navigation";
  import axios from "$lib/axios";
	import { clickOutside } from "$lib/services";
	import { Method } from "$lib/types/enums";

	export let image: IImage | null;
	export let description: boolean;
	
	let visible = false;

	const editDescription = () => {
		visible = false;
		description = true;
	};

	const changePublic = async () => {
		visible = false;

		const data = await axios({
			method: Method.POST,
			url: `/image/${image?.id}/public`
		}).then(() => true)
			.catch(() => false);

		
		if (data && image) image.isPublic = !image.isPublic;
	};

	const deleteImage = async () => {
		visible = false;

		axios({ method: Method.DELETE, url: `/image/${image?.id}` })
			.then(() => goto('/'))
			.catch(err => console.log(err.message));
	};
</script>

<div id="image-edit">
	<button on:click={() => visible = !visible}>
		<i class="fa-solid fa-ellipsis"></i>
	</button>
	{#if visible}
		<ul use:clickOutside on:outclick={() => setTimeout(() => visible = false)}>
			<a href="#edit" on:click={editDescription}>
				<li>
					Edit
				</li>
				<i class="fa-solid fa-pen"></i>
			</a>
			<a href="#placeholder" on:click|preventDefault={changePublic}>
				<li>
					Public
				</li>
				<i class="fa-solid fa-{image?.isPublic ? 'eye' : 'eye-slash'}"></i>
			</a>
			<a href="#placeholder" on:click|preventDefault={deleteImage}>
				<li>
					Delete
				</li>
				<i class="fa-solid fa-delete-left"></i>
			</a>
		</ul>
	{/if}
</div>

<style lang="postcss">
	#image-edit {
		@apply flex relative justify-end items-start p-2.5 bg-[#444444];
	}

	button {
		@apply ml-auto px-2 text-white hover:bg-[#606060];
	}
	
	ul {
		box-shadow: 0 0 2px #666666;
		@apply flex absolute flex-col w-[200px] top-8 right-0 py-[5px] rounded bg-[#444444];
	}

	a {
		@apply flex justify-between items-center py-1 px-5 font-bold text-white hover:bg-white hover:text-black;
	}
</style>
