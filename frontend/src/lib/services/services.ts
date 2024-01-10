import axios from "$lib/axios";

export async function handleRequest(form: HTMLFormElement) {
	return axios({
		method: form.method,
		url: form.action,
		data: form
	}).then(res => res.data);
}

export async function handleRegister(url: string, like: string) {
	return axios({
		method: 'POST',
		url,
		data: { like },
	}).then(res => res.data);
}
