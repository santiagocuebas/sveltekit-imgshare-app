<script lang="ts">
	import { DIR } from '$lib/config.js';
	import ContainerForm from '$lib/components/ContainerForm.svelte';
	import Form from '$lib/components/Form.svelte';
	import ErrorBox from '$lib/components/ErrorBox.svelte';

	let errors: any = {};
	let visible = false;
	
	const setErrors = (data: any) => errors = data;
</script>

<ContainerForm title='Signup'>
	<Form action='{DIR}/api/auth/signup' prefix='/user' bind:show={visible} errors={setErrors}>
		{#if visible}
			<ErrorBox bind:hide={visible} errors={errors} />
		{/if}
		<input type="text" name="username" placeholder="Username">
		<input type="email" name="email" placeholder="Email" maxlength="100" required>
		<input type="password" name="password" placeholder="Password">
		<input type="password" name="confirmPassword" placeholder="Confirm password">
		<button>Signup</button>
	</Form>
</ContainerForm>

<style>
	input {
		width: 100%;
		padding: 12px 14px;
		border: none;
		outline: 1px solid #bbbbbb;
		border-radius: 10px;
	}

	input:focus {
		outline: 2px solid #5383d3;
	}

	button {
		margin-left: auto;
		padding: 12px;
		border: none;
		background-color: #3cb85b;
		font-size: 20px;
		font-weight: 700;
		color: #ffffff;
		cursor: pointer;
	}

	button:hover {
		background-color: #109326;
	}
</style>
