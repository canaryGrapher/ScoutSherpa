<script>
  import { afterUpdate } from 'svelte';
  import { isFunction } from '../utils/type-check';

  export let labelId, element, title;

  afterUpdate(() => {
    if (isFunction(title)) {
      title = title();
    }

    element.innerHTML = title;
  });
</script>

<!-- svelte-ignore a11y-missing-content -->
<h3 bind:this={element} id={labelId} class="shepherd-title" />

<style global>
  .shepherd-title {
    color: rgb(255, 255, 255);
    display: flex;
    font-size: 0.2rem;
    font-weight: lighter;
    margin: auto 0;
    padding: 0;
  }
</style>
