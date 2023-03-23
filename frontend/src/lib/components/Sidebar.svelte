<div class="sidebar">
	<div class="sidebar-container">
		<h2 class="title">
			<i class="fa-solid fa-images title-icon"></i>
			Recent Uploads
		</h2>
		<slot></slot>
	</div>
</div>

<style>
  .sidebar {
		grid-column: 5 / span 2;
		grid-row: 1 / span 2;
	}

	.sidebar-container {
		margin-left: 20px;
		background-color: #ffffff;
		box-shadow: 0 2px 10px #666666;
	}

	@media (max-width: 1040px) {
		.sidebar {
			display: none;
		}
	}
</style>
