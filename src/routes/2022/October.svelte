<script lang="ts">
	import { inview } from 'svelte-inview';
	import { fly } from 'svelte/transition';

	import Day from '$lib/Day.svelte';
	import Link from '$lib/Link.svelte';
	import Month from '$lib/Month.svelte';
	import WeverseSpeechBubble from '$lib/WeverseSpeechBubble.svelte';

	let isInView: boolean = false;

	let animatedBubbleIdx: number = 0;

	function increaseAnimatedBubbleIdx() {
		setTimeout(() => {
			animatedBubbleIdx++;
		}, 700);
	}
</script>

<Month month="October">
	<article id="2022-10-17" class="flex flex-col -mx-8 my-8 p-8 h-screen box-border">
		<time datetime="2022-10-17" class="date">17</time>

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
					<span>짜잔</span>
				</WeverseSpeechBubble>

				{#if animatedBubbleIdx >= 1}
					<WeverseSpeechBubble
						transitions={{ in: { func: fly, options: { y: 100 } } }}
						afterIntro={increaseAnimatedBubbleIdx}
						direction="left"
						name="승관"
						profileImageSrcSet="/images/ico_sg.png 1x, /images/ico_sg@2x.png 2x"
					>
						<span>어떤 부분이 짜잔인거야</span>
					</WeverseSpeechBubble>
				{/if}

				{#if animatedBubbleIdx >= 2}
					<WeverseSpeechBubble
						transitions={{ in: { func: fly, options: { y: 100 } } }}
						direction="left"
						name="정한"
						profileImageSrcSet="/images/ico_jh.png 1x, /images/ico_jh@2x.png 2x"
					>
						<span>ㅋㅋㅋㅋㅋㅋㅋ 진짜로ㅋㅋㅋ</span>
						<span>귀여워 원우…..</span>
					</WeverseSpeechBubble>
				{/if}
			{/if}
		</div>

		<cite class="not-italic text-sm">credits: 원우</cite>
	</article>
</Month>

<style lang="postcss">
	article {
		background-image: url(/images/weverse_4-253703726.jpg);
		background-size: 85vh;
		background-position: 30% 12%;
	}

	article span {
		display: block;
	}

	@media screen and (min-width: 1024px) {
		article {
			background-size: cover;
			background-position: center;
		}
	}
</style>
