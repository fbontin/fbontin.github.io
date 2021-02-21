<script lang="ts">
  import Link from "./Link.svelte";
  import { getMe } from "./data";
  const me = getMe();
</script>

<div>
  <img src="../face.png" alt="Filip in sunglasses" />
  <h3>{me.name}</h3>
  <p>{me.description}</p>

  <p>
    You can find me at <Link url={me.github} name="github" /> or <Link
      url={me.linkedin}
      name="linkedin"
    />.
  </p>
</div>

<style>
  div {
    text-align: center;
  }
  img {
    max-width: 12.5em;
    height: 12.5em;
    margin-top: 4em;
    border: 0.125em solid black;
  }
</style>
