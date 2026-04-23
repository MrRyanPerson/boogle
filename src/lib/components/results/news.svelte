<script lang="ts">
    let { newsResults = {} } = $props();
</script>

<div class="w-full sm:w-3/4">
    {#if newsResults.results.length === 0}
        <p class="text-center opacity-50">No results found.</p>
    {/if}
    <ul class="list bg-base-100 rounded-box shadow-md">
        <li class="p-4 pb-2 text-xs opacity-60 tracking-wide">News Results</li>
        {#each newsResults.results as result}
            
        <li class="list-row flex-col sm:flex-row items-start">
            <img class="size-5 sm:size-6 rounded-box mb-2 sm:mb-0" src={`https://icons.duckduckgo.com/ip3/${new URL(result.url).hostname}.ico`} alt="icon"/>
            <div class="w-full">
                <a href={result.url} title={result.title}  rel="noopener noreferrer" class="font-medium underline text-sm sm:text-lg block">
                    {result.title}
                </a>
                <div class="breadcrumbs text-xs">
                    <ul>
                    {#each result.parsed_url as url}
                        {#if url !== "" && url !== "/" && url !== "https" && url !== "http"}
                            <li class="opacity-70">{url}</li>
                        {/if}
                    {/each}
                    </ul>
                </div>
                <p class="text-sm sm:text-md line-clamp-3 sm:line-clamp-2 w-full md:w-3/4" title={result.content}>
                {result.content}
                </p>
                <p class="text-sm sm:text-md w-full md:w-3/4" title={result.content}>
                {result.source} - {result.pubdate}
                </p>
            </div>
        </li>
        {/each}
    </ul>
</div>
