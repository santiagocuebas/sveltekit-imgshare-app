<script lang="ts">
	import type { PageData } from './$types';
  import type { ResponseForeign } from '$lib/global';
  import { BoxGallery, Gallery, Image, NavUser } from '$lib/components';
	import { PublicText } from '$lib/enums';
  import { user } from '$lib/stores';
	
	export let data: PageData & ResponseForeign;

	let isPrivate = PublicText.PUBLIC;
	let images = data.images;

	$: ({ username } = data.foreignUser);
</script>

<Gallery>
	<NavUser bind:images={images} bind:isPrivate={isPrivate} {username} />
	<BoxGallery>
		{#if images.length}
			{#each images as image}
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
