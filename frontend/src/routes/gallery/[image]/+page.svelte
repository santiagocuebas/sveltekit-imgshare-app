<script lang="ts">
	import type { PageData } from './$types';
	import ImageBox from '$lib/components/ImageBox.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import CommentsContainer from '$lib/components/CommentsContainer.svelte';
	import Register from '$lib/components/Register.svelte';
	import CommentForm from '$lib/components/CommentForm.svelte';
  import CommentsBox from '$lib/components/CommentsBox.svelte';
  import BoxGallery from "$lib/components/BoxGallery.svelte";
  import Comment from '$lib/components/Comment.svelte';
	import SideImage from '$lib/components/SideImage.svelte';
	import ImageOptions from '$lib/components/ImageOptions.svelte';
	import ImageIcon from '$lib/components/ImageIcon.svelte';
	
	export let data: PageData;
	let visible = false;
	let description = false;
</script>

<div class="image-container">
	<ImageBox image={data.image} user={data.user} bind:visible={visible} bind:description={description}>
		{#if visible}
			<ImageOptions bind:image={data.image} bind:visible={visible} bind:description={description}/>
		{/if}
		<div class="image-stats" slot='assessment'>
			<ImageIcon bind:object={data.image} user={data.user} include={data.image.like.includes(data.user?.username)} assessment={data.image.like.length} />
			<ImageIcon bind:object={data.image} user={data.user} id='dislike' icon='fa-thumbs-down' assessment={data.image.dislike.length} include={data.image.dislike.includes(data.user?.username)} />
			<ImageIcon bind:object={data.image} user={data.user} id='fav' fav={true} icon='fa-star' assessment={data.image.favorite.length} include={data.image.favorite.includes(data.user?.username)} />
		</div>
	</ImageBox>
	<Sidebar>
		<BoxGallery className='image-sidebar'>
			{#each data.sidebar as image}
				<SideImage image={image} />
			{/each}
		</BoxGallery>
	</Sidebar>
	<CommentsContainer>
		{#if data.user}
			<CommentForm imageId={data.image.id} avatar={data.user.avatar} bind:comments={data.comments} />
			{:else}
			<Register />
		{/if}
		<CommentsBox totalComments={data.comments.length}>
			{#each data.comments as comment (comment.id)}
				<Comment bind:comments={data.comments} bind:comment={comment} user={data.user}>
					<ImageIcon bind:object={comment} user={data.user} text='comment' assessment={comment.like.length} className='grey' include={comment.like.includes(data.user?.username)} />
					<ImageIcon bind:object={comment} user={data.user} id='dislike' text='comment' icon='fa-solid fa-thumbs-down' className='grey' assessment={comment.dislike.length} include={comment.dislike.includes(data.user?.username)} />
				</Comment>
			{/each}
		</CommentsBox>
	</CommentsContainer>
</div>

<style>
	.image-container {
		display: grid;
		grid-template-columns: repeat(6, minmax(85px, 1fr));
		grid-auto-rows: min-content 1fr;
		width: 90%;
		min-width: 510px;
		max-width: 1520px;
	}
	
	.image-stats {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		height: 56px;
		padding-right: 30px;
		background-color: #5383d3;
		color: #ffffff;
		gap: 60px;
	}
</style>
