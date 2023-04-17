import axios from "axios";

export function handleRequest(form: HTMLFormElement) {
	return axios({
		method: form.method,
		url: form.action,
		data: form,
		withCredentials: true
	}).then(res => res.data);
}

export function handleRegister(url: string, like: string) {
	return axios({
		method: 'POST',
		url,
		data: { like },
		withCredentials: true
	}).then(res => res.data);
}
