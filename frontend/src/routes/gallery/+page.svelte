<script lang="ts">
	import type { PageData } from './$types';
  import type { IImage } from '$lib/types/global';
	import {
		Logo,
		Gallery,
		NavGallery,
		BoxGallery,
		Image
	} from '$lib/components';

	export let data: PageData & { images: IImage[] };
</script>

<Logo />
<Gallery>
	<NavGallery bind:images={data.images} />
	<BoxGallery>
		{#each data.images as image}
			<Image image={image} />
		{/each}
	</BoxGallery>
</Gallery>
