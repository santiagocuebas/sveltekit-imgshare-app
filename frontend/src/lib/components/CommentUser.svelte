<script lang="ts">
  import { format } from "timeago.js";
  import type { IComment } from "$lib/global.js";

  export let comment: IComment;
</script>

<div class="user-comment-container">
  <a href="/gallery/{comment.imageId}">
    http://localhost:3000/gallery/{comment.imageId}
  </a>
	<div class="user-comment-content">
		{comment.comment}
	</div>
	<p>{format(comment.createdAt)}</p>
</div>

<style>
	.user-comment-container {
		display: flex;
		flex-wrap: wrap;
		width: 90%;
		min-width: 490px;
		max-width: 600px;
		height: 100%;
		margin: 0 auto;
		padding: 10px;
		border-radius: 10px;
		background-color: #eeeeee;
		box-shadow: 0 0 2px #000000;
		gap: 8px;
	}

	a {
		font-weight: 700;
	}

	.user-comment-content {
		width: 100%;
		max-height: 120px;
		overflow: scroll;
		overflow-wrap: anywhere;
		scrollbar-width: none;
	}

	p {
		margin-left: auto;
	 }
</style>
