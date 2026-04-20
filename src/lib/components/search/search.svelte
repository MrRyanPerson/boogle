<script>
    import { resolve } from '$app/paths';
    import { config } from '$lib/config';
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';

    let { initialQuery = "" } = $props();

    let loading = $state(false);


    onMount(() => {
        if (typeof document.getElementById("query") !== 'undefined') {
            document.getElementById("query").value = initialQuery;
        }

        const input = document.getElementById('query');
        function focusInput(e) {
            if (e.ctrlKey && e.code === 'KeyK') {
                input.focus();
            }
        }
        document.addEventListener('keyup', focusInput, false);
    });

</script>
<div class="w-full sm:w-1/2 flex items-center justify-center py-4 px-2">
    <a class="flex items-center" href={resolve('/')} aria-label="Home">
        <enhanced:img class="w-10 h-10 ml-4 mr-8" src={config.logo} alt="Logo" />
    </a>
    <form class="items-center inline-flex w-full gap-2 sm:gap-4" id="searchForm" action="/search" method="GET">
        <label class="input rounded-2xl w-full">
        <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="2.5"
            fill="none"
            stroke="currentColor"
            >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
            </g>
        </svg>
        <input id="query" autocomplete="off" type="search" required name="q" placeholder="Search the Web..." />
        <kbd class="kbd kbd-sm hidden md:flex">ctrl</kbd>
        <kbd class="kbd kbd-sm hidden md:flex">K</kbd>
        </label>
    </form>
</div>

