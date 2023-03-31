<script lang="ts">
	import { format } from "timeago.js";
	import type { IUserExtended, ILink } from "$lib/global";
	import { DIR } from '$lib/config.js';

	export let user: IUserExtended;
	export let selectUser: IUserExtended | null;
	export let links: ILink[];

	const handleUser = () => {
		selectUser = user;
		links = JSON.parse(user.links);
	};
</script>

<div class="user-cell" on:mousedown={handleUser}>
	<img src="{DIR}/uploads/avatars/{user.avatar}" alt="">
	<span></span>
	<div>
		<h6>Username</h6>
		<p>{user.username}</p>
	</div>
	<div>
		<h6>Email</h6>
		<p>{user.email}</p>
	</div>
	<div>
		<h6>Role</h6>
		<p>{user.role}</p>
	</div>
	<div>
		<h6>Join</h6>
		<p>{format(user.createdAt)}</p>
	</div>
	<div class="user-white"></div>
</div>

<style>
	.user-cell {
		display: grid;
		position: relative;
		grid-template-columns: 1fr 1px 1fr;
		align-items: center;
		grid-auto-rows: 1fr;
		width: 100%;
		height: 100%;
		padding: 5px;
		background-color: #dddddd;
		column-gap: 5px;
	}

	.user-cell span {
		grid-row: 1 / span 4;
		width: 1px;
		height: 97%;
		background-color: #999999;
	}

	.user-cell img {
		grid-row: 1 / span 4;
		align-self: center;
		justify-self: center;
		width: 180px;
		height: 180px;
		border-radius: 50%;
		box-shadow: 0 0 0 2px #000000;
		object-fit: cover;
	}
	.user-cell p {
		padding-left: 8px;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.user-white {
		position: absolute;
		width: 100%;
		height: 100%;
		border: 3px outset #cccccc;
		cursor: pointer;
	}

	.user-white:hover {
		background-color: #ffffff2f;
	}
</style>
