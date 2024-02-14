<script>
  import { isFunction } from "../utils/type-check";

  export let config, step;
  let action, classes, disabled, label, secondary, text;

  $: {
    action = config.action ? config.action.bind(step.tour) : null;
    classes = config.classes;
    disabled = config.disabled ? getConfigOption(config.disabled) : false;
    label = config.label ? getConfigOption(config.label) : null;
    secondary =
      config.secondary == null ||
      typeof config.secondary == undefined ||
      !config.secondary
        ? false
        : true;
    text = config.text ? getConfigOption(config.text) : null;
  }

  function getConfigOption(option) {
    if (isFunction(option)) {
      return (option = option.call(step));
    }
    return option;
  }
</script>

<button
  aria-label={label ? label : null}
  class={`${classes || ""} shepherd-button ${
    secondary ? "shepherd-button-secondary" : ""
  }`}
  {disabled}
  on:click={action}
  tabindex="0"
>
  {@html text}
</button>

<style global>
  .shepherd-button {
    background-color: #ffe3cb;
    color: #ef7c00;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    margin-right: 6px;
    padding: 6px;
    height: 36px;
    width: 105px;
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
    flex-grow: unset;
    margin: auto 0;
  }

  button.shepherd-button-primary {
    border: 0 !important;
    background: #ffe3cb;
    border: none;
  }

  button.shepherd-button-secondary {
    background: transparent;
    border: none;
  }

  button.shepherd-button-primary:not(:disabled):hover {
    background: #ef7c00;
    color: rgb(255, 255, 255);
  }

  button.shepherd-button-secondary:not(:disabled):hover {
    border: 2px solid #ef7c00 !important;
    color: #ef7c00;
    background: none;
  }

  .shepherd-button:disabled {
    cursor: not-allowed;
  }
</style>
