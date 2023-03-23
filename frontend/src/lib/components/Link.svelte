<script lang="ts">
  import axios from "axios";

  export let title: string;
  export let url: string;
  export let links: any[];

  const handleDelete = async () => {
    const data = await axios({
      method: 'DELETE',
      url: 'http://localhost:4200/api/settings/deletelink',
      withCredentials: true,
      data: { title, url }
    }).then(res => res.data);

    links = links.filter(link => link.title !== title);

    console.log(data);
  };
</script>

<div title={url}>
  {title}
  <button on:click|preventDefault={handleDelete}>
    <i class="fa-solid fa-xmark"></i>
  </button>
</div>

<style>
  div {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px;
    outline: 1px solid #bbbbbb;
    border-radius: 4px;
    font-weight: 700;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    margin-left: auto;
    border: none;
    border-radius: 50%;
    background-color: #d62525;
    color: #ffffff;
    cursor: pointer;
  }

  i {
    font-size: 20px;
  }
</style>
