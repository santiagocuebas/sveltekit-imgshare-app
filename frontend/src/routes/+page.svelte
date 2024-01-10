<script lang="ts">
	import type { PageData } from './$types';
  import type { IImage } from '$lib/global';
	import {
		Logo,
		Gallery,
		NavGallery,
		BoxGallery,
		Image
	} from '$lib/components';
  import { images } from '$lib/stores';

	export let data: PageData & { images: IImage[] };

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
