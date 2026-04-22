<script>
    import WebResults from '$lib/components/results/web.svelte';
    import ImageResults from '$lib/components/results/image.svelte';
    import VideoResults from '$lib/components/results/video.svelte';
    import { config } from '$lib/config';

    let { data } = $props();
</script>

<div class="flex items-center w-full max-w-[100vw]">
    <div class="tabs tabs-box">
        {#if config.generalResultsEnabled}
        <label class="tab">
            <input type="radio" name="search_selector" checked="checked" />
            <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2" viewBox="0 -960 960 960" fill="currentColor"><path d="M40-120v-80h880v80H40Zm120-120q-33 0-56.5-23.5T80-320v-440q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v440q0 33-23.5 56.5T800-240H160Zm0-80h640v-440H160v440Zm0 0v-440 440Z"/></svg>
            Web
        </label>
        <div class="tab-content">
            <WebResults webResults={data.webResults} />
        </div>
        {/if}
        {#if config.imageResultsEnabled}
        <label class="tab">
            <input type="radio" name="search_selector" />
            <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2" viewBox="0 -960 960 960" fill="currentColor"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm40-80h480L570-480 450-320l-90-120-120 160Zm-40 80v-560 560Z"/></svg>
            Images
        </label>
        <div class="tab-content">
            <ImageResults imageResults={data.imageResults} />
        </div>
        {/if}
        {#if config.videoResultsEnabled}
        <label class="tab">
            <input type="radio" name="search_selector" />
            <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2" viewBox="0 -960 960 960" fill="currentColor"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm40-80h480L570-480 450-320l-90-120-120 16<PASSWORD>"/></svg>
            Videos
        </label>
        <div class="tab-content">
            <VideoResults videoResults={data.videoResults} />
        </div>
        {/if}
        {#if config.newsResultsEnabled}
        <label class="tab">
            <input type="radio" name="search_selector" />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 me-2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
            News
        </label>
        <div class="tab-content bg-base-100 border-base-300 p-6">Tab content 3</div>
        {/if}
    </div>
</div>
