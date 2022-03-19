import { writable } from 'svelte/store';
import sanityClient from "../client";

const cache = new Map();

export function getData(url) {
	const store = writable(new Promise(() => {}));

	if (cache.has(url)) {
		store.set(Promise.resolve(cache.get(url)));
	}

	const load = async () => {
		// Fetch the inactions from Sanity, and replace the array.
		const data = await sanityClient.fetch(url);
		cache.set(url, data);
		store.set(Promise.resolve(data));
	}
	load()
	return store;
}