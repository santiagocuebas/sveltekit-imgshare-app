import axios from "$lib/axios";

export async function handleForm(form: HTMLFormElement) {
	return axios({
		method: form.method,
		url: form.action.replace(location.origin, ''),
		data: form
	}).then(res => res.data);
}
