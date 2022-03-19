<script>
  import breakpoints from "../stores/breakpoints";
  import { menuToggle } from "../stores/toggle";
  import NavItems from "./NavItems.svelte";

  const bp = breakpoints();
  $: show = $bp !== "sm";
</script>

<header
  class="relative z-50 flex justify-between items-center py-5 border-b border-white"
>
  <div>
    <a href="/" class="font-bold tracking-widest uppercase">victoria martin</a>
  </div>
  <div>
    {#if show}
      <NavItems />
    {:else}
      <button on:click={() => ($menuToggle = !$menuToggle)}>
        <img src="/assets/menu.svg" alt="Victoria Martin" /></button
      >
    {/if}
  </div>
  {#if $menuToggle && show === false}
    <NavItems />
  {/if}
</header>
