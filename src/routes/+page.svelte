<script>
    import Search from '$lib/components/home/Search.svelte';
    import Footer from '$lib/components/home/Footer.svelte';
    import Nav from '$lib/components/home/Nav.svelte';

    import BgImage from '$lib/assets/bg-image.jpg?enhanced';
</script>

<main class="inline-block h-screen w-full relative overflow-hidden">
    <div class="absolute top-0 left-1/2 sm:left-0 w-full">
        <Nav />
    </div>
    <enhanced:img src={BgImage} class="w-full max-h-screen object-cover z-[-1]" alt="Background Image" sizes="min(512px, 100vw)" />
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4">
        <Search />
    </div>
</main>
<footer>
    <Footer />
</footer>