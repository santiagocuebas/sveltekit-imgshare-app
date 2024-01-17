<script lang="ts">
	import type { PageData } from './$types';
  import type { IImage, IKeys, ResponseData } from '$lib/global';
  import { goto } from '$app/navigation';
	import { DIR } from '$lib/config.js';
	import { ErrorBox, BoxGallery } from '$lib/components';
  import { ValidExt } from '$lib/enums';
  import { handleRequest } from '$lib/services';

	export let data: PageData & { images: IImage[] };

	let errors: IKeys<string> | null = null;
	let src = '/label-img.png';

	function handleImage(this: HTMLInputElement) {
		const reader = new FileReader();
		const [file] = this.files ?? [];
		const validExt: string[] = Object.values(ValidExt);

		reader.addEventListener('load', ({ target }) => {
			src = target?.result as string ?? src;
		}, false);

		if (file && file.size < 2 * 1e7 && validExt.includes(file.type)) {
			reader.readAsDataURL(file);
		}
	}
	
	async function handleSubmit(this: HTMLFormElement) {
		const data: ResponseData = await handleRequest(this)
			.catch(err => {
				console.log(err.message);
				return { redirect: true };
			});

		if (data.redirect) goto('/');
		else if (data.url) goto('/gallery/' + data.url);
		else if (data.errors) errors = data.errors;
	}
</script>

<div>
	<h2 class="title">
		<i class="fa-solid fa-image title-icon"></i>
		Upload Image
	</h2>
	<form
		action='{DIR}/api/image/upload'
		method="POST"
		on:submit|preventDefault={handleSubmit}
	>
		{#if errors}
			<ErrorBox bind:errors={errors} on:click={() => errors = null} />
		{/if}
		<label>
			<input type="file" name="image" on:change={handleImage}>
			<img src={src} alt="">
		</label>
		<input
			type="text"
			name="title"
			placeholder="Title"
			spellcheck="false"
			autocomplete="off"
		>
		<textarea
			name="description"
			placeholder="Description"
			rows="5"
			spellcheck="false"
			autocomplete="off"
		></textarea>
		<button>
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
		
		& label {
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
	}

	picture {
		@apply flex-none w-[196px] h-[200px] py-3 px-1.5;

		& img {
			box-shadow: 0 0 4px #666666;
			@apply w-full h-full object-cover;
		}
	}
</style>
