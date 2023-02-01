<script lang="ts">
	import { scale } from 'svelte/transition';
	import { bounceIn } from 'svelte/easing';

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
		class="rounded-full z-0"
		in:scale={{ easing: bounceIn }}
		on:introend={() => {
			showMessage = true;
		}}
	/>

	<div class="message-container" class:bg-none={!showMessage}>
		<cite class="block not-italic font-bold">{name}</cite>
		{#if showMessage}
			<slot />
		{/if}
		<SpeechBubbleTail
			class="speech-bubble-tail"
			color={direction === 'left' ? '#FFF4BB' : '#C5ECE8'}
		/>
	</div>
</blockquote>

<style lang="postcss">
	.message-container {
		@apply relative p-4 px-6 rounded;

		font-size: 1.6rem;
		background-image: linear-gradient(90deg, #fff4bb 0%, #c5ece8 100%);
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

	blockquote.left .message-container {
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

	blockquote.right .message-container {
		@apply order-1 text-right;
	}

	blockquote.right :global(.speech-bubble-tail) {
		right: -1rem;
		transform: scaleX(-1);
	}
</style>
