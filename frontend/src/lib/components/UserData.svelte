<script lang="ts">
	import { format } from 'timeago.js';
	import { DIR } from '$lib/config.js';
  import type { IUserExtended } from '$lib/global';

	export let user: IUserExtended;
</script>

<div class="user-box-data">
	<img src="{DIR}/uploads/avatars/{user.avatar}" alt="">
	<div>
		<h6>
			Username:
			<a href="/user/{user.username}" target="_blank" rel="noreferrer">
				<i class="fa-solid fa-share"></i>
			</a>
		</h6>
		<p>{user.username}</p>
	</div>
	<div>
		<h6>Email:</h6>
		<p>{user.email}</p>
	</div>
	<div>
		<h6>Role:</h6>
		<p>{user.role}</p>
	</div>
	<div>
		<h6>Join:</h6>
		<p>{format(user.createdAt)}</p>
	</div>
</div>

<style>
	.user-box-data {
		display: grid;
		align-content: space-between;
	}

	.user-box-data img {
		justify-self: center;
		width: 240px;
		height: 240px;
		border-radius: 50%;
		box-shadow: 0 0 1px 1px #666666;
		object-fit: cover;
	}

	.user-box-data p {
		padding-left: 8px;
		overflow-wrap: anywhere;
	}

	.user-box-data i {
		color: #1a5ef0;
	}

	.user-box-data i:hover {
		color: #be1af0;
	}
</style>
