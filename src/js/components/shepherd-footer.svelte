<script>
  import ShepherdButton from './shepherd-button.svelte';

  export let step, tourName;

  $: buttons = step.options.buttons;
</script>

<footer class="shepherd-footer">
  {#if buttons}
    {#each buttons as config}
      <ShepherdButton {config} {step} />
    {/each}
  {/if}
  {tourName}
</footer>

<style global>
  .shepherd-footer {
    display: flex;
    background-color: #f19026;
    color: #fce8d4;
    padding: 0.5rem 1rem !important;
  }

  .shepherd-footer .shepherd-button:last-child {
    background-color: #f19026;
    color: #fce8d4;
    padding: 0.5rem 1rem !important;
  }
</style>
