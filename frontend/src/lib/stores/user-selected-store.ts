import type { ILink, IUserExtended } from "$lib/types/global";
import { writable } from "svelte/store";

function createSelectUser(user: IUserExtended | null) {
  const { subscribe, update, set } = writable(user);

  return {
    subscribe,
    changeDescription: (description: string) => update(user => {
      if (user) user.description = description; 
      
      return user;
    }),
    changeLinks: (links: ILink[]) => update(user => {
      if (user) user.links = links; 
      
      return user;
    }),
    changeRole: (role: string) => update(user => {
      if (user) user.role = role; 

      return user;
    }),
    setUser: (user: IUserExtended) => set(user),
    resetUser: () => set(null)
  }
}

export const selectUser = createSelectUser(null);
