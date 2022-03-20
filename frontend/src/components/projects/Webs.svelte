<script>
  import { getData } from "../../stores/fetch";
  import ProjectDraft from "./ProjectDraft.svelte";

  const query =
    "*[_type == 'projects' && projectCategory->name == 'Web Apps / Websites']{title, description,'category': projectCategory->name,stack, liveUrl, sourceUrl}";
  const response = getData(query);
</script>

<div class="grid lg:grid-cols-2 gap-5 my-5">
  {#await $response}
    <p>Loading</p>
  {:then data}
    {#each data as project}
      <ProjectDraft
        title={project.title}
        description={project.description}
        stack={project.stack}
        liveUrl={project.liveUrl}
        sourceUrl={project.sourceUrl}
      />
    {/each}
  {:catch error}
    <p>Ups something went wrong</p>
  {/await}
</div>
