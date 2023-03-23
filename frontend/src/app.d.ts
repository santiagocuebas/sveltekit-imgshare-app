import { IUser } from '$lib/global.js';

declare namespace App {
	// interface Error {}
	// interface Locals {}
	// interface PageData {}
	// interface Platform {}
}

declare global {
	namespace App {
		interface Locals {
			user: IUser;
		}
	}
}
