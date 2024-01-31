<script lang="ts">
	import type { IImage } from '$lib/global';
	import axios from '$lib/axios';
	import { Method, OrderText } from '$lib/enums';
	import { clickOutside } from "$lib/services";

	export let images: IImage[];
	let visible = false;
	let selectText: string = OrderText.NEWEST;

	async function handleSubmit(choise: string) {
		selectText = choise.toUpperCase();
		visible = false;

		images = await axios({
			method: Method.GET,
			url: `/gallery/order/${choise.toUpperCase()}`
		}).then(res => res.data)
			.then(data => data.images)
			.catch(err => {
				console.error(err.message);
				return [];
			});
	}
</script>

<div>
	<i class="fa-solid fa-images fa-lg"></i>
	IMAGES
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
</div>

<style lang="postcss">
	div {
		@apply flex relative flex-none items-center w-full p-2 bg-[#5383d3] text-[20px] font-bold text-white leading-tight gap-2.5;
	}

	button {
		@apply flex relative items-center justify-center w-[120px] ml-auto gap-1;
	}

	ul {
		box-shadow: 0 0 4px #666666;
		@apply flex absolute flex-col self-start w-[128px] right-2 mt-8 py-[5px] bg-white text-black z-[70];
	}

	li {
		@apply w-full py-[5px] text-center text-[18px] cursor-pointer hover:bg-[#dddddd];
	}
</style>
