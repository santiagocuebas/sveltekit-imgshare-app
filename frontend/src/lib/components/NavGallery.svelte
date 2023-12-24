<script lang="ts">
  import type { AxiosError } from "axios";
	import type { ResponseData } from "$lib/global";
  import axios from "axios";
	import { DIR } from '$lib/config.js';
	import { OrderText } from '$lib/enums.js';
	import { clickOutside } from "$lib/services/click-outside";
  import { images } from "$lib/stores/index";

	export let visibleBox: boolean = true;

	let visible = false;
	let selectText: string = OrderText.NEWEST;

	async function handleSubmit(choise: string) {
		selectText = choise.toUpperCase();
		visible = false;

		const data: ResponseData = await axios
			.get(`${DIR}/api/gallery/order/${selectText}`)
			.then(res => res.data)
			.catch((err: AxiosError) => {
				console.error(err.message);
				return [];
			});

		images.setImages(data.images)
	}
</script>

<div>
	<i class="fa-solid fa-images fa-lg"></i>
	IMAGES
	{#if visibleBox}
		<button on:click={() => visible = !visible}>
			{selectText.toUpperCase()}
			<i class="fa-solid fa-caret-down"></i>
		</button>
		{#if visible}
			<ul use:clickOutside on:outclick={() => setTimeout(() => visible = false)}>
				{#each Object.values(OrderText) as text}
					<li role="none" on:click={() => handleSubmit(text)}>
						{text.toUpperCase()}
					</li>
				{/each}
			</ul>
		{/if}
	{/if}
</div>

<style lang="postcss">
	div {
		@apply flex relative flex-none items-center w-full p-2 bg-[#5383d3] text-[20px] font-bold text-white leading-tight gap-2.5;
	}

	button {
		@apply flex relative items-center justify-center w-[120px] ml-auto bg-[#5383d3] text-[20px] font-bold text-white cursor-pointer gap-1;
	}

	ul {
		box-shadow: 0 0 4px #666666;
		@apply flex absolute flex-col self-start w-[120px] right-2 mt-7 py-1 bg-white text-black z-[70];
	}

	li {
		@apply w-full py-1 text-center cursor-pointer hover:bg-[#dddddd];
	}
</style>
