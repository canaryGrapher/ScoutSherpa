<script>
  import ShepherdFooter from './shepherd-footer.svelte';
  import ShepherdHeader from './shepherd-header.svelte';
  import ShepherdText from './shepherd-text.svelte';
  import { isUndefined } from '../utils/type-check.js';

  export let descriptionId, labelId, step, tourName, overlayPresent;
</script>

<div class="shepherd-content">
  {#if !isUndefined(step.options.title) || (step.options.cancelIcon && step.options.cancelIcon.enabled)}
    <ShepherdHeader {labelId} {step} />
  {/if}

  {#if !isUndefined(step.options.text)}
    <ShepherdText {descriptionId} {step} />
  {/if}
  <!-- {#if Array.isArray(step.options.buttons) && step.options.buttons.length} -->
  {#if !isUndefined(tourName) || !overlayPresent}
    <ShepherdFooter {step} {tourName} />
  {/if}
  <!-- {/if} -->
</div>

<style global>
  .shepherd-content {
    background-color: #fff6f1;
    outline: none;
    border-radius: 12px;
    padding-left: 5px;
    padding-right: 5px;
  }

  .shepherd-content:focus {
    outline: none;
  }
</style>
