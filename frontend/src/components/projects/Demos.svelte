<script>
  import { getData } from "../../stores/fetch";

  const query =
    "*[_type == 'projects' && projectCategory->name == 'Demos']{title, description,'category': projectCategory->name,stack, liveUrl, sourceUrl}";
  const response = getData(query);
</script>

<div class="grid lg:grid-cols-2 gap-5 my-5">
  {#await $response}
    <p>Loading</p>
  {:then data}
    {#each data as project}
      <div class="p-5 bg-neutral-800 space-y-4">
        <h4 class="uppercase">{project.title}</h4>
        <p class="text-sm text-neutral-300">{project.description}</p>
        <ul
          class="flex flex-wrap gap-y-1 gap-x-2 text-xs list-disc list-inside"
        >
          {#each project.stack as item}
            <li class=" ">{item}</li>
          {/each}
        </ul>
        <div class="flex gap-4 text-sm">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="border-b border-white hover:text-primary hover:border-primary"
            >Live Site
            <i class="fas fa-external-link-alt" />
          </a>
          <a
            href={project.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="border-b border-white hover:text-primary hover:border-primary"
            >Source Code
            <i class="fas fa-external-link-alt" /></a
          >
        </div>
      </div>
    {/each}
  {:catch error}
    <p>Ups something went wrong</p>
  {/await}
</div>
