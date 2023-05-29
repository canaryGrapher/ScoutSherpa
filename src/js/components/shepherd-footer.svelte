<script>
  import ShepherdButton from './shepherd-button.svelte';

  export let step, tourName;

  $: buttons = step.options.buttons;
</script>

<footer class="shepherd-footer">
  {tourName}
  <div class="button-container">
    {#if buttons}
      {#each buttons as config}
        <ShepherdButton {config} {step} />
      {/each}
    {/if}
  </div>
</footer>

<style global>
  .shepherd-footer {
    display: block;
    background-color: #f19026;
    color: #fce8d4;
    padding: 0.5rem 1rem !important;
  }

  .shepherd-footer .shepherd-button:last-child {
    background-color: #f19026;
    color: #fce8d4;
    padding: 0.5rem 1rem !important;
  }

  .button-container {
    display: flex;
    justify-content: flex-start;
  }
</style>
