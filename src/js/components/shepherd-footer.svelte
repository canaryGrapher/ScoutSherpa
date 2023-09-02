<script>
  import ShepherdButton from './shepherd-button.svelte';

  export let step, tourName;

  $: buttons = step.options.buttons;
</script>

<div class="shepherd-footer">
  <p class="footer-text">{tourName}</p>
  <div class="button-container">
    {#if buttons}
      {#each buttons as config}
        <ShepherdButton {config} {step} />
      {/each}
    {/if}
  </div>
</div>

<style global>
  .footer-text {
    padding-top: 5px;
    padding-bottom: 5px;
  }

  .shepherd-footer {
    display: block;
    color: #fce8d4;
    padding: 0.5rem 1rem !important;
  }

  .shepherd-footer .shepherd-button:last-child {
    color: #fce8d4;
    padding: 0.5rem 1rem !important;
  }

  .button-container {
    display: flex;
    justify-content: flex-start;
  }
</style>
