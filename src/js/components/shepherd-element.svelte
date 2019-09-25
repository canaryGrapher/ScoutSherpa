<script>
  import { onMount } from 'svelte';
  import ShepherdContent from './shepherd-content.svelte';
  import { isUndefined } from '../utils/type-check.js';

  const KEY_TAB = 9;
  const KEY_ESC = 27;
  const LEFT_ARROW = 37;
  const RIGHT_ARROW = 39;

  export let classes, classPrefix, element, descriptionId, firstFocusableElement,
    focusableElements, labelId, lastFocusableElement, step;
  const dataStepId = { [`data-${classPrefix}shepherd-step-id`]: step.id };
  const hasCancelIcon = step.options && step.options.cancelIcon && step.options.cancelIcon.enabled;
  const hasTitle = step.options && step.options.title;

  export const getElement = () => element;

  onMount(() => {
    // Get all elements that are focusable
    focusableElements = element.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]');
    firstFocusableElement = focusableElements[0];
    lastFocusableElement = focusableElements[focusableElements.length - 1];
  });

  /**
   * Setup keydown events to allow closing the modal with ESC
   *
   * Borrowed from this great post! https://bitsofco.de/accessible-modal-dialog/
   *
   * @private
   */
  const handleKeyDown = (e) => {
    const { tour } = step;
    switch (e.keyCode) {
      case KEY_TAB:
        if (focusableElements.length === 0) {
          e.preventDefault();
          break;
        }
        // Backward tab
        if (e.shiftKey) {
          if (document.activeElement === firstFocusableElement) {
            e.preventDefault();
            lastFocusableElement.focus();
          }
        } else {
          if (document.activeElement === lastFocusableElement) {
            e.preventDefault();
            firstFocusableElement.focus();
          }
        }
        break;
      case KEY_ESC:
        if (tour.options.exitOnEsc) {
          step.cancel();
        }
        break;
      case LEFT_ARROW:
        if (tour.options.keyboardNavigation) {
          tour.back();
        }
        break;
      case RIGHT_ARROW:
        if (tour.options.keyboardNavigation) {
          tour.next();
        }
        break;
      default:
        break;
    }
  };
</script>

<style global>
  .shepherd-element {
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    max-width: 400px;
    outline: none;
    z-index: 9999;
  }

  .shepherd-element, .shepherd-element *, .shepherd-element *:after, .shepherd-element *:before {
    box-sizing: border-box;
  }

  .shepherd-element .popper__arrow {
    border: 16px solid transparent;
    content: '';
    display: block;
    height: 16px;
    pointer-events: none;
    position: absolute;
    width: 16px;
    z-index: 10000;
  }

  .shepherd-element[x-placement^='top'] .popper__arrow {
    bottom: -32px;
    border-top-color: #fff;
  }

  .shepherd-element[x-placement^='bottom'] .popper__arrow {
    border-bottom-color: #fff;
    top: -32px;
  }

  .shepherd-element[x-placement^='bottom'].shepherd-has-title .popper__arrow {
    border-bottom-color: #e6e6e6;
  }

  .shepherd-element[x-placement^='left'] .popper__arrow {
    border-left-color: #fff;
    right: -32px;
  }

  .shepherd-element[x-placement^='right'] .popper__arrow {
    border-right-color: #fff;
    left: -32px;
  }
</style>

<div
  aria-describedby={!isUndefined(step.options.text) ? descriptionId : null}
  aria-labelledby={step.options.title ? labelId : null}
  bind:this={element}
  class="{`${classes} shepherd-element ${hasCancelIcon ? 'shepherd-has-cancel-icon' : ''} ${hasTitle ? 'shepherd-has-title' : ''}`}"
  {...dataStepId}
  on:keydown={handleKeyDown}
  role="dialog"
  tabindex="0"
>
    {#if step.options.arrow && step.options.attachTo && step.options.attachTo.element}
      <div class="popper__arrow" x-arrow></div>
    {/if}
  <ShepherdContent
    {descriptionId}
    {labelId}
    {step}
  />
</div>