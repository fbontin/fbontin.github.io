<script lang="ts">
  import { getSustainability } from "./data";
</script>

<div>
  {#each getSustainability() as paragraph}
    <p>{@html paragraph}</p>
  {/each}
</div>

<style>
  div {
    border: 0.125em solid black;
    padding: 0.5em;
    text-align: left;
    background-color: var(--light-yellow);
    list-style-type: none;
  }
</style>
