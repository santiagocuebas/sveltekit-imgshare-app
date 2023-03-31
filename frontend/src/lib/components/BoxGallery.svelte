<script lang="ts">
  export let className: string;
</script>

<div class={className} data-sveltekit-preload-data='off'>
  <slot></slot>
</div>

<style>
	div {
    display: grid;
    justify-content: center;
    width: 100%;
    min-width: 510px;
    height: 100%;
    padding: 10px;
    gap: 10px;
	}

  .image-cell {
    grid-template-columns: repeat(auto-fill, 240px);
    grid-auto-rows: 240px;
  }

  .image-row {
    grid-template-columns: repeat(auto-fill, 100%);
    grid-auto-rows: min-content;
  }

  .image-sidebar {
    grid-template-columns: repeat(auto-fill, 100%);
    grid-auto-rows: min-content;
    min-width: 0;
    padding: 0;
    gap: 0;
  }

  .image-upload {
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
