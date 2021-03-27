<script lang="ts">
  import Description from "./Description.svelte";
  import Experiences from "./Experiences.svelte";
  import Sustainability from "./Sustainability.svelte";
</script>

<main>
  <div>
    <Description />
    <h3>Sustainability</h3>
    <Sustainability />
    <h3>Experiences</h3>
    <Experiences />
  </div>
</main>

<style>
  main {
    margin: 0.5em auto 0 auto;
    max-width: 40em;
  }
  div {
    margin: 0 1em;
  }
  h3 {
    margin-top: 2em;
  }
</style>
