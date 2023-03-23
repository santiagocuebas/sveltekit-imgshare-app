<script lang="ts">
  export let className: string;
  export let text: string;
</script>

<div>
  <i class={className}></i>
  <p>{text}</p>
</div>

<style>
  div {
    display: flex;
    position: fixed;
    justify-content: space-around;
    align-items: center;
    width: 400px;
    height: 200px;
    left: auto;
    right: auto;
    bottom: 80px;
    box-shadow: 0 0 5px 3px #444444;
    background-color: #ffffff;
    z-index: 500;
  }

  i {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 180px;
    height: 180px;
    outline: 2px solid #000000;
    border-radius: 50%;
    font-size: 160px;
  }

  .fa-check {
    background-color: #97f09e;
    color: #0b7c14;
  }
  
  .fa-xmark {
    background-color: #f09797;
    color: #7c0b0b;
  }

  p {
    width: 180px;
    text-align: center;
    font-weight: 700;
  }
</style>
