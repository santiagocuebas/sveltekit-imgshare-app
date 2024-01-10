<script lang="ts">
	import type { PageData } from './$types';
  import type { ResponseData } from '$lib/global';
  import { images, user } from '$lib/stores';
  import { BoxGallery, Gallery, Image, NavUser } from '$lib/components';
	
	export let data: PageData & ResponseData;

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
				{#if $user}
					<a href="/user/{$user.username}/upload">
						Start now
					</a>
				{/if}
			</div>
		{/if}
	</BoxGallery>
</Gallery>

<style lang="postcss">
	.user-message {
		@apply flex flex-col items-center justify-evenly w-60 h-60 mx-auto text-[20px] font-bold;

		& p {
			@apply text-center break-words;
		}

		& a {
			@apply py-2 px-4 rounded-md bg-[#5383d3] text-[20px] font-bold text-white cursor-pointer;
		}
	}
</style>
