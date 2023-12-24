import type { IImage } from "$lib/global";
import { writable } from "svelte/store";

function createImage(image: IImage) {
  const { subscribe, update, set } = writable(image);

  return {
    subscribe,
    changeLikes: (likes: string[], dislikes: string[]) => update(image => {
      image.likes = likes;
      image.dislikes = dislikes;
      return image;
    }),
    changeFavorite: (favorites: string[]) => update(image => {
      image.favorites = favorites;
      return image;
    }),
    changePublic: (isPublic: boolean) => update(image => {
      image.isPublic = isPublic;
      return image;
    }),
    setImage: (image: IImage) => set(image),
    resetImage: () => set({} as IImage)
  }
}

export const image = createImage({} as IImage);
