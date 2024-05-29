<script lang="ts">
	import type { IImage } from "$lib/types/global";
  import { DIR } from "$lib/config";
	import { format } from "timeago.js";

	export let image: IImage;
</script>

<a href="/gallery/{image.id}" title="{image.title}">
	<picture>
		<img src={image.filename} alt={image.title}>
	</picture>
	<h2>
		{image.title}
	</h2>
	<p>
		{DIR + '/' + image.author}
	</p>
	<div>
		{image.views} views &#x25CF; {format(image.createdAt)}
	</div>
</a>

<style lang="postcss">
	a {
		grid-template-columns: 80px 1fr;
		grid-auto-rows: min-content min-content 1fr;
		@apply grid items-center w-full p-2.5 gap-x-2.5 hover:bg-[#dddddd];
	}

	picture {
		grid-row: 1 / span 3;
		@apply w-20 h-20;

		& img {
			@apply w-full h-full object-cover;
		}
	}
	
	h2 {
		@apply truncate text-[20px] font-semibold leading-tight;
	}

	p {
		@apply truncate font-medium leading-tight;
	}

	div {
		@apply self-end justify-self-end truncate text-[#666666] leading-tight;
	}
</style>
