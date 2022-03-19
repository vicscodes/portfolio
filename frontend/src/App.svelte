<script>
  import Navbar from "./components/Navbar.svelte";
  import Hero from "./components/Hero.svelte";
  import WhatIDo from "./components/WhatIDo.svelte";
  import Skills from "./components/Skills.svelte";
  import Projects from "./components/Projects.svelte";
  import Contact from "./components/Contact.svelte";
</script>

<div class="w-11/12 md:w-9/12 max-w-screen-xl m-auto">
  <Navbar />
  <main>
    <Hero />
    <WhatIDo />
    <Skills />
    <Projects />
    <Contact />
  </main>
</div>

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  :global(body) {
    @apply font-Montserrat bg-secondary text-white text-sm md:text-base leading-loose;
  }
  :global(h2) {
    @apply inline-block text-lg md:text-xl text-neutral-400 border-b border-primary;
  }
</style>
