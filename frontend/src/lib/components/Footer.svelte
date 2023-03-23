<script lang="ts">
  import { fly } from "svelte/transition";
</script>

<footer in:fly={{ y: 50, duration: 500 }} out:fly={{ y: 50, duration: 500 }}>
	<div>
		imgShare &copy; {new Date().getFullYear()}
	</div>
	<a href="/about">
		About
	</a>
	<a href="/terms">
		Terms
	</a>
	<a href="/rules">
		Rules
	</a>
</footer>

<style>
	footer {
		display: flex;
		position: fixed;
		align-items: center;
		width: 100%;
		min-width: 510px;
		height: 48px;
		bottom: 0;
		padding: 0 10px;
		background-color: #5383d3;
		box-shadow: 0 0 10px #666666;
		font-weight: 700;
		color: #ffffff;
		z-index: 100;
	}

	div {
		min-width: max-content;
		margin: 0 10px;
		font-size: 20px;
	}

	a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 64px;
		height: 100%;
		color: #ffffff;
	}

	a:hover {
		background-color: #6393e3;
	}
</style>
