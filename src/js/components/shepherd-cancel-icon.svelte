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
  <svg
    aria-hidden="true"
    class="shepherd-cancel-icon"
    fill="currentColor"
    height="1em"
    stroke="currentColor"
    stroke-width="0"
    viewBox="0 0 352 512"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <button
      aria-label={cancelIcon.label ? cancelIcon.label : 'Close Tour'}
      class="shepherd-cancel-icon"
      on:click={handleCancelClick}
      type="button"
    >
      <span aria-hidden="true">&times;</span>
    </button>
  </svg>
</div>

<style global>
  .shepherd-cancel-icon-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 30px;
    background-color: #ffffff;
    padding: 2px;
    border: 2px solid #f59c55;
    border-radius: 100%;
  }

  .shepherd-cancel-icon {
    background: transparent;
    border: none;
    color: #f59c55;
    font-size: 2em;
    cursor: pointer;
    font-weight: lighter;
    margin: auto;
    padding: 0;
    transition: color 0.5s ease;
  }

  .shepherd-cancel-icon:hover {
    color: #f59c55;
  }

  .shepherd-has-title .shepherd-content .shepherd-cancel-icon {
    color: #f59c55;
  }

  .shepherd-has-title .shepherd-content .shepherd-cancel-icon:hover {
    color: rgba(0, 0, 0);
  }
</style>
