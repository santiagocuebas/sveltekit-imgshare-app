<script lang="ts">
	import type { IKeys, ResponseSubmit } from "$lib/global";
  import { ErrorBox } from "$lib/components";
	import { Method } from "$lib/enums";
  import { handleForm } from "$lib/services";
	
	const contactData: IKeys<string> = { subject: '', email: '', message: '' };
	let url: string | null = null;
	let errors: IKeys<string> | null = null;

	async function handleSubmit(this: HTMLFormElement) {
		const data: ResponseSubmit = await handleForm(this)
			.catch(err => {
				console.error(err.message);
				return {};
			});
		
		if (data.url) {
			errors = null;
			url = data.url;
			contactData.subject = '';
			contactData.email = '';
			contactData.message = '';
			setTimeout(() => url = null, 10000);
		} else if (data.errors) errors = data.errors;
	}
</script>

<h1 class="footer-title">
	Contact
</h1>

<form
	class="footer-container"
	method={Method.POST}
	action="/contact"
	on:submit|preventDefault={handleSubmit}
>
	<h2>
		Leave us your message
	</h2>
	{#if errors}
		<ErrorBox bind:errors={errors} on:click={() => errors = null} />
	{/if}
	{#if url}
		<div>
			<p>The message has been sent successfully</p>
			<a href={url} target="_blank">{url}</a>
		</div>
	{/if}
	<label aria-label="subject">
		<input
			type="text"
			name="subject"
			autocomplete="off"
			maxlength="40"
			placeholder="Subject"
			bind:value={contactData.subject}
		>
	</label>
	<label aria-label="email">
		<input
			type="email"
			name="email"
			maxlength="100"
			placeholder="Email"
			bind:value={contactData.email}
		>
	</label>
	<label aria-label="message">
		<textarea
			name="message"
			rows="10"
			spellcheck="false"
			maxlength="4200"
			placeholder="Message"
			bind:value={contactData.message}
		></textarea>
	</label>
	<button>
		Send
	</button>
</form>

<style lang="postcss">
	.footer-container {
		@apply flex flex-col gap-5;

		& h2 {
			@apply self-center py-3 text-[24px] font-semibold;
		}

		& div {
			box-shadow: 0 0 0 2px #128945;
			@apply flex flex-col p-5 rounded-lg bg-[#81f795] text-center font-semibold text-black gap-y-1 [&_a]:text-[#223868];

			& p, a {
				@apply w-full text-[18px];
			}
		}

		& input, textarea {
			box-shadow: 0 0 2px #555555;
			@apply w-full p-3.5 rounded-lg;
		}

		& button {
			@apply self-center py-3 px-16 bg-[#5383d3] rounded-lg text-[18px] font-bold text-white;
		}
	}
</style>
