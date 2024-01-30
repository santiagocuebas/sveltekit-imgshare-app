<label>
	<input type="text" name="username" placeholder="Username or Email">
</label>
<label>
	<input type="password" name="password" placeholder="Password">
</label>
<button>
	Signin
</button>

<style lang="postcss">
	input {
		outline: 1px solid #bbbbbb;
		@apply w-full p-3.5 rounded-xl;

		&:focus {
			outline: 2px solid #5383d3;
		}
	}

	button {
		@apply py-4 rounded-xl bg-[#2999bf] text-[20px] font-bold text-white;

		&:hover {
			@apply bg-[#2989af];
		}
	}
</style>
