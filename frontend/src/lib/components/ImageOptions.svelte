<script lang="ts">
  import axios from "axios";
  import type { IImage } from "$lib/global.js";
	import { clickOutside } from "$lib/services/click-outside";

	export let image: IImage;
	export let visible: boolean;
	export let description: boolean;

	const editDescription = () => {
		visible = false;
		description = true;
	};

	const changePublic = async () => {
		visible = false;

		await axios({
			method: 'POST',
			url: `http://localhost:4200/api/image/${image.id}/public`,
			withCredentials: true
		});

		image.isPublic = !image.isPublic;
	};

	const deleteImage = async () => {
		visible = false;

		await axios({
			method: 'DELETE',
			url: `http://localhost:4200/api/image/${image.id}`,
			withCredentials: true
		});

		window.location.href = '/';
	};
</script>

<ul use:clickOutside on:outclick={() => visible = false}>
	<a href="#edit" on:click={editDescription}>
		<li>Edit</li>
		<i class="fa-solid fa-pen"></i>
	</a>
	<a href="#placeholder" on:click|preventDefault={changePublic}>
		<li>Public</li>
		{#if image.isPublic}
		<i class="fa-solid fa-eye"></i>
		{:else}
		<i class="fa-solid fa-eye-slash"></i>
		{/if}
	</a>
	<a href="#placeholder" on:click|preventDefault={deleteImage}>
		<li>Delete</li>
		<i class="fa-solid fa-delete-left"></i>
	</a>
</ul>

<style>
	ul {
		display: grid;
		position: absolute;
		width: 200px;
		top: 0;
		right: 0;
		margin-top: 30px;
		padding: 5px 0;
		border-radius: 4px;
		background-color: #444444;
		box-shadow: 0 0 10px 2px #666666;
	}

	a {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 5px 20px;
		font-weight: 700;
		color: #ffffff;
		cursor: pointer;
	}

	a:hover {
		background-color: #ffffff;
		color: #000000;
	}
</style>
