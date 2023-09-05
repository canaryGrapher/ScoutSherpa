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

<div class="shepherd-header">
  {#if title}
    <ShepherdTitle {labelId} {title} />
  {/if}
  {#if cancelIcon && cancelIcon.enabled}
    <ShepherdCancelIcon {cancelIcon} {step} />
  {/if}
</div>

<style global>
  .shepherd-header {
    align-items: center;
    display: flex;
    justify-content: space-between;
    color: #7e7977;
    margin: auto;
    padding: 6px 15px !important;
  }

  .shepherd-has-title .shepherd-content .shepherd-header {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: auto;
    border-radius: 12px;
  }
</style>
