<script lang="ts">
  import type { IUser } from '$lib/global.js';
	import { DIR } from '$lib/config.js';
	import { clickOutside } from '$lib/services/click-outside';

	export let user: IUser;
	let visible = false;
</script>

<nav>
	<a class="nav-logo" href="/">
		<img class="nav-tiny-logo" src="/tiny-logo.png" alt="">
		<img class="nav-main-logo" src="/imgshare-logo.png" alt="">
	</a>
	<form action="/search">
		<input type="search" name="q" placeholder="Search">
		<button class="nav-button">
			<i class="fa-solid fa-magnifying-glass"></i>
		</button>
	</form>
	{#if user}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<img id='nav-avatar' class="nav-avatar" src="{DIR}/uploads/avatars/{user?.avatar}" alt="" on:click>
		<slot></slot>
	{:else}
		<div class="nav-sign">
			<a class="nav-signin" href="/signin">Signin</a>
			<a class="nav-signup" href="/signup">Signup</a>
			<button on:click={() => visible = !visible}>
				<i class='fa-solid fa-caret-down'></i>
			</button>
		</div>
		{#if visible}
			<ul class="nav-sign-list" use:clickOutside on:outclick={() => visible = false}>
				<a href="/signin" on:click={() => visible = false}>
					<i class="fa-solid fa-right-to-bracket"></i>
					<li>Signin</li>
				</a>
				<a href="/signup" on:click={() => visible = false}>
					<i class="fa-solid fa-right-to-bracket"></i>
					<li>Signup</li>
				</a>
			</ul>
		{/if}
	{/if}
</nav>

<style>
	nav {
		display: flex;
		position: fixed;
		align-items: center;
		justify-content: space-between;
		min-width: 510px;
		width: 100%;
		height: 56px;
		margin-top: -56px;
		padding: 0 20px;
		background-color: #5383d3;
		box-shadow: 0 0 10px #666666;
		gap: 20px;
		z-index: 100;
	}

	.nav-logo {
		width: 160px;
		min-width: 160px;
		height: 40px;
	}

	.nav-tiny-logo {
		display: none;
	}

	img {
		height: 100%;
	}

	form {
		display: flex;
		width: 65%;
		min-width: 320px;
		max-width: 700px;
		height: min-content;
		outline: 1px solid #cccccc;
		background-color: #cccccc;
		gap: 1px;
	}

	input {
		width: 100%;
		padding: 10px 16px;
		border: none;
		outline: none;
	}

	.nav-button {
		width: 64px;
		min-width: 64px;
		padding: 10px 0;
		border: none;
		background-color: #e8e8e8;
		cursor: pointer;
	}

	.nav-button:hover {
		background-color: #d8d8d8;
	}

	.nav-sign {
		display: flex;
		align-items: center;
		height: fit-content;
		gap: 15px;
	}

	.nav-sign button {
		display: none;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		border: none;
		border-radius: 50%;
		background-color: #ffffff;
		color: #5383d3;
		cursor: pointer;
	}

	.nav-sign i {
		font-size: 24px;
	}

	.nav-signin, .nav-signup {
		font-size: 18px;
		font-weight: 700;
		color: #ffffff;
	}

	.nav-signup {
		padding: 9px 14px;
		background: #3cb85b;
	}

	.nav-avatar {
		width: 40px;
		min-width: 40px;
		height: 40px;
		border-radius: 50%;
		box-shadow: 0 0 5px 1px #666666;
		object-fit: cover;
		object-position: center;
		cursor: pointer;
	}

	.nav-sign-list {
		position: absolute;
		align-self: start;
		top: 50px;
		right: 20px;
		padding: 5px 0;
		border-radius: 4px;
		background-color: #ffffff;
		box-shadow: 0 0 6px #666666;
		z-index: 100;
	}

	.nav-sign-list a {
		display: flex;
		align-items: center;
		padding: 5px 20px;
		font-weight: 700;
		gap: 20px;
	}

	.nav-sign-list a:nth-child(1):hover {
		background-color: #5383d3;
		color: #ffffff;
	}

	.nav-sign-list a:nth-child(2):hover {
		background-color: #3cb85b;
		color: #ffffff;
	}

	@media (max-width: 1040px) {
		.nav-logo {
			width: 40px;
			min-width: 40px;
			height: 40px;
		}

		.nav-main-logo {
			display: none;
		}

		.nav-tiny-logo {
			display: inline-block;
		}

		.nav-sign {
			width: 40px;
			min-width: 40px;
			height: 40px;
		}

		.nav-signin {
			display: none;
		}

		.nav-signup {
			display: none;
		}

		.nav-sign button {
			display: flex;
		}
	}
</style>
