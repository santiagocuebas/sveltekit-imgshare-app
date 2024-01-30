<script lang="ts">
  import type { IImage, IKeys } from "$lib/global";
	import axios from "$lib/axios";
  import { SelectIcon } from "$lib/dictionary";
  import { InnerText, Method, OrderText, PublicText, UserRole } from "$lib/enums";
	import { clickOutside } from "$lib/services";
  import { user, images } from "$lib/stores";

	export let text: string = InnerText.PUBLIC;
	export let username: string;
	export let isPrivate: string | null = null;
	
	const holder: IKeys<string> = {
		public: PublicText.PUBLIC.toUpperCase(),
		order: OrderText.NEWEST.toUpperCase()
	};
	
	const visible: IKeys<boolean> = {
		public: false,
		order: false
	};

	async function handleSubmit(option: string, choise: string) {
		isPrivate = choise;
		holder[option] = choise.toUpperCase();
		visible[option] = false;
		
		const data: { images: IImage[] } = await axios({
			method: Method.GET,
			url: `/user/${username}/${holder.public}/${holder.order}`
		}).then(res => res.data)
			.catch(err => {
				console.error(err.message);
				return { images: [] };
			});
		
		images.setImages(data.images);
	}
</script>

<div id="nav-user">
	<div>
		<i class="fa-solid {SelectIcon[text]}"></i>
		{#if text === InnerText.PUBLIC &&
			(username === $user?.username ||
			$user?.role === UserRole.ADMIN ||
			$user?.role === UserRole.SUPER)}
		<button on:click={() => visible.public = !visible.public}>
			{holder.public}
			<i class="fa-solid fa-caret-down"></i>
		</button>
			{#if visible.public}
				<ul
					id="left"
					use:clickOutside
					on:outclick={() => setTimeout(() => visible.public = false)}
				>
					{#each Object.values(PublicText) as choise}
						<li role="none" on:click={() => handleSubmit('public', choise)}>
							{choise.toUpperCase()}
						</li>
					{/each}
				</ul>
			{/if}
			{:else}
				{text.toUpperCase()}
		{/if}
	</div>
	{#if text === InnerText.PUBLIC}
		<div>
			<button on:click={() => visible.order = !visible.order}>
				{holder.order.toUpperCase()}
				<i class="fa-solid fa-caret-down"></i>
			</button>
		</div>
		{#if visible.order}
			<ul
				id="right"
				use:clickOutside
				on:outclick={() => setTimeout(() => visible.order = false)}
			>
				{#each Object.values(OrderText) as choise}
					<li role="none" on:click={() => handleSubmit('order', choise)}>
						{choise.toUpperCase()}
					</li>
				{/each}
			</ul>
		{/if}
	{/if}
</div>

<style lang="postcss">
	#nav-user {
		@apply flex relative items-center justify-between w-full py-2 px-3 bg-[#5383d3] font-bold text-white leading-tight gap-2;

		& div {
			@apply flex gap-x-1.5;
		}

		& button {
			@apply flex justify-center w-[100px] rounded-xl bg-[#5383d3] font-bold text-white gap-x-2 cursor-auto [&_i]:cursor-pointer;
		}
	}

	ul {
		box-shadow: 0 0 6px #666666;
		@apply self-start absolute w-[120px] mt-5 py-1.5 rounded-sm bg-white text-black z-[90] [&#left]:left-6 [&#right]:right-1;

		& li {
			@apply py-1 text-center cursor-pointer hover:bg-[#dddddd];
		}
	}
</style>
