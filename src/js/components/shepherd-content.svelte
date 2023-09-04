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
  .shepherd-button-guide-me {
    position: fixed;
    left: 0;
    top: 50%;
    z-index: 500;
    padding: 5px 13px;
    border-radius: 5px 5px 0 0;
    border-color: rgb(239, 124, 0);
    color: #ffffff;
    background-color: rgb(239, 124, 0);
    transform: translate(0, -50%) rotate(90deg);
    cursor: pointer;
  }

  .shepherd-content {
    box-shadow: 0px 2px 20px 0px #ee6f281a;
    webkit-box-shadow: 0px 2px 20px 0px #ee6f281a;
    -moz-box-shadow: 0px 2px 20px 0px #ee6f281a;
    background-color: #fff6f1;
    outline: none;
    border-radius: 12px;
  }

  .shepherd-content:focus {
    outline: none;
  }

  .shepherd-highlight-border {
    border: 3px solid #ef7c00;
    border-radius: 5px;
  }
</style>
