<script>
  import Demos from "./projects/Demos.svelte";
  import Webs from "./projects/Webs.svelte";
</script>

<section
  id="projects"
  class="grid md:grid-cols-[120px_1fr] gap-10 md:gap-20 py-20"
>
  <div>
    <h2>Projects</h2>
  </div>
  <div>
    <!-- projects -->
    <div>
      <h3 class="border-b border-dashed">Web Apps / Websites</h3>
      <Webs />
    </div>
    <!-- demos -->
    <div>
      <h3 class="border-b border-dashed">Demos</h3>
      <Demos />
    </div>
  </div>
</section>
