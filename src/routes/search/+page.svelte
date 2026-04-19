<script>
    import Tabs from '$lib/components/search/tabs.svelte';
    import Search from '$lib/components/search/search.svelte';
    import Footer from '$lib/components/home/Footer.svelte';
    import { config } from '$lib/config';

    let { data } = $props();
</script>
<svelte:head>
    <title>{`${config.title} | ${data.query || 'Search'}`}</title>
</svelte:head>
<main class="bg-base-200">
    <Search initialQuery={data.query} />
    <Tabs data={data} />
</main>
<footer>
    <Footer />
</footer>