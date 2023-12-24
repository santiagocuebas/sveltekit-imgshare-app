<script lang="ts">
	import type { PageData } from './$types';
  import { images } from '$lib/stores/index';
	import {
		Logo,
		Gallery,
		NavGallery,
		BoxGallery,
		Image
	} from '$lib/components';
	
	export let data: PageData;

	images.setImages(data.images);
</script>

<Logo />
<Gallery>
	<NavGallery />
	<BoxGallery>
		{#each $images as image}
			<Image image={image} />
		{/each}
	</BoxGallery>
</Gallery>
