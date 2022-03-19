<script>
  import { getData } from "../stores/fetch";

  const query = '*[_type == "skills"]| order(id) {name, description}';
  const response = getData(query);
</script>

<section class="grid md:grid-cols-[120px_1fr] gap-10 md:gap-20 py-20">
  <div>
    <h2>Skills</h2>
  </div>
  <div class="space-y-8">
    <!-- {#await $response}
      <p>..loading</p>
    {:then data}
      {#each data as stack}
        <div class="pb-4 border-b space-y-2">
          <h3 class="text-xl md:text-2xl font-medium">{stack.name}</h3>
          <p>{stack.description}</p>
        </div>
      {/each}
    {:catch error}
      {@debug error}
    {/await} -->
    <div>
      <h3 class="font-bold">Languages && Libraries && Frameworks</h3>
      <ul class="flex flex-wrap gap-x-5 gap-y-3 mt-5 list-disc list-inside">
        <li class="marker:text-primary">JavaScript</li>
        <li class="marker:text-primary">Svelte</li>
        <li class="marker:text-primary">CSS (CSS3, Sass)</li>
        <li class="marker:text-primary">TailwindCSS</li>
        <li class="marker:text-primary">Parcel</li>
        <li class="marker:text-primary">Bootstrap</li>
        <li class="marker:text-primary">HTML</li>
      </ul>
    </div>
    <div>
      <h3 class="font-bold">Applications</h3>
      <ul class="flex flex-wrap gap-x-5 gap-y-3 mt-5 list-disc list-inside">
        <li class="marker:text-primary">GitHub</li>
        <li class="marker:text-primary">Git</li>
        <li class="marker:text-primary">Visual Studio Code</li>
        <li class="marker:text-primary">Figma</li>
      </ul>
    </div>
    <div>
      <h3 class="font-bold">Platforms</h3>
      <ul class="flex flex-wrap gap-x-5 gap-y-3 mt-5 list-disc list-inside">
        <li class="marker:text-primary">WordPress</li>
        <li class="marker:text-primary">Sanity</li>
        <li class="marker:text-primary">Strapi</li>
      </ul>
    </div>
  </div>
</section>

<style>
  .stack::-webkit-scrollbar {
    width: 10px;
  }

  .stack::-webkit-scrollbar-thumb {
    background: #666;
    border-radius: 20px;
  }

  .stack::-webkit-scrollbar-track {
    background: #ddd;
    border-radius: 20px;
  }
</style>
