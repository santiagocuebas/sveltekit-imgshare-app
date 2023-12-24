<script lang="ts">
	import type { IKeys, ResponseData } from '$lib/global';
  import { beforeUpdate } from 'svelte';
	import { beforeNavigate, goto } from '$app/navigation';
	import { DIR } from '$lib/config.js';
  import { handleRequest } from "$lib/services/services";
  import { user } from '$lib/stores';
	import { ErrorBox } from '$lib/components';

	let pathname: string;
	let errors: IKeys<string> | null = null;
	
	async function handleSubmit(this: HTMLFormElement) {
		const data: ResponseData = await handleRequest(this)
			.catch(err => {
				console.log(err.message);
				return { redirect: true };
			});

		if (data.redirect) goto('/');
		else if (data.user) {
			user.setUser(data.user);
			goto('/user/' + data.user.username);
		} else if (data.errors) errors = data.errors;
	}

	beforeUpdate(() => pathname = location.pathname);
	beforeNavigate(() => errors = null);
</script>


<div id="sign-container">
	<h1>{pathname === '/signin' ? 'Signin' : 'Signup'}</h1>
	<form
		action='{DIR}/api/auth/signin'
		method='POST'
		on:submit|preventDefault={handleSubmit}
	>
		{#if errors}
			<ErrorBox bind:errors={errors} on:click={() => errors = null} />
		{/if}
		<slot />
	</form>
	<a
		class:register={pathname !== '/signin'}
		href={pathname === '/signin' ? '/signup' : '/signin'}
	>{pathname === '/signin' ? 'Create Account' : 'Sign In'}</a>
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
