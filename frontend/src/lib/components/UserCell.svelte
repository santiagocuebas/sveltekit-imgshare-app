<script lang="ts">
	import type { IUserExtended } from "$lib/global";
	import { format } from "timeago.js";
	import { DIR } from '$lib/config.js';

	export let user: IUserExtended;
</script>

<div class="user-cell" role="none" on:click>
	<picture>
		<img src="{DIR}/uploads/avatars/{user.avatar}" alt="">
	</picture>
	<span></span>
	<div class="user-box">
		<div>
			<h4>Username</h4>
			<p>{user.username}</p>
		</div>
		<div>
			<h4>Email</h4>
			<p>{user.email}</p>
		</div>
		<div>
			<h4>Role</h4>
			<p>{user.role}</p>
		</div>
		<div>
			<h4>Join</h4>
			<p>{format(user.createdAt)}</p>
		</div>
	</div>
	<div class="user-white"></div>
</div>

<style lang="postcss">
	.user-cell {
		@apply flex relative items-center justify-between w-[400px] h-[200px] p-2 bg-[#dddddd];

		& picture {
			@apply flex-none w-[180px] h-[180px];

			& img {
				box-shadow: 0 0 0 2px #000000;
				@apply w-full h-full rounded-full object-cover;
			}
		}

		& span {
			@apply flex-none w-px h-full bg-[#999999];
		}
	}

	.user-box {
		@apply flex flex-col w-full [&_p]:pl-2 [&_p]:truncate;
	}

	.user-white {
		border: 3px outset #cccccc;
		@apply absolute w-full h-full cursor-pointer hover:bg-white/20;
	}
</style>
