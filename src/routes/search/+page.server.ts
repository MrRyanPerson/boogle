import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { config } from '$lib/config';

export const load: PageServerLoad = async ({ url }) => {
	const query = url.searchParams.get('q');
	if (!query) {
		return { webResults: [] };
	}


	let response_web: any = { results: [] };
	let response_image: any = { results: [] };
	let response_video: any = { results: [] };

	if (config.generalResultsEnabled) {
		response_web = await (await fetch(`${config.searxngUrl}/search?q=${encodeURIComponent(query)}&format=json`, { method: 'GET' })).json();
	}
	if (config.imageResultsEnabled) {
		response_image = await (await fetch(`${config.searxngUrl}/search?q=${encodeURIComponent(query)}&format=json&categories=images`, { method: 'GET' })).json();
	}
	if (config.videoResultsEnabled) {
		response_video = await (await fetch(`${config.searxngUrl}/search?q=${encodeURIComponent(query)}&format=json&categories=videos`, { method: 'GET' })).json();
	}

	return { query, webResults: response_web, imageResults: response_image, videoResults: response_video };
};