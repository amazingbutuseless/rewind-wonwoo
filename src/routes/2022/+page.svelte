<script lang="ts">
	import December from './December.svelte';
	import November from './November.svelte';
	import October from './October.svelte';
</script>

<svelte:head>
	<title>Wonwoo Rewind 2022</title>
</svelte:head>

<header class="flex flex-col relative h-screen">
	<h1 class="m-0 p-0 font-heading text-center">
		<span>Wonwoo</span>
		<strong class="block -mt-4">Rewind <span class="block">2022</span></strong>
	</h1>
	<cite class="block mt-auto mb-8 ml-8 photo-credits">PLEDIS Co.,Ltd</cite>
</header>

<main>
	<December />
	<November />
	<October />
</main>

<footer class="p-8 text-sm">
	<cite class="not-italic">&copy; amazingbutuseless 2023.</cite>
	<p>
		Thanks to. 더쿠 원우네 스케쥴누네가 없었다면 이 페이지를 만들 생각 조차 하지 못했을 거예요.
		혹시라도 저작권 문제가 생길까봐 링크를 걸지는 못했지만 일년 내내 고퀄 비디오, 사진을 아낌 없이
		베풀어 준 트위터 원우프사님들께도 꼭 감사의 인사를 전하고 싶습니다. 선생님들 덕분에 2022년도
		행복한 원우 덕질이었습니다. 😍👍❤️🥰
	</p>
</footer>

<style lang="postcss">
	header {
		background-image: url(/images/weverse_1-257424644.jpg);
		background-size: 150vh;
		background-position: 70% 25%;
		background-repeat: no-repeat;
	}

	h1 {
		font-size: 8.4rem;
		color: var(--white);
		line-height: 1;
	}

	h1 > span {
		font-family: 'Bree Serif', serif;
		font-size: 3.6rem;
	}

	h1 strong span {
		font-size: 4rem;
	}

	header cite {
		color: var(--white);
		opacity: 0.5;
	}

	footer {
		color: var(--white);
	}
</style>
