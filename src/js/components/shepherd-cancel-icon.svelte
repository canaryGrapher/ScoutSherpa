<script>
  export let cancelIcon, step;

  /**
   * Add a click listener to the cancel link that cancels the tour
   */
  const handleCancelClick = (e) => {
    e.preventDefault();
    step.cancel();
  };
</script>

<div class="shepherd-cancel-icon-container">
  <button
    aria-label={cancelIcon.label ? cancelIcon.label : 'Close Tour'}
    class="shepherd-cancel-icon"
    on:click={handleCancelClick}
    type="button"
  >
    <span aria-hidden="true">&times;</span>
  </button>
</div>

<style>
  button {
    text-transform: none;
    cursor: pointer;
  }

  button,
  [type='button'] {
    -webkit-appearance: button;
    /* 1 */
    background-color: transparent;
    /* 2 */
    background-image: none;
    /* 2 */
  }

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    height: auto;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    /* 1 */
    font: inherit;
    /* 2 */
  }

  .shepherd-cancel-icon-container {
    height: 25px;
    width: 25px;
    line-height: 25px;
    background-color: #ffffff;
    padding: 2px;
    border: 0.8px solid #fee3d4;
    border-radius: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 20px;
    color: #f27b1a;
  }

  .shepherd-cancel-icon-container:hover {
    background-color: #f27b1a;
    color: #ffffff;
  }

  .shepherd-cancel-icon {
    cursor: pointer;
    display: inline-block;
    text-decoration: none;
    text-transform: uppercase;
    transition: 0.25s ease-in-out;
  }
</style>
