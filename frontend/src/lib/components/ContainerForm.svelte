<script lang="ts">
  export let title: string;
</script>

<div>
	<h1>{title}</h1>
	<slot></slot>
</div>

<style>
	div {
		display: flex;
		flex-wrap: wrap;
		justify-self: center;
		width: 600px;
		height: fit-content;
		margin-top: 70px;
		border-radius: 16px;
		background-color: #ffffff;
		box-shadow: 0 2px 10px #666666;
	}

	h1 {
		width: 100%;
		padding: 20px 0;
		border-bottom: 1px solid #bbbbbb;
		font-size: 40px;
		text-align: center;
	}
</style>
