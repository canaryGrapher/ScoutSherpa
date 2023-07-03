<script>
  import ShepherdCancelIcon from './shepherd-cancel-icon.svelte';
  import ShepherdTitle from './shepherd-title.svelte';

  export let labelId, step;
  let title, cancelIcon;

  $: {
    title = step.options.title;
    cancelIcon = step.options.cancelIcon;
  }
</script>

<header class="shepherd-header">
  {#if title}
    <ShepherdTitle {labelId} {title} />
  {/if}
  {#if cancelIcon && cancelIcon.enabled}
    <ShepherdCancelIcon {cancelIcon} {step} />
  {/if}
</header>

<style global>
  .shepherd-header {
    align-items: center;
    display: flex;
    justify-content: space-between;
    background-color: #f19026;
    color: #fce8d4;
    margin: auto;
    padding: 0.5rem 1rem !important;
  }

  .shepherd-has-title .shepherd-content .shepherd-header {
    align-items: center;
    display: flex;
    justify-content: space-between;
    background-color: #f19026 !important;
    color: #fce8d4;
    margin: auto;
    padding: 0.5 1rem !important;
    background: #f19026;
  }
</style>
