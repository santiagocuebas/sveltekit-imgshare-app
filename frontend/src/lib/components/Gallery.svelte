<script lang="ts">
	export let className: string = '';
</script>

<div class={className}>
	<slot></slot>
</div>

<style lang="postcss">
	div {
		box-shadow: 0 0 4px #888888;
		@apply flex flex-col w-[90%] min-w-[510px] max-w-[1510px] h-full bg-white;
	}

	.gallery-users {
		@apply w-[1600px] max-w-[1600px] h-[850px] bg-[#dddddd];

		@media (width < 1600px) {
			& {
				@apply w-[1200px];
			}
		}

		@media (width < 1200px) {
			& {
				@apply w-[800px];
			}
		}
	}
</style>
