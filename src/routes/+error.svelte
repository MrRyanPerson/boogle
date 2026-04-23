<script>
    import BgImage from '$lib/assets/bg-image.jpg?enhanced';
    import { resolve } from '$app/paths';
    import { page } from '$app/state';
    
</script>
<svelte:head>
    <title>{page.status} Error - {page.error.message}</title>
</svelte:head>
<main class="block h-screen w-full relative overflow-hidden bg-[#36373B]">
    <enhanced:img src={BgImage} class="w-full h-screen -translate-y-1/8 object-cover z-[-1] brightness-90" alt="Background" sizes="min(512px, 100vw)" />
    <div class="absolute top-0 left-0 w-full z-10 p-4">
        <a href={resolve('/')} class="font-thin text-3xl text-base-200">Go Home</a>
    </div>

    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4">
        <h1 class="text-7xl text-base-200 font-thin text-center mb-8">{page.status} Error, {page.error.message}</h1>
    </div>
</main>
