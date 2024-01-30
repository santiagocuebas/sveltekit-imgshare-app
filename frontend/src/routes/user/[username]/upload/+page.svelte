<script lang="ts">
	import type { PageServerData } from './$types';
  import type { IImage, IKeys, ResponseSubmit } from '$lib/global';
  import { goto } from '$app/navigation';
	import { ErrorBox, BoxGallery } from '$lib/components';
	import { Method } from '$lib/enums';
  import { handleForm, loadImage } from '$lib/services';

	export let data: PageServerData & { images: IImage[] };

	let isDisabled = false;
	let src = '/label-img.png';
	let upload = '';
	let errors: IKeys<string> | null = null;

	async function handleDrop(e: DragEvent) {
		if (e.dataTransfer) {
			src = await loadImage(e.dataTransfer.files[0]);
			e.dataTransfer.items.clear();
		}
	}

	async function handleImage(this: HTMLInputElement) {
		if (this.files) src = await loadImage(this.files[0]);
	}
	
	async function handleSubmit(this: HTMLFormElement) {
		isDisabled = true;

		const data: ResponseSubmit = await handleForm(this)
			.catch(err => {
				console.log(err.message);
				goto('/');
			});

		if (data.url) goto('/gallery/' + data.url);
		else if (data.errors) {
			errors = data.errors;
			isDisabled = false;
		}
	}
</script>

<div>
	<h2 class="title">
		<i class="fa-solid fa-image title-icon"></i>
		Upload Image
	</h2>
	<form
		action='/image/upload'
		method={Method.POST}
		on:submit|preventDefault={handleSubmit}
	>
		{#if errors}
			<ErrorBox bind:errors={errors} on:click={() => errors = null} />
		{/if}
		<label class="box-image" on:drop|preventDefault={handleDrop}>
			<input type="file" name="image" on:change={handleImage}>
			<img src={src} alt="Of Upload">
		</label>
		<label>
			<input
				type="text"
				name="title"
				placeholder="Title"
				spellcheck="false"
				autocomplete="off"
				bind:value={upload}
			>
		</label>
		<label>
			<textarea
				name="description"
				placeholder="Description"
				rows="5"
				spellcheck="false"
				autocomplete="off"
				maxlength="4200"
			></textarea>
		</label>
		<button disabled={isDisabled || src === '/label-img.png' ||
			upload.length < 3 || upload.length >= 60}>
			<i class="fa-solid fa-upload"></i>
			Upload
		</button>
	</form>
</div>

<div>
	<h2 class="title">
		<i class="fa-solid fa-images title-icon"></i>
		Recent Uploads
	</h2>
	<BoxGallery className='image-upload'>
		{#each data.images as image}
			<picture>
				<a href="/gallery/{image.id}">
					<img src={image.filename} alt={image.title}>
				</a>
			</picture>
		{/each}
	</BoxGallery>
</div>

<style lang="postcss">
	div {
		box-shadow: 0 0 4px #666666;
		@apply flex flex-col w-[600px] bg-white;
	}

	form {
		@apply flex flex-col h-max p-5 gap-y-5;
		
		& .box-image {
			@apply w-[360px] h-[360px] m-auto cursor-pointer;

			& img {
				@apply w-full h-full object-scale-down;
			}
		}
	}

	input, textarea {
		outline: 1px solid #bbbbbb;
		@apply w-full p-3 rounded;

		&:focus {
			outline: 1px solid #5383d3;
		}
	}

	button {
		@apply ml-auto py-3 px-5 bg-[#63c187] rounded text-[18px] font-semibold text-white hover:bg-[#53b177];

		&[disabled] {
			@apply bg-[#dddddd] text-[#666666] cursor-auto;
		}
	}

	picture {
		@apply flex-none w-[196px] h-[200px] py-3 px-1.5;

		& img {
			box-shadow: 0 0 4px #666666;
			@apply w-full h-full object-cover;
		}
	}
</style>
