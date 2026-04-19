import Logo from '$lib/assets/logo.png?enhanced';

export const config = {
    // General Config
    title: "Boogle",
    description: "Search engine ui built on top of searxng.",
    logo: Logo,
    searxngUrl: "http://127.0.0.1:8080",
    url: "https://boogle.ryan-he.org",
    author: "Ryan He, inbox@ryan-he.org",
    // Page Config
    generalResultsEnabled: true,
    imageResultsEnabled: true,
    videoResultsEnabled: true,
    newsResultsEnabled: false,
}