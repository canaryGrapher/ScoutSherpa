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
    display: flex;
    font-size: 0.8rem;
    padding: 0;
    margin-top: 10px;
  }

  .currentStepIndicatorTitle {
    font-size: 1.4rem;
    margin: auto 3px 0 0;
    color: #494848;
    font-weight: bold;
  }

  .totalStepsIndicatorTitle {
    font-weight: normal;
    margin: auto 0 5px 0;
    color: #7e7977;
  }
</style>
