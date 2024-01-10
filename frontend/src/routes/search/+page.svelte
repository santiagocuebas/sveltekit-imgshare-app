<script lang="ts">
	import type { PageData } from './$types';
  import type { IImage } from '$lib/global';
	import { afterNavigate } from '$app/navigation';
	import { Logo, Gallery, BoxGallery, Image } from '$lib/components';
  import { images } from '$lib/stores';

	export let data: PageData & { images: IImage[] };

	images.setImages(data.images)

	afterNavigate(async () => images.setImages(data.images));
</script>

<Logo />
<Gallery>
	<div>
		<i class="fa-solid fa-images fa-lg"></i>
		IMAGES
	</div>
	<BoxGallery>
		{#each $images as image}
			<Image image={image} />
		{/each}
	</BoxGallery>
</Gallery>

<style lang="postcss">
	div {
		@apply flex relative flex-none items-center w-full p-2 bg-[#5383d3] text-[20px] font-bold text-white leading-tight gap-2.5;
	}
</style>
