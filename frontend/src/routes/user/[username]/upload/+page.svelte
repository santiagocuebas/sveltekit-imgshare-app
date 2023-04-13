<script lang="ts">
	import type { PageData } from './$types';
	import { DIR } from '$lib/config.js';
	import Form from '$lib/components/Form.svelte';
	import ErrorBox from '$lib/components/ErrorBox.svelte';
	import BoxGallery from '$lib/components/BoxGallery.svelte';
	import { handleImage } from '$lib/services/handle-image';

	export let data: PageData;
	let errors: any = {};
	let visible = false;
	
	const setErrors = (data: any) => errors = data;
</script>

<div>
	<h2 class="title">
		<i class="fa-solid fa-image title-icon"></i>
		Upload Image
	</h2>
	<Form action='{DIR}/api/image/upload' prefix='/gallery' bind:show={visible} errors={setErrors}>
		{#if visible}
			<ErrorBox on:click={() => visible = false} errors={errors} />
		{/if}
		<label>
			<input type="file" name="image" on:change={handleImage}>
		</label>
		<input class="upload-input" type="text" name="title" placeholder="Title" spellcheck="false" autocomplete="off">
		<textarea class="upload-input" name="description" placeholder="Description" rows="3" spellcheck="false" autocomplete="off"></textarea>
		<button>
			<i class="fa-solid fa-upload"></i>
			Upload
		</button>
	</Form>
</div>
<div>
	<h2 class="title">
		<i class="fa-solid fa-images title-icon"></i>
		Recent Uploads
	</h2>
	<BoxGallery className='image-upload'>
		{#each data.images as image}
			<a href="/gallery/{image.id}">
				<img src="{DIR}/uploads/{image.filename}" alt={image.title}>
			</a>
		{/each}
	</BoxGallery>
</div>

<style>
	div {
		display: flex;
		flex-wrap: wrap;
		width: 600px;
		height: min-content;
		background-color: #ffffff;
		box-shadow: 0 2px 10px #666666;
	}

	label {
		width: 480px;
		height: 270px;
		margin: auto;
		background-image: url('/label-img.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
		cursor: pointer;
	}

	input[type='file'] {
		display: none;
	}

	.upload-input {
		width: 100%;
		padding: 12px;
		border: none;
		outline: 1px solid #bbbbbb;
		border-radius: 4px;
	}

	.upload-input:focus {
		outline: 1px solid #5383d3;
	}

	button {
		margin-left: auto;
		padding: 12px 20px;
		background: #63c187;
		border: none;
		border-radius: 4px;
		font-size: 18px;
		font-weight: 600;
		color: #ffffff;
		cursor: pointer;
	}

	button:hover {
		background: #53b177;
	}

	a {
		width: 180px;
		height: 180px;
		box-shadow: 0 0 1px 2px #666666;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
