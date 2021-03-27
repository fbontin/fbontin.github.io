<script lang="ts">
  import { getExperiences } from "./data";
  const experiences = getExperiences();
</script>

<ul>
  {#each experiences as { title, text, startDate, endDate }}
    <li>
      <p><strong>{title}</strong>: {startDate} - {endDate}</p>
      <p>{text}</p>
    </li>
  {/each}
</ul>

<style>
  ul {
    padding: 0;
  }
  ul > :first-child {
    margin-top: 0;
  }
  li {
    text-align: left;
    border: 0.125em solid black;
    margin-top: 1em;
    padding: 0.5em;
    background-color: var(--light-yellow);
    list-style-type: none;
  }
</style>
