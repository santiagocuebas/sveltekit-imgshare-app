<script lang="ts">
	import { afterUpdate } from 'svelte';
	import { clickOutside } from '$lib/services';
  import { user } from '$lib/stores';

	let visible = false;
	let isValidUser = false;
	
	afterUpdate(() => isValidUser = $user !== null);
</script>

<nav>
	<a id="avatar" href="/">
		<img class="tiny-logo" src="/tiny-logo.png" alt="">
		<img class="main-logo" src="/imgshare-logo.png" alt="">
	</a>
	<form action="/search">
		<input type="search" name="q" placeholder="Search">
		<button>
			<i class="fa-solid fa-magnifying-glass"></i>
		</button>
	</form>
	{#if isValidUser}
		<slot></slot>
	{:else}
		<div>
			<a href="/signin">
				Signin
			</a>
			<a class="signup" href="/signup">
				Signup
			</a>
			<button on:click={() => visible = !visible}>
				<i class='fa-solid fa-caret-down fa-xl'></i>
			</button>
		</div>
		{#if visible}
			<ul use:clickOutside on:outclick={() => visible = false}>
				<a href="/signin" on:click={() => visible = false}>
					<i class="fa-solid fa-right-to-bracket"></i>
					<li>
						Signin
					</li>
				</a>
				<a href="/signup" on:click={() => visible = false}>
					<i class="fa-solid fa-right-to-bracket"></i>
					<li>
						Signup
					</li>
				</a>
			</ul>
		{/if}
	{/if}
</nav>

<style lang="postcss">
	nav {
		box-shadow: 0 0 4px #666666;
		@apply flex fixed items-center justify-between w-full min-w-[510px] h-14 -mt-14 px-5 bg-[#5383d3] gap-5 z-[100];

		& #avatar {
			@apply flex-none w-40 h-10;

			& img {
				@apply h-full [&.tiny-logo]:hidden;
			}
		}

		& form {
			outline: 1px solid #cccccc;
			@apply flex w-2/3 min-w-[320px] max-w-[700px] bg-[#cccccc] gap-x-px;

			& input {
				@apply w-full py-2.5 px-4;
			}

			& button {
				@apply flex-none w-16 py-2.5 bg-[#e8e8e8] hover:bg-[#d8d8d8];
			}
		}

		& div {
			@apply flex items-center h-fit gap-4;

			& a {
				@apply text-[18px] font-bold text-white;

				&.signup {
					@apply py-2.5 px-[14px] bg-[#3cb85b];
				}
			}

			& button {
				@apply hidden items-center justify-center w-full h-full rounded-full bg-white text-[#5383d3] cursor-pointer;
			}
		}

		& ul {
			box-shadow: 0 0 4px #666666;
			@apply self-start absolute top-[50px] right-5 py-1.5 rounded bg-white z-[100];

			& a {
				@apply flex items-center py-1.5 px-5 font-bold gap-5 hover:bg-[#5383d3] hover:text-white;
			}

			& a:nth-child(2):hover {
				@apply bg-[#3cb85b];
			}
		}

		@media (width < 1040px) {
			& #avatar {
				@apply w-10 h-10;

				& img {
					@apply [&.main-logo]:hidden [&.tiny-logo]:inline-block;
				}
			}

			& div {
				@apply flex-none w-10 h-10 [&_a]:hidden [&_button]:flex;
			}
		}
	}
</style>
