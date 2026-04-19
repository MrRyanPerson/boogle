<script lang="ts">
    import { config } from '$lib/config';
    import { onMount } from 'svelte';

    onMount(() => {
        const input = document.getElementById('query');
        function focusInput(e) {
            if (e.ctrlKey && e.code === 'KeyK') {
                input.focus();
            }
        }
        document.addEventListener('keyup', focusInput, false);
    });
</script>
<h1 class="text-7xl md:text-8xl text-base-200 font-medium mb-6 text-center uppercase">{config.title}</h1>
<div class="sm:size-3/4 md:size-1/2 rounded-xl p-2 sm:p-6 md:p-8 mx-auto flex items-center justify-center">
    <form class="items-center inline-flex w-full gap-2 sm:gap-4" action="/search" method="GET">
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
        <input autocomplete="off" type="search" required name="q" id="query" placeholder="Search the Web..." />
        <kbd class="kbd kbd-sm hidden md:flex">ctrl</kbd>
        <kbd class="kbd kbd-sm hidden md:flex">K</kbd>
        </label>
        </form>
</div>