<script lang="ts">
	import type { PageData } from './$types';
  import BoxGallery from '$lib/components/BoxGallery.svelte';
  import Gallery from '$lib/components/Gallery.svelte';
  import CommentUser from '$lib/components/CommentUser.svelte';
  import NavUser from '$lib/components/NavUser.svelte';
	
	export let data: PageData;
</script>

<Gallery className='gallery-user'>
	<NavUser
		innerText='COMMENTS'
		username={data.foreignUser?.username}
		author={data.user?.username}
		bind:images={data.images}
	/>
	<BoxGallery className='image-row'>
		{#if data.comments.length > 0}
			{#each data.comments as comment}
				<CommentUser comment={comment} />
			{/each}
		{:else}
			<div class="user-message">
				<p>
					This user hasn't commented yet
				</p>
			</div>
		{/if}
	</BoxGallery>
</Gallery>
