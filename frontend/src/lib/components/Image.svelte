<script lang="ts">
  import type { IImage } from "$lib/global.js";
	import { DIR } from '$lib/config.js';

  export let image: IImage;
</script>

<a href='/gallery/{image.id}' title="{image.title}">
  <img
    src="{DIR}/uploads/{image.filename}"
    alt={image.title}
    loading="lazy"
  >
  <div>
    <h2>{image.title}</h2>
    <p>
      <i class="fa-solid fa-message"></i>
      {image.totalComments}
    </p>
    <p>
      <i class="fa-solid fa-thumbs-up"></i>
      {image.like.length}
    </p>
    <p>
      <i class="fa-solid fa-thumbs-down"></i>
      {image.dislike.length}
    </p>
    <p>
      <i class="fa-solid fa-eye"></i>
      {image.views}
    </p>
  </div>
</a>

<style>
  a {
    display: flex;
    position: relative;
    box-shadow: 0 0 1px 2px #888888;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  div {
    display: flex;
    position: absolute;
    justify-content: space-between;
    flex-wrap: wrap;
    align-self: flex-end;
    width: 100%;
    height: min-content;
    padding: 10px;
    background-color: #dddddd;
    gap: 10px;
  }

  h2 {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 20px;
  }
</style>
