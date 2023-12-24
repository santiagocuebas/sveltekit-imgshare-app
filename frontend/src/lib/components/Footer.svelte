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

<style lang="postcss">
	footer {
		box-shadow: 0 0 10px #666666;
		@apply flex fixed items-center w-full min-w-[510px] h-12 bottom-0 px-2.5 bg-[#5383d3] font-bold text-white z-[100];
	}

	div {
		@apply min-w-max mx-2.5 text-[20px];
	}

	a {
		@apply flex items-center justify-center w-16 h-full text-white hover:bg-[#6393e3];
	}
</style>
