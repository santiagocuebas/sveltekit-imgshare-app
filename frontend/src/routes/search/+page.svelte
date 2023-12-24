<script lang="ts">
	import type { PageData } from './$types';
  import { onMount } from 'svelte';
    import { afterNavigate } from '$app/navigation';
	import { images } from '$lib/stores';
	import {
		Logo,
		Gallery,
		NavGallery,
		BoxGallery,
		Image
	} from '$lib/components';
	
	export let data: PageData;

	onMount(() => images.setImages(data.images));

	afterNavigate(() => images.setImages(data.images))
</script>

<Logo />
<Gallery>
	<NavGallery visibleBox={false} />
	<BoxGallery>
		{#each $images as image}
			<Image image={image} />
		{/each}
	</BoxGallery>
</Gallery>
