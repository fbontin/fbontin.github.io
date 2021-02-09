<script lang="ts">
  import Icon from "./Icon.svelte";
  import { getMe } from "./data";
  const me = getMe();
</script>

<div class="description">
  <img class="face" src="../face.png" alt="Filip in sunglasses" />
  <h3 class="name">{me.name}</h3>
  <p>{me.description}</p>

  <div>
    <Icon url={me.github} />
    <Icon url={me.linkedin} />
  </div>
</div>

<style>
  .face {
    max-width: 200px;
    height: 200px;
    margin-top: 10%;
    border: 2px solid black;
  }
  .name {
    margin: 8px;
  }
  .description {
    padding: 8px;
    text-align: center;
  }
</style>
