<input type="text" name="username" placeholder="Username">
<input type="email" name="email" placeholder="Email" maxlength="100">
<input type="password" name="password" placeholder="Password">
<input type="password" name="confirmPassword" placeholder="Confirm password">
<button>
	Signup
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
		@apply w-[140px] mx-auto py-3.5 rounded-xl bg-[#3cb85b] text-[20px] font-bold text-white;
		
		&:hover {
			@apply bg-[#109326];
		}
	}
</style>
