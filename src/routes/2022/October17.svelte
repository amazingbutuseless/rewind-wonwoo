<script lang="ts">
	import { inview } from 'svelte-inview';
	import { fly } from 'svelte/transition';

	import WeverseSpeechBubble from '$lib/WeverseSpeechBubble.svelte';
	import FlyMessages from '$lib/FlyMessages.svelte';

	let isInView = false;

	let animatedBubbleIdx: number = 0;

	function increaseAnimatedBubbleIdx() {
		setTimeout(() => {
			animatedBubbleIdx++;
		}, 700);
	}
</script>

<article id="2022-10-17" class="my-8">
	<img src="/images/weverse_4-253703726.jpg" alt="짜잔" class="photo" />

	<section class="flex flex-col p-8 h-screen box-border">
		<time datetime="2022-10-17" class="date z-0">17</time>

		<div
			class="mt-auto mb-16 min-w-[35rem] self-center"
			use:inview={{ unobserveOnEnter: true }}
			on:change={({ detail }) => {
				isInView = detail.inView;
			}}
		>
			{#if isInView}
				<WeverseSpeechBubble
					transitions={{ in: { func: fly, options: { y: 100 } } }}
					afterIntro={increaseAnimatedBubbleIdx}
					direction="right"
					name="원우"
					profileImageSrcSet="/images/ico_wonwoo.png 1x, /images/ico_wonwoo@2x.png 2x"
				>
					<FlyMessages messages={['짜잔']} />
				</WeverseSpeechBubble>

				{#if animatedBubbleIdx >= 1}
					<WeverseSpeechBubble
						transitions={{ in: { func: fly, options: { y: 100 } } }}
						afterIntro={increaseAnimatedBubbleIdx}
						direction="left"
						name="승관"
						profileImageSrcSet="/images/ico_sg.png 1x, /images/ico_sg@2x.png 2x"
					>
						<FlyMessages messages={['어떤 부분이 짜잔인거야']} />
					</WeverseSpeechBubble>
				{/if}

				{#if animatedBubbleIdx >= 2}
					<WeverseSpeechBubble
						transitions={{ in: { func: fly, options: { y: 100 } } }}
						direction="left"
						name="정한"
						profileImageSrcSet="/images/ico_jh.png 1x, /images/ico_jh@2x.png 2x"
					>
						<FlyMessages messages={['ㅋㅋㅋㅋㅋㅋㅋ 진짜로ㅋㅋㅋ', '귀여워 원우…..']} />
					</WeverseSpeechBubble>
				{/if}
			{/if}
		</div>

		<cite class="photo-credits">원우</cite>
	</section>
</article>

<style lang="postcss">
	article {
		@apply relative overflow-hidden z-0;
	}

	article::before {
		@apply absolute inset-0 w-full h-full -z-[1];
		background-image: url(/images/weverse_4-253703726.jpg);
		background-size: cover;
		background-position: center;
		content: url(/images/weverse_4-253703726.jpg);
		filter: blur(25vw);
		overflow: hidden;
	}

	.photo {
		@apply absolute inset-1/2 w-full h-auto transform -translate-x-1/2 -translate-y-1/2;
	}

	@media screen and (orientation: landscape) {
		.photo {
			@apply w-auto h-full;
		}
	}
</style>
