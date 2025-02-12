<script>
    export let violations = [];
  </script>
  
  {#if violations.length > 0}
    <div class="fixed top-0 left-0 w-full bg-red-500 text-white text-center p-2">
      <strong>Ethics Alert:</strong>
      {#each violations as v}
        <p>{v}</p>
      {/each}
    </div>
  {/if}
  