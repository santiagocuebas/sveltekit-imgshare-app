<script lang="ts">
	import type { PageData } from './$types';
  import type { IImage } from '$lib/global';
	import { Logo, Gallery, BoxGallery, Image } from '$lib/components';

	export let data: PageData & { images: IImage[] };
</script>

<Logo />
<Gallery>
	<div>
		<i class="fa-solid fa-images fa-lg"></i>
		IMAGES
	</div>
	<BoxGallery>
		{#each data.images as image}
			<Image image={image} />
		{/each}
	</BoxGallery>
</Gallery>

<style lang="postcss">
	div {
		@apply flex relative flex-none items-center w-full p-2 bg-[#5383d3] text-[20px] font-bold text-white leading-tight gap-2.5;
	}
</style>
