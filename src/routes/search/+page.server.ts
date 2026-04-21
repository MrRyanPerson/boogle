import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { config } from '$lib/config';

export const load: PageServerLoad = async ({ url }) => {
	const query = url.searchParams.get('q');
	if (!query) {
		return { webResults: { results: [] }, imageResults: { results: [] }, videoResults: { results: [] }, error: null };
	}

	let response_web: any = { results: [] };
	let response_image: any = { results: [] };
	let response_video: any = { results: [] };
	let error: string | null = null;

	try {
		if (config.generalResultsEnabled) {
			try {
				const webResponse = await fetch(`${config.searxngUrl}/search?q=${encodeURIComponent(query)}&format=json`, { method: 'GET' });
				if (!webResponse.ok) {
					throw new Error(`Web search failed: ${webResponse.status} ${webResponse.statusText}`);
				}
				response_web = await webResponse.json();
			} catch (err) {
				console.error('Web search error:', err);
				error = error || 'Failed to fetch web results';
			}
		}

		if (config.imageResultsEnabled) {
			try {
				const imageResponse = await fetch(`${config.searxngUrl}/search?q=${encodeURIComponent(query)}&format=json&categories=images`, { method: 'GET' });
				if (!imageResponse.ok) {
					throw new Error(`Image search failed: ${imageResponse.status} ${imageResponse.statusText}`);
				}
				response_image = await imageResponse.json();
			} catch (err) {
				console.error('Image search error:', err);
				if (!error) error = 'Failed to fetch image results';
			}
		}

		if (config.videoResultsEnabled) {
			try {
				const videoResponse = await fetch(`${config.searxngUrl}/search?q=${encodeURIComponent(query)}&format=json&categories=videos`, { method: 'GET' });
				if (!videoResponse.ok) {
					throw new Error(`Video search failed: ${videoResponse.status} ${videoResponse.statusText}`);
				}
				response_video = await videoResponse.json();
			} catch (err) {
				console.error('Video search error:', err);
				if (!error) error = 'Failed to fetch video results';
			}
		}
	} catch (err) {
		console.error('Unexpected error during search:', err);
		error = 'An unexpected error occurred during search';
	}

	return { query, webResults: response_web, imageResults: response_image, videoResults: response_video, error };
};