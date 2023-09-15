<script>
  import { afterUpdate } from 'svelte';
  import { isHTMLElement, isFunction } from '../utils/type-check';
  import ShepherdProgressBar from './shepherd-progress-bar.svelte';

  export let descriptionId, element, step, title;

  $: {
    title = step.options.title;
  }

  afterUpdate(() => {
    let { text } = step.options;

    if (isFunction(text)) {
      text = text.call(step);
    }

    if (isHTMLElement(text)) {
      element.appendChild(text);
    } else {
      element.innerHTML = text;
    }
  });
</script>

<div>
  {#if title}
    <ShepherdProgressBar {title} />
  {/if}

  <div bind:this={element} class="shepherd-text" id={descriptionId} />
</div>

<style global>
  .shepherd-text {
    font-family: Mulish, system-ui, -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif !important;
    font-size: 13px !important;
    line-height: 15px !important;
    padding: 12px 12px !important;
    color: #414141;
  }

  .shepherd-text p {
    margin-top: 0;
  }

  .shepherd-text p:last-child {
    margin-bottom: 0;
  }
</style>
