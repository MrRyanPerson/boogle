<script lang="ts">
    let { videoResults } = $props();
</script>

<div class="w-full sm:w-3/4">
    {#if videoResults.results.length === 0}
    <p class="text-center opacity-50">No results found.</p>
    {/if}
    <ul class="list bg-base-100 rounded-box shadow-md">
        <li class="p-4 pb-2 text-xs opacity-60 tracking-wide">Video Results</li>
        {#each videoResults.results as result}
            <li class="list-row">
            <div class="hidden sm:flex"><img class="size-32 rounded-box object-cover" loading="lazy" src={result.thumbnail} alt="Video thumbnail"/></div>
            <div>
                <div class="text-lg font-bold line-clamp-1"><a href={result.url}  rel="noopener noreferrer">{result.title}</a></div>
                <div class="text-xs font-semibold opacity-60 breadcrumbs">
                    <ul>
                        {#each result.parsed_url as url}
                            {#if url !== "" && url !== "/" && url !== "https" && url !== "http"}
                                <li class="">{url.replace("/", "")}</li>
                            {/if}
                        {/each}
                    </ul>
                </div>
                <p class="list-col-wrap text-md line-clamp-4 opacity-80" title={result.content}>
                {result.content}
                </p>
            </div>
            <a class="btn btn-square btn-ghost" href={result.url} title="Play Video" target="_blank" rel="noopener noreferrer">
            <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
            </a>
        </li>
        {/each}
    </ul>

</div>