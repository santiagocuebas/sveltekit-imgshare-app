<script lang="ts">
	import type { PageData } from './$types';
  import type { ResponseForeign } from '$lib/global';
	import { format } from 'timeago.js';
  import { InnerText } from '$lib/enums';
  import { BoxGallery, Gallery, NavUser } from '$lib/components';
	
	export let data: PageData & ResponseForeign;

	$: foreign = data.foreignUser; 
</script>

<Gallery>
	<NavUser text={InnerText.ABOUT} username={data.foreignUser.username} />
	<BoxGallery>
		<div id="about-container">
			<div class="about-box">
				<h2>Description</h2>
				<p>{@html foreign.description}</p>
			</div>
			<div class="about-box">
				<h2>Links</h2>
				<ul>
				{#each foreign.links as link (link.title)}
					<li>
						<a href="{link.url}" target="_blank" rel="noreferrer">
							{link.title}
						</a>
					</li>
				{/each}
				</ul>
			</div>
			<div class="about-statistics">
				<h2>Statistics</h2>
				<p>Join {format(foreign.createdAt)}</p>
				<p>{foreign.totalViews} views</p>
			</div>
		</div>
	</BoxGallery>
</Gallery>

<style lang="postcss">
	#about-container {
		grid-template-columns: 1fr minmax(200px, 20%);
		grid-auto-rows: min-content;
		@apply grid content-start w-full h-full;
	}

	h2 {
		@apply text-[20px] font-medium leading-tight;
	}

	.about-box {
		border-bottom: 1px solid #cccccc;
		@apply flex flex-col w-[90%] mt-5 mx-auto py-2.5 gap-2.5;

		& ul {
			@apply flex flex-wrap;
		}

		& li {
			@apply w-1/2 py-2.5;
		}

		& a {
			@apply w-max text-[#4e7ad8] hover:text-[#9a4ed8];
		}
	}

	.about-statistics {
		grid-column: 2 / span 1;
		grid-row: 1 / span 2;
		@apply w-full h-full max-w-[400px];

		& h2, p {
			border-bottom: 1px solid #cccccc;
			@apply py-2.5;
		}
	}
</style>
