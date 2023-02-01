<script lang="ts">
	import { fly, type FlyParams } from 'svelte/transition';

	export let messages: string[];

	export let options: FlyParams = { y: 16 };
</script>

<div>
	{#each messages as message, idx}
		<p in:fly={{ ...options, delay: (options.delay || 200) * idx }}>{message}</p>
	{/each}
</div>
