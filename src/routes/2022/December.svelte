<script lang="ts">
	import Day from '$lib/Day.svelte';
	import Link from '$lib/Link.svelte';
	import Month from '$lib/Month.svelte';

	import December13 from './December13.svelte';
</script>

<Month month="December" --day-bg-color="var(--black)" --day-font-color="var(--white)">
	<Day day={31} datetime="2022-12-11">
		CDTVライブ！ライブ！年越しスペシャル！2022→2023
		<Link type="youtube" url="https://www.youtube.com/shorts/oEEWcv9f5xo" />
	</Day>

	<Day day={30} datetime="2022-12-30">
		제64회 일본 레코드 대상 - 특별 국외 음악상 수상
		<Link type="twitter" url="https://twitter.com/pledis_17jp/status/1608815768682258438" />
	</Day>

	<Day day={28} datetime="2022-12-28">SVT World Tour; Be The Sun - Jakarta, Indonesia</Day>

	<Day day={20} datetime="2022-12-20">
		Face The Sun 영상통화 팬싸인회 (Yizhiyu)
		<Link type="twitter" url="https://twitter.com/moment_717/status/1605076480693637127" />
	</Day>

	<Day day={17} datetime="2022-12-17">SVT World Tour; Be The Sun - Bulacan, Philippines</Day>

	<December13 />

	<Day day={10} datetime="2022-12-10">
		全力！SEVENTEEN
		<Link type="twitter" url="https://twitter.com/zenryoku_svt/status/1600762103685521408" /><br />
		LA3C
	</Day>

	<Day day={7} datetime="2022-12-07">
		2022 FNS歌謡祭 (FNS가요제)
		<Link type="twitter" url="https://twitter.com/pledis_17jp/status/1600498420456001538" />
	</Day>

	<Day day={5} datetime="2022-12-05">DREAM, Fallin' Flower 발매 기념 악수회, 배웅회</Day>
	<Day day={3} datetime="2022-12-03">SVT World Tour; Be The Sun - Nagoya, Japan (3, 4 양일)</Day>
</Month>
