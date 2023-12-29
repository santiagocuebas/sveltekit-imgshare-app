import type {
	DisabledButton,
	IKeys,
	ILink,
	IUser,
	SettingsProps
} from "$lib/global";
import isURL from 'validator/lib/isURL';
import {
	checkOldPassword,
	checkNewPassword,
	checkConfirmPassword
} from './index';

export function setSettingsProps({ avatar, description }: IUser): SettingsProps {
	return {
		avatar,
		description,
		password: { old: '', new: '', confirm: '' },
		link: { title: '', url: '' }
	}
}

export function isDisabledButton(
	{ avatar, description, links }: IUser
): DisabledButton {
	return {
		avatar: (value: string) => value !== avatar,
		description: (value: string) => value !== description,
		password: (password: IKeys<string>) => {
			return checkOldPassword(password.old, password.new, password.confirm) &&
				checkNewPassword(password.new) &&
				checkConfirmPassword(password.confirm, password.new);
		},
		link: (link: ILink) => {
			return link.title.length > 0 &&
				isURL(link.url) &&
				links.length <= 12 &&
				!links.map(link => link.title).includes(link.title) &&
				!links.map(link => link.url).includes(link.url);
		},
		deleteuser: () => true
	}
}
