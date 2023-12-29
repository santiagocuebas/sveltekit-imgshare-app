<script lang="ts">
	import type { PageServerData } from './$types';
  import type { ResponseImage } from '$lib/global';
	import { afterUpdate } from 'svelte';
	import { UserRole } from '$lib/enums';
	import { user } from '$lib/stores';
	import {
		ImageBox,
		Register,
		CommentForm,
		BoxGallery,
		Comment,
		SideImage,
		ImageOptions
	} from '$lib/components';
	
	export let data: PageServerData & ResponseImage;
	
	let description = false;
	let isValidUser = false;

	$: ({ image, comments, sidebarImages } = data);

	afterUpdate(() => {
		isValidUser = $user !== null && ($user?.username === image.author ||
			$user?.role !== UserRole.EDITOR);
	});
</script>

<div id="image-container">
	<div id="image-box">
		<ImageBox bind:image={image} bind:description={description}>
			{#if isValidUser}
				<ImageOptions bind:image={image} bind:description={description} />
			{/if}
		</ImageBox>
	</div>
	<div id="sidebar">
		<div>
			<h2 class="title">
				<i class="fa-solid fa-images title-icon"></i>
				Recent Uploads
			</h2>
			<BoxGallery className='image-sidebar'>
				{#each sidebarImages ?? [] as image}
					<SideImage image={image} />
				{/each}
			</BoxGallery>
		</div>
	</div>
	<div id="comment-container">
		{#if $user}
			<CommentForm bind:comments={comments} />
			{:else}
			<Register />
		{/if}
		<div id="comments-container">
			<h2 class="title">
				<i class="fa-solid fa-message title-icon"></i>
				{comments.length} Comments
			</h2>
			{#if comments.length}
				<div>
					{#each comments as comment (comment.id)}
						<Comment bind:comments={comments} bind:comment={comment} />
					{/each}
				</div>
			{/if}
		</div>
	</div>
</div>

<style lang="postcss">
	#image-container {
		grid-template-columns: repeat(3, minmax(170px, 1fr));
		grid-auto-rows: min-content 1fr;
		@apply grid w-[90%] min-w-[510px] max-w-[1520px];
	}

	#image-box {
		grid-column: 1 / span 2;
		box-shadow: 0 0 4px #666666;
		@apply flex flex-col bg-white;

		@media (width < 1040px) {
			grid-column: 1 / span 3;
		}
	}

	#sidebar {
		grid-column: 3 / span 1;
		grid-row: 1 / span 2;
		
		& div {
			box-shadow: 0 0 4px #666666;
			@apply ml-5 bg-white;
		}
			
		@media (max-width: 1040px) {
			@apply hidden;
		}
	}

	#comment-container {
		grid-column: 1 / span 2;
		@apply flex flex-wrap mt-5 gap-5;

		@media (max-width: 1040px) {
			grid-column: 1 / span 3;
		}
	}

	#comments-container {
		box-shadow: 0 0 4px #666666;
		@apply w-full bg-white;

		& div {
			@apply flex flex-col p-2.5 gap-2.5;
		}
	}
</style>
