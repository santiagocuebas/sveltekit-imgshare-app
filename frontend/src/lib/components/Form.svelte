<script lang="ts">
  import { handleRequest } from "$lib/services/services";

	export let action: string;
	export let prefix: string;
	export let show: boolean;
	export let errors: (data: any) => {};

	async function handleSubmit(this: HTMLFormElement) {
		const data = await handleRequest(this);

		if (data.redirect) {
			window.location.href = data.url;
		}

		if (data.url) {
			window.location.href = prefix + data.url;
		} else if (data.errors) {
			errors(data.errors);
			show = true;
		}
	}
</script>

<form action={action} method='POST' on:submit|preventDefault={handleSubmit}>
	<slot></slot>
</form>

<style>
	form {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		padding: 20px;
		gap: 12px;
	}
</style>
