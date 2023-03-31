<div class="comments">
	<slot></slot>
</div>

<style>
  .comments {
		grid-column: 1 / span 4;
		display: flex;
		flex-wrap: wrap;
		height: min-content;
		margin-top: 20px;
		gap: 20px;
	}

	@media (max-width: 1040px) {
		.comments {
			grid-column: 1 / span 6;
		}
	}
</style>
