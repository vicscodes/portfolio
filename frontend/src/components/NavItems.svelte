<script>
  import { menuToggle } from "../stores/toggle";
  import { slide } from "svelte/transition";
  import { quintOut } from "svelte/easing";
</script>

<nav
  transition:slide={{ duration: 300, easing: quintOut }}
  class="fixed top-[68px] left-0 right-0 bottom-0 z-40 
  flex gap-8 flex-col justify-center items-center bg-secondary md:static 
  md:flex-row md:bg-transparent border-t border-white md:border-none"
>
  <ul
    class="flex flex-col gap-4  md:gap-8 text-center text-2xl md:flex-row md:text-base capitalize"
  >
    <li>
      <a href="#about" class="nav-item" on:click={() => ($menuToggle = false)}
        >about</a
      >
    </li>
    <li>
      <a
        href="#projects"
        class="nav-item"
        on:click={() => ($menuToggle = false)}>projects</a
      >
    </li>
    <li>
      <a href="#contact" class="nav-item" on:click={() => ($menuToggle = false)}
        >contact</a
      >
    </li>
  </ul>
</nav>

<style>
  .nav-item {
    background: linear-gradient(#4bfad4a6 0 0) var(--p, 0) 100% / var(--d, 0)
      50% no-repeat;
    transition: 0.3s, background-position 0s 0.3s;
  }
  .nav-item:hover {
    --d: 100%;
    --p: 100%;
  }
</style>
