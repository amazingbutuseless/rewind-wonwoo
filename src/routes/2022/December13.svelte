<script lang="ts">
	import { inview } from 'svelte-inview';
	import { onMount } from 'svelte';

	import Link from '$lib/Link.svelte';
	import { EmojiAnimation } from '$lib/EmojiAnimation';
	import { fadeScale } from '$lib/utils/transition';

	let isInView: boolean = false;
	let showArticle: boolean = false;
	$: showEmojiAnimation = isInView && !showArticle;

	const messageLines = [
		'항상 고마워요 캐럿들.',
		'지쳐갈 때에도 캐럿들의 응원에 힘을 많이 얻어요.',
		'항상 옆에서 같이 걸어주셔서 감사합니다.',
		'캐럿들이 주는 응원 그 이상으로',
		'저도 캐럿들을 응원하겠습니다.',
		'음악으로도. 사람으로서도.'
	];

	let emojiAnimation: EmojiAnimation;

	onMount(() => {
		emojiAnimation = new EmojiAnimation({ maxSize: 240, minSize: 80, length: 30 });
		emojiAnimation.wrapperElm = document.querySelector('#rewind-2022-12-13-wrapper');
		emojiAnimation.articleElm = document.querySelector('#rewind-2022-12-13');
	});
</script>

<div
	id="rewind-2022-12-13-wrapper"
	class="relative -mx-8 pt-[50vh] box-border"
	use:inview
	on:change={({ detail }) => {
		isInView = detail.inView;
	}}
>
	{#if showEmojiAnimation}
		{@const changeBackgroundColor = emojiAnimation.changeBackgroundColor.bind(emojiAnimation)}

		<div
			class="emoji-wrapper"
			transition:changeBackgroundColor={{ duration: 1000 }}
			on:introstart={emojiAnimation.beforeStart.bind(emojiAnimation)}
			on:introend={emojiAnimation.beforeCompleted.bind(emojiAnimation)}
			on:outroend={emojiAnimation.afterCompleted.bind(emojiAnimation)}
		>
			{#each Array(emojiAnimation.length) as _, idx}
				{@const { src, alt, style } = emojiAnimation.pickRandomEmoji(idx)}
				<img
					class="absolute"
					{src}
					{alt}
					{style}
					transition:fadeScale={{
						delay: Math.floor(Math.random() * 1000)
					}}
					on:outroend={() => emojiAnimation.end(idx)}
				/>
			{/each}
		</div>
	{/if}

	<article
		id="rewind-2022-12-13"
		class="flex flex-col mb-8 p-8 w-screen md:w-full h-screen box-border"
		use:inview={{ threshold: 0.8, unobserveOnEnter: true }}
		on:change={({ detail }) => {
			showArticle = detail.inView;
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

		<div class="flex flex-col jusitfy-center items-center mt-auto mb-16">
			{#each messageLines as line}
				<p class="message">{line}</p>
			{/each}
			<p class="m-0 mt-6">😍👍❤️🥰</p>
		</div>
		<cite class="block photo-credits">startnewskorea.com</cite>
	</article>
</div>

<style lang="postcss">
	article {
		background-image: url(/images/221213_aaa.jpeg);
		background-size: 120vh;
		background-position: 67% 0;
		background-repeat: no-repeat;
		font-size: 1.6rem;
		scroll-snap-type: y proximity;
	}

	.date ~ h3 {
		color: var(--white);
	}

	.message {
		@apply font-body inline-block m-0 p-3 whitespace-nowrap text-[var(--black)] bg-[var(--green)];
	}

	.message ~ .message {
		@apply mt-1;
	}

	.emoji-wrapper {
		@apply fixed left-0 bottom-0 w-screen h-screen z-[1];

		--bg-color-opacity: 0;
		background-color: rgba(100, 215, 214, var(--bg-color-opacity));
	}
</style>
