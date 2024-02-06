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
    <span aria-hidden="true">&times;</span>
  </div>
</div>

<style global>
  .shepherd-cancel-icon-container {
    width: 25px;
    height: 25px;
    background-color: #ffffff;
    padding: 2px;
    border: 0.9px solid #fee3d4;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 20px;
    color: #f27b1a;
  }

  .shepherd-cancel-icon-container:hover {
    background-color: #f27b1a;
    color: #ffffff;
  }

  .shepherd-cancel-icon {
    margin-top: -4px !important;
    width: 25px;
    height: 25px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .shepherd-cancel-icon > span {
    line-height: 25px;
  }
</style>
