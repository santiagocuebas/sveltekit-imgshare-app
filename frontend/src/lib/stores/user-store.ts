import type { ILink, IUser, RawUser } from "$lib/global";
import { writable } from "svelte/store";

function createUser(user: IUser | null) {
	const { subscribe, set, update } = writable(user);

	return {
		subscribe,
		changeAvatar: (avatar: string) => update(user => {
			if (user) user.avatar = avatar;
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
		removeLink: (link: ILink) => update(user => {
			if (user) user.links = user.links.filter(({ title }) => title !== link.title);
			return user;
		}),
		setUser: (user: RawUser & { links: string }) => {
			const newUser: IUser = {
				...user,
				links: JSON.parse(user.links)
			};

			set(newUser);
		},
		resetUser: () => set(null)
	}
}

export const user = createUser(null);
