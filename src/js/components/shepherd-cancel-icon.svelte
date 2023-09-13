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
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    aria-label={cancelIcon.label ? cancelIcon.label : 'Close Tour'}
    class="shepherd-cancel-icon"
    on:click={handleCancelClick}
    type="button"
  >
    &times;
    <!-- <span aria-hidden="true">&times;</span> -->
  </div>
</div>

<style>
  .shepherd-cancel-icon-container {
    height: 25px;
    width: 25px;
    line-height: 25px;
    background-color: #ffffff;
    padding: 2px;
    border: 0.9px solid #fee3d4;
    border-radius: 100%;
    text-align: center;
    font-size: 20px;
    color: #f27b1a;
    position: relative;
    cursor: pointer;
  }

  .shepherd-cancel-icon-container:hover {
    background-color: #f27b1a;
    color: #ffffff;
  }

  .shepherd-cancel-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-top: 0 !important;
  }
</style>
