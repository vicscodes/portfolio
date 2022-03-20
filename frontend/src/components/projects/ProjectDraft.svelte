<script>
  export let title, description, liveUrl, sourceUrl;
  export let stack = [];
</script>

<div class="p-5 bg-neutral-800 space-y-4">
  <h4 class="uppercase">{title}</h4>
  <p class="text-sm text-neutral-300 leading-relaxed">{description}</p>
  <ul class="flex flex-wrap gap-y-1 gap-x-2 text-xs list-disc list-inside">
    {#each stack as item}
      <li class=" ">{item}</li>
    {/each}
  </ul>
  <div class="flex gap-4 text-sm">
    <a
      href={liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      class="border-b border-white hover:text-primary hover:border-primary"
      >Live Site
      <i class="fas fa-external-link-alt text-xs" />
    </a>
    <a
      href={sourceUrl}
      target="_blank"
      rel="noopener noreferrer"
      class="border-b border-white hover:text-primary hover:border-primary"
      >Source Code
      <i class="fas fa-external-link-alt text-xs" /></a
    >
  </div>
</div>
