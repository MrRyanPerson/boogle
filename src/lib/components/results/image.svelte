<script>
    let { imageResults = {} } = $props();
</script>

<div class="w-full">
    {#if imageResults.results.length === 0}
        <p class="text-center opacity-50">No results found.</p>
    {/if}
    <div class="bg-base-100 rounded-box shadow-md">
        <div class="p-4 pb-2 text-xs opacity-60 tracking-wide">Image Results</div>
        <div class="flex flex-wrap gap-4 p-4">
        {#each imageResults.results as result}
            <div class="border border-base-300 rounded-box overflow-hidden max-w-40 sm:max-w-52 shrink-0">
                <a href={result.url} target="_blank" rel="noopener noreferrer" class="block w-full h-full">
                    <img loading="lazy" class="max-h-48 object-cover" src={result.thumbnail_src} alt={result.title}/>
                    <div class="p-2">
                        <p class="text-sm font-medium line-clamp-2" title={result.title}>{result.title}</p>
                        <p class="text-xs opacity-60" title={result.url}>{new URL(result.url).hostname}</p>
                    </div> 
                </a>
            </div>
        {/each}
        </div>
    </div>
</div>