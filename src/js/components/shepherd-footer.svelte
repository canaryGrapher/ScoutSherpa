<script>
  import ShepherdButton from './shepherd-button.svelte';

  export let step;

  $: buttons = step.options.buttons;
</script>

<footer class="shepherd-footer">
  {#if buttons.length > 0}
    {#each buttons as config}
      <ShepherdButton {config} {step} />
    {/each}
  {:else}
    <p>Whatever you say, boss man!</p>
  {/if}
</footer>

<style global>
  .shepherd-footer {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    display: flex;
    justify-content: center;
    padding: 0 0.75rem 0.75rem;
    text-align: center;
  }

  .shepherd-footer .shepherd-button:last-child {
    margin-right: 0;
  }
</style>
