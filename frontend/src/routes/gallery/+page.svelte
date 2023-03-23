<script lang="ts">
	import type { PageData } from './$types';
	import Logo from '$lib/components/Logo.svelte';
	import Gallery from '$lib/components/Gallery.svelte';
	import NavGallery from '$lib/components/NavGallery.svelte';
	import BoxGallery from '$lib/components/BoxGallery.svelte';
	import Image from '$lib/components/Image.svelte';
	
	export let data: PageData;
</script>

<Logo />
<Gallery>
	<NavGallery bind:images={data.images} />
	<BoxGallery className='image-cell'>
		{#each data.images as image}
			<Image image={image} />
		{/each}
	</BoxGallery>
</Gallery>
