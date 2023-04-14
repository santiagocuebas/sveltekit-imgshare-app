<script lang="ts">
	import type { PageData } from './$types';
  import BoxGallery from '$lib/components/BoxGallery.svelte';
  import Gallery from '$lib/components/Gallery.svelte';
  import Image from '$lib/components/Image.svelte';
  import NavUser from '$lib/components/NavUser.svelte';
	
	export let data: PageData;
</script>

<Gallery className='gallery-user'>
	<NavUser
		username={data.foreignUser.username}
		author={data.user?.username}
		innerText='FAVORITES'
		bind:images={data.favorites}
	/>
	<BoxGallery className='image-cell'>
		{#if data.favorites.length > 0}
			{#each data.favorites as image}
				<Image image={image} />
			{/each}
		{/if}
	</BoxGallery>
</Gallery>
