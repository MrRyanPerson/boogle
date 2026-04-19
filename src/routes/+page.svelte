<script>
    import Search from '$lib/components/home/Search.svelte';
    import Footer from '$lib/components/home/Footer.svelte';
    import Nav from '$lib/components/home/Nav.svelte';
    import { config } from '$lib/config';

    import BgImage from '$lib/assets/bg-image.jpg?enhanced';
</script>
<svelte:head>
    <title>{config.title}</title>
</svelte:head>

<main class="block h-screen w-full relative overflow-hidden bg-[#36373B]">
    <enhanced:img src={BgImage} class="w-full h-screen -translate-y-1/8 object-cover z-[-1] brightness-90" alt="Background" sizes="min(512px, 100vw)" />
    <div class="absolute top-0 left-0 w-full z-10">
        <Nav />
    </div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4">
        <Search />
    </div>
</main>
<footer>
    <Footer />
</footer>