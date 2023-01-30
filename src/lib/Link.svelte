<script lang="ts">
	import { onMount } from 'svelte';

	import TwitterIcon from '$lib/assets/TwitterIcon.svelte';
	import YoutubeIcon from '$lib/assets/YoutubeIcon.svelte';
	import EtcIcon from '$lib/assets/LinkIcon.svelte';
	import InstagramIcon from '$lib/assets/ico_instagram.png';
	import WeverseIcon from '$lib/assets/ico_weverse.png';

	export let type: 'twitter' | 'youtube' | 'instagram' | 'weverse' | 'etc';
	export let url: string;

	let externalLink: boolean;
	onMount(() => {
		externalLink = new URL(url).hostname !== window.location.hostname;
	});
</script>

<a
	href={url}
	class="inline-block"
	class:align-middle={['weverse', 'instagram'].includes(type)}
	target={externalLink ? '_blank' : '_self'}
	rel="noopener noreferrer"
>
	<slot />
	{#if type === 'twitter'}
		<TwitterIcon />
	{:else if ['weverse', 'instagram'].includes(type)}
		<img src={type === 'weverse' ? WeverseIcon : InstagramIcon} alt={type} width="20" height="20" />
	{:else if type === 'youtube'}
		<YoutubeIcon />
	{:else}
		<EtcIcon />
	{/if}
</a>
