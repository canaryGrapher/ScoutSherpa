<script>
  export let title;
  let total_progress, current_progress, percentage_progress;

  $: {
    function removeAlphabets(inputString) {
      return inputString.replace(/[a-zA-Z]/g, '');
    }
    total_progress = title.split('/')[1];
    current_progress = removeAlphabets(title.split('/')[0]);
    percentage_progress = (current_progress / total_progress) * 100;
  }
</script>

<div class="padding-container">
  <div class="shepherd-progress-bar">
    <span class="progress-bar" style="width: {percentage_progress}%" />
  </div>
</div>

<style>
  .padding-container {
    padding: 0 12px;
    margin: 0 auto;
  }

  .shepherd-progress-bar {
    background: #fee9da;
    height: 5px;
    border-radius: 5px;
    box-shadow: 0px 1px 4px 0px #0000001a inset;
    margin: 0 auto;
  }

  .progress-bar {
    background: #f59c55;
    height: 5px;
    display: block;
  }
</style>
