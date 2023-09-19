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
    box-shadow: 0px 2px 20px 0px #ee6f281a;
    webkit-box-shadow: 0px 2px 20px 0px #ee6f281a;
    -moz-box-shadow: 0px 2px 20px 0px #ee6f281a;
    background-color: #fff6f1;
    outline: none;
    border-radius: 12px;
    padding-left: 15px;
    padding-right: 15px;
  }

  .shepherd-content:focus {
    outline: none;
  }
</style>
