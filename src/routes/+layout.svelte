<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/logo.png';
	import { config } from '$lib/config';

	let { children } = $props();
</script>

<svelte:head>
	<!-- Meta tags -->
	<meta charset='UTF-8'>
	<meta name='description' content={config.description}>
	<meta name='subject' content={config.title}>
	<meta name='author' content={config.author}>

	<!-- Open Graph / Facebook -->
	<meta property="og:title" content={config.title}>
	<meta property="og:description" content={config.description}>
	<meta property="og:image" content={config.logo}>
	<meta property="og:url" content={config.url}>

	<link rel="icon" href={favicon} />
</svelte:head>
{@render children()}
