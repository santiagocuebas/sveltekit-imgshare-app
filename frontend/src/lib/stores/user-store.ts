import type { ILink, IUser } from "$lib/types/global";
import { writable } from "svelte/store";
import { DIR } from "$lib/config";

function createUser(user: IUser | null) {
	const { subscribe, set, update } = writable(user);

	return {
		subscribe,
		changeAvatar: (avatar: string) => update(user => {
			if (user) user.avatar = DIR + '/' + avatar;

			return user;
		}),
		changeDescription: (description: string) => update(user => {
			if (user) user.description = description;

			return user;
		}),
		addLink: (link: ILink) => update(user => {
			if (user) user.links = [link, ...user.links];

			return user;
		}),
		removeLink: (title: string) => update(user => {
			if (user) user.links = user.links.filter(link => link.title !== title);

			return user;
		}),
		setUser: (user: IUser) => set({ ...user, avatar: DIR + '/' + user.avatar }),
		resetUser: () => set(null)
	}
}


export const user = createUser(null);
