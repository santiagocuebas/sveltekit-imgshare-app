<script lang="ts">
  import type { IImage } from "$lib/global.js";

  export let image: IImage;
</script>

<a href='/gallery/{image.id}' title="{image.title}">
  <picture>
    <img loading="lazy" alt={image.title} src={image.filename}>
  </picture>
  <div>
    <h2>{image.title}</h2>
    <p>
      <i class="fa-solid fa-message"></i>
      {image.totalComments.length}
    </p>
    <p>
      <i class="fa-solid fa-thumbs-up"></i>
      {image.likes.length}
    </p>
    <p>
      <i class="fa-solid fa-thumbs-down"></i>
      {image.dislikes.length}
    </p>
    <p>
      <i class="fa-solid fa-eye"></i>
      {image.views}
    </p>
  </div>
</a>

<style lang="postcss">
  a {
    box-shadow: 0 0 4px #888888;
    @apply flex flex-none relative;
  }

  picture {
    @apply w-60 h-60;
  }

  img {
    @apply w-full h-full object-cover;
  }

  div {
    @apply self-end flex absolute flex-wrap justify-between w-full p-2.5 bg-[#dddddd] gap-2.5;
  }

  h2 {
    @apply w-full overflow-hidden text-ellipsis text-[20px] font-semibold leading-tight;
  }
</style>
