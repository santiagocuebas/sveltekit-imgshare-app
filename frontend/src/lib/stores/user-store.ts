import type { IUser } from "$lib/global";
import { writable } from "svelte/store";

function createUser(user: IUser | null) {
  const { subscribe, set } = writable(user);

  return {
    subscribe,
    setUser: (user: IUser) => set(user),
    resetUser: () => set(null)
  }
}

export const user = createUser(null);
