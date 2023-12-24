import type { IImage } from "$lib/global";
import { writable } from "svelte/store";

function createImages(images: IImage[]) {
  const { subscribe, set } = writable(images);

  return {
    subscribe,
    setImages: (images: IImage[]) => set(images)
  }
}

export const images = createImages([]);
