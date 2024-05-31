import type {
	DisabledButton,
	IKeys,
	ILink,
	IUser,
	SettingsProps
} from '$lib/types/global';
import isURL from 'validator/lib/isURL';

export function setSettingsProps({ avatar, description }: IUser): SettingsProps {
	return {
		avatar,
		description,
		password: { old: false, new: false, confirm: false },
		link: { title: '', url: '' }
	};
}

export function isDisabledButton(
	{ avatar, description, links }: IUser
): DisabledButton {
	return {
		avatar: (value: unknown) => value !== avatar,
		description: (value: unknown) => value !== description,
		password: (value: unknown) => {
			const password = value as IKeys<boolean>;

			return password.old && password.new && password.confirm;
		},
		link: (value: unknown) => {
			const link = value as ILink;

			return link.title.length > 0 &&
				isURL(link.url) &&
				links.length <= 12 &&
				!links.map(link => link.title).includes(link.title) &&
				!links.map(link => link.url).includes(link.url);
		},
		deleteuser: () => true
	};
}
