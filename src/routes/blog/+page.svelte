<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageProps } from '../$types';
	import type { Posts } from '../types';

	let posts: Posts[] = $state([]);

	onMount(async () => {
		getPosts();
	});

	async function getPosts() {
		const response = await fetch('/blog', {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		});
		const result = await response.json();
		// console.log(result.data);

		posts = result.data;
	}
</script>

{#await getPosts()}
	<p>Loading Posts...</p>
{:then}
	{#each posts as post}
		{post.title}<br />
		{post.author}<br />
		{post.date}<br />
		{@html post.content}
	{/each}
{:catch error}
	<p>{error.message}</p>
{/await}
