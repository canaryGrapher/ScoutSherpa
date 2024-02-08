<script>
  import ShepherdButton from './shepherd-button.svelte';

  export let step;

  $: buttons = step.options.buttons;
</script>

<div class="shepherd-footer">
  <!-- uncomment the next line if you want to show the tourname in the footer -->
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
    color: #fce8d4;
    padding: 5px 10px 12px 5px !important;
  }

  .button-container {
    display: flex;
    flex-direction: row-reverse;
    gap: 4px;
  }
</style>
