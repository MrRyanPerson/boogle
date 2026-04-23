<script lang="ts">
    let { webResults = {} } = $props();
</script>

<div class="w-full sm:w-3/4">
    {#if webResults.results.length === 0}
        <p class="text-center opacity-50">No results found.</p>
    {/if}
    <ul class="list bg-base-100 rounded-box shadow-md">
        <li class="p-4 pb-2 text-xs opacity-60 tracking-wide">Web Results</li>
        {#if webResults.infoboxes.length > 0}
            <li class="list-row">
                <div class="border border-base-300 rounded-box p-4 w-full md:max-w-7/8">
                    <h2 class="font-medium text-lg md:text-xl">{webResults.infoboxes[0].infobox}</h2>
                    <div class="flex flex-col md:flex-row gap-2 md:gap-4 items-start mt-2">
                        {#if webResults.infoboxes[0].img_src}
                            <img class="rounded-box max-h-24 md:max-h-36 w-auto" src={webResults.infoboxes[0].img_src} alt={webResults.infoboxes[0].infobox}/>
                        {/if}
                        <div class="w-full">
                            <p class="font-medium text-sm opacity-75">{webResults.infoboxes[0].content}</p>
                            <a href={webResults.infoboxes[0].urls[0].url}  rel="noopener noreferrer" class="my-4 btn btn-sm btn-dash sm:btn-ghost rounded-xl capitalize">
                                <img src={`https://icons.duckduckgo.com/ip3/${new URL(webResults.infoboxes[0].urls[0].url).hostname}.ico`} alt={webResults.infoboxes[0].engine} class="size-3 sm:size-4 mr-1"/>
                                <span>{webResults.infoboxes[0].engine}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </li>
        {/if}
        {#each webResults.results as result}
            
        <li class="list-row flex-col sm:flex-row items-start">
            <img class="size-5 sm:size-6 rounded-box mb-2 sm:mb-0" src={`https://icons.duckduckgo.com/ip3/${new URL(result.url).hostname}.ico`} alt="icon"/>
            <div class="w-full">
                <a href={result.url}  rel="noopener noreferrer" class="font-medium underline text-sm sm:text-lg block max-w-[100vw] overflow-hidden" title={result.title}>
                    {result.title}
                </a>
                <div class="breadcrumbs text-xs max-w-[100vw] overflow-hidden">
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
            </div>
        </li>
        {/each}
    </ul>
</div>
