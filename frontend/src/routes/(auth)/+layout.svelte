<script lang="ts">
	import type { IKeys, ResponseSubmit } from '$lib/types/global';
	import { beforeNavigate, goto } from '$app/navigation';
  import { beforeUpdate } from 'svelte';
	import jsCookie from 'js-cookie';
	import axios from '$lib/axios';
	import { ErrorBox } from '$lib/components';
  import { NODE_ENV } from '$lib/config';
  import { handleForm } from "$lib/services";
  import { user } from '$lib/stores';
	import { Method } from '$lib/types/enums';

	let pathname: string;
	let errors: IKeys<string> | null = null;
	
	const setUppercase = (value: string) => {
		const firstLetter = value.at(0) ?? 's';

		return value.replace(firstLetter, firstLetter.toUpperCase());
	}; 
	
	async function handleSubmit(this: HTMLFormElement) {
		const data: ResponseSubmit = await handleForm(this)
			.catch(err => {
				console.log(err.message);
				goto('/');
			});

		if (data.user) {
			axios.defaults.headers.common['Authorization'] = data.token;
			jsCookie.set('authenticate', data.token, {
				expires: 15,
				secure: NODE_ENV === 'production'
			});
			goto('/user/' + data.user.username);
			user.setUser(data.user);
		} else if (data.errors) errors = data.errors;
	}

	beforeUpdate(() => pathname = location.pathname.replace('/', ''));
	beforeNavigate(() => errors = null);
</script>

<div id="sign-container">
	<h1>
		{setUppercase(pathname)}
	</h1>
	<form
		action={'/auth/' + pathname}
		method={Method.POST}
		on:submit|preventDefault={handleSubmit}
	>
		{#if errors}
			<ErrorBox bind:errors={errors} on:click={() => errors = null} />
		{/if}
		<slot />
	</form>
	<a
		class:register={pathname !== 'signin'}
		href={pathname === 'signin' ? '/signup' : '/signin'}
	>{pathname === 'signin' ? 'Create Account' : 'Sign In'}</a>
</div>

<style lang="postcss">
	#sign-container {
		grid-row: 1 / span 2;
		box-shadow: 0 0 4px #666666;
		@apply self-center flex flex-col justify-center w-[600px] h-full p-5 rounded-2xl bg-white gap-y-5;

		& h1 {
			@apply w-full text-center text-[48px] font-semibold leading-tight;
		}

		& form {
			@apply flex flex-col h-max gap-y-5;
		}

		& a {
			@apply block w-[100%] mx-auto py-4 bg-black rounded-xl text-center text-[20px] font-bold text-white;

			&.register {
				@apply w-[140px] py-3.5;
			}
		}
	}
</style>
