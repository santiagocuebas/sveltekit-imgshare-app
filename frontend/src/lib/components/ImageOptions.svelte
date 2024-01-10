<script lang="ts">
	import type { IImage } from "$lib/global";
	import { goto } from "$app/navigation";
  import axios from "$lib/axios";
	import { clickOutside } from "$lib/services";

	export let image: IImage | null;
	export let description: boolean;
	
	let visible = false;

	const editDescription = () => {
		visible = false;
		description = true;
	};

	const changePublic = async () => {
		visible = false;

		if (image) image.isPublic = !image.isPublic;

		await axios({ method: 'POST', url: `/image/${image?.id}/public` })
			.catch(err => console.log(err.message));
	};

	const deleteImage = async () => {
		visible = false;

		await axios({ method: 'DELETE', url: `/image/${image?.id}` })
			.catch(err => console.log(err.message));

		goto('/');
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
		@apply flex absolute flex-col w-[200px] top-7 right-0 py-[5px] rounded bg-[#444444];
	}

	a {
		@apply flex justify-between items-center py-1 px-5 font-bold text-white cursor-pointer hover:bg-white hover:text-black;
	}
</style>
