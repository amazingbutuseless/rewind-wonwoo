<script>
	import Day from '$lib/Day.svelte';
	import Link from '$lib/Link.svelte';
	import Month from '$lib/Month.svelte';
	import November18 from './November18.svelte';
</script>

<Month
	month="November"
	--month-font-color="var(--purple)"
	--day-bg-color="var(--purple)"
	--day-font-color="var(--black)"
>
	<Day day={26} datetime="2022-11-26">SVT World Tour; Be The Sun - Tokyo, Japan (26, 27 양일)</Day>

	<Day day={19} datetime="2022-11-19">SVT World Tour; Be The Sun - Osaka, Japan (19, 20 양일)</Day>

	<November18 />

	<Day day={17} datetime="2022-11-17">DREAM, Fallin' Flower 발매 기념 악수회, 배웅회</Day>

	<Day day={15} datetime="2022-11-15">DREAM 발매 기념 배웅회</Day>

	<Day day={9} datetime="2022-11-09">SEVENTEEN JAPAN 1ST EP DREAM 발매</Day>

	<Day day={8} datetime="2022-11-08">ODE TO YOU DVD 발매 기념 하이터치회</Day>

	<Day day={7} datetime="2022-11-07">
		CDTVライブ！ライブ！
		<Link type="twitter" url="https://twitter.com/pledis_17jp/status/1589591229406523393" />
	</Day>

	<Day day={2} datetime="2022-11-02">
		제9회 이데일리 문화대상 시상식 - 콘서트 부문 최우수상 수상
	</Day>
</Month>
