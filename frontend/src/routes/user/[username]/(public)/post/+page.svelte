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
		username={data.foreignUser?.username}
		role={data.user?.role}
		author={data.user?.username}
		bind:images={data.images}
	/>
	<BoxGallery className='image-cell'>
		{#if data.images.length > 0}
			{#each data.images as image}
				<Image image={image} />
			{/each}
		{:else}
			<div class="user-message user-column">
				<p>
					This user hasn't uploaded any image yet
				</p>
				{#if data.user}
				<a href="/user/{data.user.username}/upload">
					Start now
				</a>
				{/if}
			</div>
		{/if}
	</BoxGallery>
</Gallery>
