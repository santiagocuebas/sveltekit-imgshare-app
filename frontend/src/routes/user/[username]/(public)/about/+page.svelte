<script lang="ts">
	import { format } from 'timeago.js';
	import type { PageData } from './$types';
  import BoxGallery from '$lib/components/BoxGallery.svelte';
  import Gallery from '$lib/components/Gallery.svelte';
  import NavUser from '$lib/components/NavUser.svelte';
	
	export let data: PageData;
</script>

<Gallery className='gallery-user'>
	<NavUser innerText='ABOUT' username={data.foreignUser.username} author={data.user?.username} bind:images={data.images} />
	<BoxGallery className='image-row'>
		<div class="about-container">
			<div class="about-box">
				<h2>Description</h2>
				<p>{@html data.foreignUser.description}</p>
			</div>
			<div class="about-box">
				<h2>Links</h2>
				<div>
				{#each data.foreignUser.links as link (link.title)}
					<span>
						<a href="{link.url}" target="_blank" rel="noreferrer">
							{link.title}
						</a>
					</span>
				{/each}
				</div>
			</div>
			<div class="about-statistics">
				<h2>Statistics</h2>
				<p>Join {format(data.foreignUser.createdAt)}</p>
				<p>{data.foreignUser.totalViews} views</p>
			</div>
		</div>
	</BoxGallery>
</Gallery>

<style>
	.about-container {
		display: grid;
		grid-template-columns: repeat(3, minmax(160px, 1fr));
		grid-auto-rows: min-content;
		justify-items: center;
	}

	.about-box {
		grid-column: 1 / span 2;
		display: flex;
		flex-wrap: wrap;
		width: 90%;
		max-width: 900px;
		min-width: 300px;
		padding: 10px 0;
		border-bottom: 1px solid #cccccc;
		gap: 10px;
	}

	.about-box p {
		width: 100%;
		min-height: 20px;
	}

	.about-box div {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		min-height: 20px;
	}

	.about-box span {
		width: 50%;
		padding: 10px 0;
	}

	.about-box a {
		width: max-content;
		color: #4e7ad8;
	}

	.about-box a:hover {
		color: #9a4ed8;
	}

	.about-statistics {
		grid-column: 3 / span 1;
		grid-row: 1 / span 3;
		width: 100%;
		max-width: 400px;
	}

	h2 {
		width: 100%;
		font-size: 20px;
		font-weight: 500;
	}

	.about-statistics h2 {
		padding: 10px 0;
		border-bottom: 1px solid #cccccc;
	}

	.about-statistics p {
		width: 100%;
		padding: 10px 0;
		border-bottom: 1px solid #cccccc;
	}
</style>
