<script>
  import { afterUpdate } from 'svelte';
  import { isFunction } from '../utils/type-check';

  export let labelId, element, title;

  afterUpdate(() => {
    if (isFunction(title)) {
      title = title();
    }
    const currentSteps = String(title).split('/');
    element.innerHTML =
      "<span class='currentStepIndicatorTitle'>" +
      currentSteps[0] +
      '</span>' +
      "<span class='totalStepsIndicatorTitle'>" +
      '/' +
      currentSteps[1] +
      ' ' +
      'steps' +
      '</span>';
  });
</script>

<!-- svelte-ignore a11y-missing-content -->
<h3 bind:this={element} id={labelId} class="shepherd-title" />

<style global>
  .shepherd-title {
    margin-top: 10px;
  }

  .currentStepIndicatorTitle {
    font-size: 15px;
    margin-right: 1px;
    color: #494848;
    font-weight: bold;
    vertical-align: baseline;
  }

  .totalStepsIndicatorTitle {
    vertical-align: bottom;
    font-weight: normal;
    font-size: 11px;
    color: #7e7977;
  }
</style>
