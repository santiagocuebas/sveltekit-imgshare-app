<script lang="ts">
  export let className: string = '';
</script>

<div class={className}>
  <slot></slot>
</div>

<style lang="postcss">
	div {
    @apply flex flex-wrap content-start justify-center h-full p-2.5 gap-2.5;

    &.image-sidebar {
      @apply p-0 gap-0;
    }

    &.image-row {
      @apply flex-col justify-start content-center;
    }

    &.image-user {
      @apply justify-start p-0 gap-0;
    }

    &.image-upload {
      @apply flex-row flex-nowrap justify-evenly gap-0;
    }
	}
</style>
