<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import { bounceIn, expoIn, quadIn, quadOut, quintIn } from 'svelte/easing';

	import SpeechBubbleTail from './assets/SpeechBubbleTail.svelte';
	import { readTransitions } from './utils/transition';

	export let direction: 'left' | 'right';
	export let name: string;
	export let profileImageSrcSet: string;

	export let transitions = {};
	const { inFunc, inOptions, outFunc, outOptions } = readTransitions(transitions);

	export let afterIntro: VoidFunction = () => {};

	let showMessage: boolean = false;
</script>

<blockquote
	class={`grid grid-rows-1 gap-8 mt-6 ${direction}`}
	in:inFunc={inOptions}
	out:outFunc={outOptions}
	on:introend={afterIntro}
>
	<img
		srcset={profileImageSrcSet}
		alt={name}
		in:scale={{ easing: bounceIn }}
		on:introend={() => {
			showMessage = true;
		}}
	/>

	<p class="relative p-4 px-6 rounded" class:bg-none={!showMessage}>
		<strong class="block">{name}</strong>
		{#if showMessage}
			<slot />
		{/if}
		<SpeechBubbleTail
			class="speech-bubble-tail"
			color={direction === 'left' ? '#FFF4BB' : '#C5ECE8'}
		/>
	</p>
</blockquote>

<style lang="postcss">
	blockquote p {
		font-size: 1.6rem;
		background-image: linear-gradient(90deg, #fff4bb 0%, #c5ece8 100%);
	}

	blockquote img {
		border-radius: 3.4rem;
	}

	blockquote :global(.speech-bubble-tail) {
		position: absolute;
		top: 0.6rem;
	}

	blockquote.left {
		@apply grid-cols-[6.8rem_1fr];
	}

	blockquote.left img {
		@apply order-1;
	}

	blockquote.left p {
		@apply order-2;
	}

	blockquote.left :global(.speech-bubble-tail) {
		left: -1rem;
	}

	blockquote.right {
		@apply grid-cols-[1fr_6.8rem];
	}

	blockquote.right img {
		@apply order-2;
	}

	blockquote.right p {
		@apply order-1 text-right;
	}

	blockquote.right :global(.speech-bubble-tail) {
		right: -1rem;
		transform: scaleX(-1);
	}
</style>
