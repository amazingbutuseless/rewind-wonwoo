<script lang="ts">
	import { inview } from 'svelte-inview';
	import { fade } from 'svelte/transition';

	import Link from '$lib/Link.svelte';
	import { typewriter, TYPEWRITER_DURATION_FACTOR } from '$lib/transitions/typewriter';

	let isInView: boolean;

	const messageLines = [
		'항상 고마워요 캐럿들.',
		'지쳐갈 때에도 캐럿들의 응원에 힘을 많이 얻어요.',
		'항상 옆에서 같이 걸어주셔서 감사합니다.',
		'캐럿들이 주는 응원 그 이상으로',
		'저도 캐럿들을 응원하겠습니다.',
		'음악으로도. 사람으로서도.'
	];
</script>

<article
	id="2022-12-13"
	class="flex flex-col relative -mx-8 my-8 p-8 h-screen box-border"
	use:inview={{ unobserveOnEnter: true }}
	on:change={({ detail }) => {
		isInView = detail.inView;
	}}
>
	<div class="flex align-start">
		<time datetime="2022-12-13" class="date">13</time>
		<h3 class="m-0 p-0">
			2022 Asia Artist Awards
			<Link type="youtube" url="https://www.youtube.com/watch?v=PEqwoYSPpcY" />
			<Link type="weverse" url="https://weverse.io/seventeen/artist/3-109271424" />
		</h3>
	</div>

	<div class="mt-auto mb-16 text-center">
		{#if isInView}
			{#each messageLines as line, idx}
				<span
					class="message"
					transition:typewriter={{
						speed: 1.6,
						delay:
							messageLines.slice(0, idx + 1).reduce((a, c) => `${a}${c}`).length /
								TYPEWRITER_DURATION_FACTOR || 0
					}}>{line}</span
				>
				<br />
			{/each}
			<span class="inline-block mt-6" transition:fade>😍👍❤️🥰</span>
		{/if}
	</div>
	<cite class="block not-italic text-sm">credits: startnewskorea.com</cite>
</article>

<style lang="postcss">
	article {
		background-image: url(/images/221213_aaa.jpeg);
		background-size: 120vh;
		background-position: 67% 0;
		background-repeat: no-repeat;
		font-size: 1.6rem;
		scroll-snap-type: y proximity;
	}

	article cite {
		color: var(--white);
		opacity: 0.5;
	}

	.date ~ h3 {
		color: var(--white);
	}

	.message:not(:empty) {
		@apply font-body inline-block p-3 whitespace-nowrap;

		background-color: var(--green);
		color: var(--black);
	}

	.message ~ .message {
		margin-top: 0.2rem;
	}
</style>
