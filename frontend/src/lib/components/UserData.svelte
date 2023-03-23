<script lang="ts">
	import { format } from 'timeago.js';

	export let username: string;
	export let email: string;
	export let avatar: string;
	export let role: string;
	export let createdAt: Date;
</script>

<div class="user-box-data">
	<img src="http://localhost:4200/uploads/avatars/{avatar}" alt="">
	<div>
		<h6>
			Username:
			<a href="/user/{username}" target="_blank" rel="noreferrer">
				<i class="fa-solid fa-share"></i>
			</a>
		</h6>
		<p>{username}</p>
	</div>
	<div>
		<h6>Email:</h6>
		<p>{email}</p>
	</div>
	<div>
		<h6>Role:</h6>
		<p>{role}</p>
	</div>
	<div>
		<h6>Join:</h6>
		<p>{format(createdAt)}</p>
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
