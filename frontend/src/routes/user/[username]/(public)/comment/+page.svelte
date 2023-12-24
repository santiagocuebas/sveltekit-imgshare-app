<script lang="ts">
	import type { PageData } from './$types';
  import { beforeUpdate } from 'svelte';
	import { format } from "timeago.js";
  import { InnerText } from '$lib/enums';
	import { BoxGallery, Gallery, NavUser } from '$lib/components';
	
	export let data: PageData;

	let origin = '';

	beforeUpdate(() => origin = location.origin);
</script>

<Gallery>
	<NavUser text={InnerText.COMMENTS} username={data.foreignUser.username} />
	<BoxGallery className='image-row'>
		{#if data.comments.length > 0}
			{#each data.comments as comment}
				<div class="comment-container">
					<a href="/gallery/{comment.imageId}">
						{origin}/gallery/{comment.imageId}
					</a>
					<div class="comment-content">
						{comment.comment}
					</div>
					<p>{format(comment.createdAt)}</p>
				</div>
			{/each}
		{:else}
			<div class="user-message">
				<p>This user hasn't commented yet</p>
			</div>
		{/if}
	</BoxGallery>
</Gallery>

<style lang="postcss">
	.comment-container {
		@apply flex flex-col w-[90%] min-w-[490px] max-w-[600px] mx-auto p-2.5 rounded-xl bg-[#eeeeee] gap-2;

		& a {
			@apply font-bold;
		}
		
		& .comment-content {
			scrollbar-width: none;
			@apply w-full max-h-[120px] overflow-scroll break-words;
		}

		& p {
			@apply ml-auto;
		}
	}
</style>
