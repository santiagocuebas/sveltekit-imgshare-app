<script lang="ts">
  import { fly } from "svelte/transition";
  import { IconsPaths } from "$lib/enums";

	let className = '';
	let visible: boolean | undefined = undefined;

	const handleClick = () => {
		setTimeout(() => className = !visible ? 'is-visible' : 'occult');
		setTimeout(() => visible = !visible, visible ? 350 : 0);
	};
</script>

<footer transition:fly={{ y: 50, duration: 500 }}>
	<div>
		<p>
			imgShare &copy; {new Date().getFullYear()}
		</p>
		<a href="/about">
			About
		</a>
		<a href="/terms">
			Terms
		</a>
		<a href="/rules">
			Rules
		</a>
		<a href="/contact">
			Contact
		</a>
	</div>
	<div class={className}>
		<button on:click={handleClick}>
			<i class="fa-solid fa-caret-{visible ? 'down' : 'up'}"></i>
		</button>
		{#if visible}
			<ul>
				<li>
					<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ffffff">
						<path d={IconsPaths.GITHUB} />
					</svg>
					Github Repo
				</li>
				<li>
					<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ffffff">
						<path d={IconsPaths.NETLIFY} />
					</svg>
					Frontend Deploy On Netlify
				</li>
				<li>
					<svg width="24" height="24" viewBox="0 0 24 50" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" preserveAspectRatio="xMidYMid">
						<g>
							<path d={IconsPaths.CSHLINEONE} />
							<path d={IconsPaths.CSHLINETWO} fill-opacity="0.75" />
							<path d={IconsPaths.CSHLINETHREE} fill-opacity="0.65" />
							<path d={IconsPaths.CSHLINEFOUR} fill-opacity="0.4" />
							<path d={IconsPaths.CSHLINEFIVE} fill-opacity="0.25" />
							<path d={IconsPaths.CSHLINESIX} />
							<path d={IconsPaths.CSHLINESEVEN} fill-opacity="0.75" />
							<path d={IconsPaths.CSHLINEEIGHT} fill-opacity="0.65" />
							<path d={IconsPaths.CSHLINENINE} fill-opacity="0.4" />
							<path d={IconsPaths.CSHLINETEN} fill-opacity="0.25"/>
						</g>
					</svg>
					Backend Deploy On Cyclic.sh
				</li>
				<li>
					<svg width="24" height="24" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#5383d3">
						<g>
							<path d={IconsPaths.CRDBONE} fill="#ffffff" />
							<path d={IconsPaths.CRDBTWO} />
							<path d={IconsPaths.CRDBTHREE} />
						</g>
					</svg>
					Data Uploaded On CockroachDB
				</li>
				<li>
					<svg svg width="24" height="24" viewBox="0 -44 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" fill="#ffffff">
						<g>
							<path d={IconsPaths.CLOUDINARY} />
							<path d={IconsPaths.LINEONE} />
							<path d={IconsPaths.LINETWO} />
							<path d={IconsPaths.LINETHREE} />
						</g>
					</svg>
					Images Uploaded On Cloudinary
				</li>
			</ul>
		{/if}
	</div>
</footer>

<style lang="postcss">
	footer {
		filter: drop-shadow(0 0 2px #666666);
		@apply fixed w-full bottom-0 bg-[#5383d3] font-bold text-white z-[300];

		& div:nth-child(1) {
			scrollbar-width: none;
			@apply flex relative items-center w-full h-12 px-2.5 bg-[#5383d3] overflow-auto;

			& p {
				@apply min-w-max mx-2.5 text-[20px];
			}

			& a {
				@apply flex flex-none items-center justify-center w-20 h-full text-white hover:bg-[#6393e3];
			}
		}

		& div:nth-child(2) {
			@apply flex absolute flex-col right-2.5 bottom-12 z-[-1];

			&.occult {
				animation: .35s linear 0s isvisible;
			}

			&.is-visible {
				animation: .35s linear 0s occultando;
			}

			& button {
				@apply -mb-0.5 ml-auto pt-2 px-8 pb-2.5 bg-[#5383d3] rounded-t-lg;
			}

			& ul {
				@apply flex flex-col py-2.5 bg-[#5383d3] rounded-ss-lg;

				& li {
					@apply flex relative items-center w-full py-[5px] px-5 text-[18px] cursor-default gap-2.5;
				}
			}
		}
	}

	@keyframes isvisible {
		0% {
			transform: translateY(0);
		}

		100% {
			transform: translateY(190px);
		}
	}

	@keyframes occultando {
		0% {
			transform: translateY(190px);
		}

		100% {
			transform: translateY(0);
		}
	}
</style>
