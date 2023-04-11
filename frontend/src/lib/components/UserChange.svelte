<script lang="ts">
  import axios from "axios";
  import { UserRole } from "$lib/enums";
	import { DIR } from '$lib/config.js';

	export let username: string;
	export let role: string;
	export let myRole: string;
	export let alert: boolean;
	export let showBox: (value: boolean) => void;

	async function changeRole(this: HTMLOptionElement) {
		const data = await axios({
			method: 'POST',
			url: `${DIR}/api/admin/${username}/role`,
			data: { role: this.value },
			withCredentials: true
		}).then(res => res.data);

		role = this.value;
		
		showBox(data.change);
	}

	async function deleteUser() {
		if (role !== UserRole.ADMIN) {
			alert = true;
		}
	}
</script>

<div class="user-box-change">
  <div>
    <h6>Change role:</h6>
    <select name="role" id="role" on:change={changeRole}>
      <option value="editor" selected={role === UserRole.EDITOR} disabled={role === UserRole.ADMIN && myRole !== UserRole.SUPER}>
				EDITOR
			</option>
      <option value="mod" selected={role === UserRole.MOD} disabled={role === UserRole.ADMIN && myRole !== UserRole.SUPER}>
				MOD
			</option>
      <option value="admin" selected={role === UserRole.ADMIN} disabled={myRole !== UserRole.SUPER}>
				ADMIN
			</option>
    </select>
  </div>
  <div>
    <h6>Delete user:</h6>
    <button on:click|preventDefault={deleteUser}>Delete</button>
  </div>
</div>

<style>
  .user-box-change {
		display: grid;
		grid-auto-rows: 1fr;
		align-items: center;
	}

	.user-box-change div {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
	}

	.user-box-change h6 {
		width: 100%;
	}

	.user-box-change select {
		margin: auto;
		padding: 5px 25px;
		border: none;
		background-color: #ffffff;
		box-shadow: 0 0 0 2px #999999;
		text-align: center;
		font-weight: 700;
		cursor: pointer;
	}

	.user-box-change option:hover {
		background-color: #000000;
		color: #ffffff;
		cursor: pointer;
	}

	.user-box-change button {
		margin: auto;
		padding: 8px 24px;
		border: none;
		border-radius: 8px;
		background-color: #df403b;
		box-shadow: 2px 2px 5px #666666;
		font-size: 20px;
		font-weight: 700;
		color: #ffffff;
		cursor: pointer;
	}

	.user-box-change button:hover {
		background-color: #ef504b;
	}
</style>
