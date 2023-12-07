<script lang="ts">
  import axios from "axios";
  import type { ILink, IUserExtended } from "$lib/global";
	import { DIR } from '$lib/config.js';
	import { handleRequest } from "$lib/services/services";

	export let user: IUserExtended;
	export let showBox: (value: boolean) => void;

	let visibility = false;
	let links: ILink[] = JSON.parse(user.links);
  
  async function handleSubmit(this: HTMLFormElement) {
		visibility = false;

		const data = await handleRequest(this);

		showBox(data.change);
	}

	async function deleteLink(this: HTMLElement) {
		const data = await axios({
			method: 'DELETE',
			url: `${DIR}/api/admin/${user.username}/link`,
			data: { link: `${this.id}` },
			withCredentials: true
		}).then(res => res.data);

		if (data.change) links = links.filter((link: any) => link.title !== this.id);
		
		showBox(data.change);
	}
</script>

<div class="user-box-option">
  <div class="user-box-option">
    <h6>Description:</h6>
      <form action="{DIR}/api/admin/{user.username}/description" method='POST' on:submit|preventDefault={handleSubmit}>
        <textarea class="user-box-description" name="description" spellcheck="false" autocomplete="off" maxlength="4200" bind:value={user.description} on:focus={() => visibility = true}></textarea>
        {#if visibility}
        <button on:click|preventDefault={() => visibility = false}>Cancel</button>
        <button class="blue">Done</button>
        {/if}
      </form>
  </div>
  <div class="user-box-option">
    <h6>Links:</h6>
    <div class="user-box-links">
      {#each links as link}
        <p title="{link.url}">
          {link.title}
          <i
						id={link.title}
						class="fa-solid fa-xmark"
						title='delete-link-{link.title}'
						role="none"
						on:mousedown={deleteLink}
					></i>
        </p>
      {/each}
    </div>
  </div>
</div>

<style>
	.user-box-option {
		display: grid;
		row-gap: 5px;
	}

	.user-box-description, .user-box-links {
		height: 200px;
		padding: 10px;
		box-shadow: 0 0 0 1px #bbbbbb;
		overflow-y: auto;
		overflow-x: hidden;
		overflow-wrap: break-word;
		scrollbar-width: thin;
		scrollbar-color: #5383d3 #ffffff;
		overscroll-behavior: contain;
	}

	.user-box-description {
		cursor: pointer;
	}

	.user-box-option form {
		display: flex;
		justify-content: flex-end;
		flex-wrap: wrap;
		row-gap: 6px;
		column-gap: 5px;
	}

	.user-box-option textarea {
		width: 100%;
		border: none;
		outline: none;
	}

	.user-box-option button {
		width: 70px;
		padding: 5px 0;
		border: none;
		background-color: #db1818;
		font-weight: 700;
		color: #ffffff;
		cursor: pointer;
	}

	.user-box-option .blue {
		background-color: #4464f3;
	}

	.user-box-links {
		display: flex;
		align-content: start;
		flex-wrap: wrap;
		gap: 7px;
	}

	.user-box-links p {
		display: flex;
		align-items: center;
		width: 100%;
		padding: 5px;
		border-radius: 6px;
		box-shadow: 0 0 0 1px #bbbbbb;
	}
	
	.user-box-links i {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 16px;
		height: 16px;
		margin-left: auto;
		padding: 2px;
		border-radius: 50%;
		background-color: #df403b;
		font-size: 12px;
		color: #ffffff;
		cursor: pointer;
	}
</style>
