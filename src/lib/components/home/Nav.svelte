<script>
    import { resolve } from '$app/paths';
    import { config } from '$lib/config';
</script>

<div class="navbar">
    <div class="navbar-start mx-4">
        <a href={resolve('/')} class="flex items-center">
            <enhanced:img src={config.logo} class="size-10" alt="logo" />
        </a>
    </div>
</div>