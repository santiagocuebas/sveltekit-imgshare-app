<div id="register">
  Must be register to comment
  <div>
    <a href="/signin">
      <button class="black">
        Signin
      </button>
    </a>
    <a href="/signup">
      <button class="green">
        Signup
      </button>
    </a>
  </div>
</div>

<style lang="postcss">
  #register {
		box-shadow: 0 2px 10px #666666;
		@apply flex items-center w-full p-5 bg-white font-bold;

    & div {
      @apply flex ml-auto gap-1.5;
    }
	}

	button {
		@apply w-[70px] h-10 p-2.5 bg-black font-bold text-white hover:bg-[#3cb85b];
	}
</style>
