<script lang="ts">
	import type { PageData } from './$types';
  import type { ResponseForeign } from '$lib/global';
  import { BoxGallery, Gallery, Image, NavUser } from '$lib/components';
	import { PublicText } from '$lib/enums';
  import { images, user } from '$lib/stores';
	
	export let data: PageData & ResponseForeign;

	$: ({ username } = data.foreignUser);

	let isPrivate = PublicText.PUBLIC;

	images.setImages(data.images);
</script>

<Gallery>
	<NavUser username={username} bind:isPrivate={isPrivate} />
	<BoxGallery>
		{#if $images.length}
			{#each $images as image}
				<Image image={image} />
			{/each}
		{:else}
			<div class="user-message">
				<p>
					{
						(isPrivate === PublicText.PRIVATE)
							? `This user does not have any images in private yet`
							: `This user hasn't uploaded any image yet`
					}
				</p>
				{#if $user?.username === username && isPrivate !== PublicText.PRIVATE}
					<a href="/user/{username}/upload">
						Start now
					</a>
				{/if}
			</div>
		{/if}
	</BoxGallery>
</Gallery>
