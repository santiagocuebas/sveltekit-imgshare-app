<script lang="ts">
	import type { PageData } from './$types';
  import type { ResponseForeign } from '$lib/global';
  import { BoxGallery, Gallery, Image, NavUser } from '$lib/components';
  import { InnerText } from '$lib/enums';
	
	export let data: PageData & ResponseForeign;
</script>

<Gallery>
	<NavUser text={InnerText.FAVORITES} username={data.foreignUser.username} />
	<BoxGallery>
		{#if data.favorites.length > 0}
			{#each data.favorites as image}
				<Image image={image} />
			{/each}
		{/if}
	</BoxGallery>
</Gallery>
