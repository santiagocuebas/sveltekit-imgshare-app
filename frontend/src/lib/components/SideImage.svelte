<script lang="ts">
  import { format } from "timeago.js";
  import type { IImage } from "$lib/global.js";
	import { DIR } from '$lib/config.js';

  export let image: IImage;
</script>

<a href="/gallery/{image.id}" title="{image.title}">
  <img src="{DIR}/uploads/{image.filename}" alt="{image.title}">
  <h2>{image.title}</h2>
  <p>{image.author}</p>
  <div>
    {image.views} views &#x25CF; {format(image.createdAt)}
  </div>
</a>

<style>
  a {
    display: grid;
    grid-template-columns: 80px 1fr;
    grid-auto-rows: min-content;
    align-items: center;
    padding: 10px;
    column-gap: 10px;
    row-gap: 5px;
  }

  a:hover {
    background-color: #dddddd;
  }

  img {
    grid-row: 1 / span 3;
    width: 80px;
    height: 80px;
    object-fit: contain;
  }

  h2 {
    align-self: flex-start;
    font-size: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  p {
    align-self: flex-start;
    text-overflow: ellipsis;
    font-weight: 600;
  }

  div {
    align-self: flex-end;
    justify-self: end;
    text-overflow: ellipsis;
    color: #555555;
  }
</style>
