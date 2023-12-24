<script lang="ts">
	import type { PageData } from './$types';
  import { InnerText } from '$lib/enums';
  import { images } from '$lib/stores/index';
  import { BoxGallery, Gallery, Image, NavUser } from '$lib/components';
	
	export let data: PageData;

	images.setImages(data.favorites);
</script>

<Gallery>
	<NavUser text={InnerText.FAVORITES} username={data.foreignUser.username} />
	<BoxGallery>
		{#if $images.length > 0}
			{#each $images as image}
				<Image image={image} />
			{/each}
		{/if}
	</BoxGallery>
</Gallery>
