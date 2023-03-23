<script lang="ts">
  import BoxGallery from '$lib/components/BoxGallery.svelte';
	import Gallery from '$lib/components/Gallery.svelte';
	import NavGallery from '$lib/components/NavGallery.svelte';
	import Logo from '$lib/components/Logo.svelte';
	import Image from '$lib/components/Image.svelte';
	import type { PageData } from './$types';
	
	export let data: PageData;
</script>

<Logo />
<Gallery>
	<NavGallery bind:images={data.images} visibleBox={false} />
	<BoxGallery className='image-cell'>
		{#each data.images as image}
			<Image image={image} />
		{/each}
	</BoxGallery>
</Gallery>
