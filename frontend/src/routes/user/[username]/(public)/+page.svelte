<script lang="ts">
	import type { PageData } from './$types';
  import { images } from '$lib/stores/index';
  import { BoxGallery, Gallery, Image, NavUser } from '$lib/components';
	
	export let data: PageData;

	images.setImages(data.images);
</script>

<Gallery>
	<NavUser username={data.foreignUser.username} />
	<BoxGallery>
		{#if $images.length}
			{#each $images as image}
				<Image image={image} />
			{/each}
		{:else}
			<div class="user-message">
				<p>This user hasn't uploaded any image yet</p>
				{#if data.user}
					<a href="/user/{data.user.username}/upload">
						Start now
					</a>
				{/if}
			</div>
		{/if}
	</BoxGallery>
</Gallery>
