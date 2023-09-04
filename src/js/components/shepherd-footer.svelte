<script>
  import ShepherdButton from './shepherd-button.svelte';

  export let step;
  // export let tourName;

  $: buttons = step.options.buttons;
</script>

<div class="shepherd-footer">
  <!-- <p class="footer-text">{tourName}</p> -->
  <div class="button-container">
    {#if buttons}
      {#each buttons as config}
        <ShepherdButton {config} {step} />
      {/each}
    {/if}
  </div>
</div>

<style global>
  /* .footer-text {
    padding-top: 5px;
    padding-bottom: 5px;
  } */

  .shepherd-footer {
    display: block;
    color: #fce8d4;
    padding: 0.1rem 0.8rem 1rem 0.8rem !important;
  }

  .button-container {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-start;
    gap: 0.1rem;
  }
</style>
