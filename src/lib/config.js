import Logo from '$lib/assets/logo.png?enhanced';

export const config = {
    // General Config
    title: "Boogle",
    description: "Search engine ui built on top of searxng.",
    logo: Logo,
    // You can use youre own searxng instance or the public one, but it's recommended to use your own for better performance and privacy.
    searxngUrl: "http://searxng-core:8080",
    url: "https://boogle.ryan-he.org",
    author: "Ryan He, inbox@ryan-he.org",
    // Page Config
    generalResultsEnabled: true,
    imageResultsEnabled: true,
    videoResultsEnabled: true,
    newsResultsEnabled: true,
}