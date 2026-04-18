<script>
    import { resolve } from '$app/paths';
    import { config } from '$lib/config';
</script>

<div class="navbar">
    <div class="navbar-start border-neutral-800 border-0 border-l-2 mx-4">
        {#each config.nav as nav}
            <a class="font-bold px-4 py-1 rounded-0 border-neutral-800 border-0 border-r-2 uppercase text-neutral-800" href={resolve(nav.href)}>{nav.name}</a>
        {/each}
    </div>
</div>