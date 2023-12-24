<script lang="ts">
  export let className: string = '';
</script>

<div class={className} data-sveltekit-preload-data='tap'>
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

  .image-uploaded {
    grid-template-columns: repeat(3, 200px);
    grid-auto-rows: 200px;
    align-items: center;
    justify-items: center;
    padding: 0;
    gap: 0;
  }

  .image-cell-user {
    grid-template-columns: repeat(auto-fill, 400px);
    grid-auto-rows: 200px;
    justify-content: flex-start;
    min-width: 800px;
    padding: 0;
    gap: 0;
  }
</style>
