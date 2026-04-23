<script>
    import { Lightbox } from 'svelte-lightbox';
    let { imageResults = {} } = $props();
</script>

<div class="w-full">
    {#if imageResults.results.length === 0}
        <p class="text-center opacity-50">No results found.</p>
    {/if}
    <div class="bg-base-100 rounded-box shadow-md">
        <div class="p-4 pb-2 text-xs opacity-60 tracking-wide">Image Results</div>
        <div class="flex flex-wrap gap-x-6 gap-y-2 p-4">
        {#each imageResults.results as result}
            <div class="border border-base-300 rounded-sm overflow-hidden min-w-30 max-w-40 sm:min-w-50 sm:max-w-60 shrink-0">
                <div class="block w-full h-full">
                    <Lightbox title={`${result.title} (${result.resolution})`}>
                        <img slot="thumbnail" loading="lazy" class="object-cover w-full max-h-40" src={result.thumbnail_src} alt="Thumbnail">
                        <img loading="lazy" src={result.img_src} alt={result.title} />
                    </Lightbox>
                    <a href={result.url} target="_blank" rel="noopener noreferrer" class="p-2">
                        <p class="text-sm font-medium line-clamp-2 hover:underline" title={result.title}>{result.title}</p>
                        <p class="text-xs opacity-60" title={result.url}>{new URL(result.url).hostname}</p>
                    </a>
                </div>
            </div>
        {/each}
        </div>
    </div>
</div>