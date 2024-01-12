<script lang="ts">
	import type { IKeys, ResponseData } from '$lib/global';
	import { beforeNavigate, goto } from '$app/navigation';
  import { beforeUpdate } from 'svelte';
	import jsCookie from 'js-cookie';
	import { ErrorBox } from '$lib/components';
  import { DIR, NODE_ENV } from '$lib/config';
  import { handleRequest } from "$lib/services";
  import { user } from '$lib/stores';

	let pathname: string;
	let errors: IKeys<string> | null = null;
	
	const setUppercase = (value: string) => {
		if (value) {
			const firstLetter = value?.at(0) ?? 's';
			return value.replace(firstLetter, firstLetter?.toUpperCase());
		}

		return '';
	}; 
	
	async function handleSubmit(this: HTMLFormElement) {
		const data: ResponseData = await handleRequest(this)
			.catch(err => {
				console.log(err.message);
				return { redirect: true };
			});

		if (data.redirect) goto('/');
		else if (data.user) {
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
	<h1>{setUppercase(pathname)}</h1>
	<form
		action={DIR + '/api/auth/' + pathname}
		method='POST'
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
