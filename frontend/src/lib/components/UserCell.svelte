<script lang="ts">
	import type { IUserExtended } from "$lib/global";
	import { format } from "timeago.js";

	export let user: IUserExtended;
</script>

<div class="user-cell" role="none" on:click>
	<picture>
		<img src={user.avatar} alt={user.username}>
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
			@apply flex-none w-px h-full bg-[#666666];
		}
	}

	.user-box {
		@apply flex flex-col justify-around w-[180px] h-full [&_h4]:font-bold;

		& p {
			@apply pl-2 leading-tight truncate;
		}
	}

	.user-white {
		border: 3px outset #cccccc;
		@apply absolute w-full h-full left-0 cursor-pointer hover:bg-white/20;
	}
</style>
