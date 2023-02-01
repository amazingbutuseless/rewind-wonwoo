<script lang="ts">
	import Day from '$lib/Day.svelte';
	import Month from '$lib/Month.svelte';

	import October17 from './October17.svelte';
</script>

<Month month="October" --month-font-color="var(--white)">
	<October17 />

	<Day datetime="2022-10-13" day={13}>SVT World Tour; Be The Sun - Singapore</Day>

	<Day datetime="2022-10-08" day={8}>
		SVT World Tour; Be The Sun - Manila, Philippines (8, 9 양일)
	</Day>

	<Day datetime="2022-10-05" day={5}>Sector17 발매 기념 온라인 밋앤그릿</Day>
	<Day datetime="2022-10-04" day={4}>Sector17 발매 기념 온라인 팬싸인회</Day>
	<Day datetime="2022-10-01" day={1}>
		SVT World Tour; Be The Sun - Bangkok, Thailand (1, 2 양일)
	</Day>
</Month>
