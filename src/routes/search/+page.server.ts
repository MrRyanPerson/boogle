import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { config } from '$lib/config';

export const load: PageServerLoad = async ({ url }) => {
    const query = url.searchParams.get('q');
    if (!query) {
        return {
            webResults: { results: [] },
            imageResults: { results: [] },
            videoResults: { results: [] },
            newsResults: { results: [] },
            error: null
        };
    }

    const encoded = encodeURIComponent(query);

    // Build all enabled requests
    const requests: Record<string, Promise<Response>> = {};

    if (config.generalResultsEnabled) {
        requests.web = fetch(`${config.searxngUrl}/search?q=${encoded}&format=json`);
    }
    if (config.imageResultsEnabled) {
        requests.image = fetch(`${config.searxngUrl}/search?q=${encoded}&format=json&categories=images`);
    }
    if (config.videoResultsEnabled) {
        requests.video = fetch(`${config.searxngUrl}/search?q=${encoded}&format=json&categories=videos`);
    }
    if (config.newsResultsEnabled) {
        requests.news = fetch(`${config.searxngUrl}/search?q=${encoded}&format=json&categories=news`);
    }

    // Execute all in parallel
    const results = await Promise.allSettled(
        Object.values(requests)
    );

    const keys = Object.keys(requests);
    let errorMsg: string | null = null;

    // Parse results
    const parsed: any = {
        webResults: { results: [] },
        imageResults: { results: [] },
        videoResults: { results: [] },
        newsResults: { results: [] }
    };

    results.forEach((res, i) => {
        const key = keys[i];

        if (res.status === 'fulfilled' && res.value.ok) {
            // Successful fetch
            parsed[`${key}Results`] = res.value.json();
        } else {
            // Failed fetch
            console.error(`${key} search error:`, res);
            if (!errorMsg) {
                errorMsg = `Failed to fetch ${key} results`;
            }
        }
    });

    // Await JSON parsing for successful ones
    for (const key of keys) {
        if (parsed[`${key}Results`] instanceof Promise) {
            parsed[`${key}Results`] = await parsed[`${key}Results`];
        }
    }

    return {
        query,
        ...parsed,
        error: errorMsg
    };
};
