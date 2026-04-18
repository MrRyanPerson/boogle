<script lang="ts">
    import { config } from '$lib/config';
</script>

<h1 class="text-7xl md:text-8xl text-base-200 font-thin mb-6 text-center uppercase">{config.title}</h1>
<div class="sm:size-3/4 md:size-1/2 glass rounded-xl shadow-lg p-2 sm:p-6 md:p-8 mx-auto flex items-center justify-center">
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
        <input type="search" required name="q" placeholder="Search the Web..." />
        </label>
    </form>
</div>