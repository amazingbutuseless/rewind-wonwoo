<script lang="ts">
	export let datetime: string;
	export let day: number;
</script>

<div class="wrapper p-8">
	<article
		id="rewind-{datetime}"
		class="flex flex-row items-start sticky top-[var(--header-height)] font-body"
	>
		<time {datetime} class="date">{day}</time>
		<div>
			<slot>contents here</slot>
		</div>
	</article>
</div>

<style lang="postcss">
	.wrapper {
		@apply h-screen;

		background-color: var(--bg-color);
	}

	article {
		font-size: 1.6rem;
	}

	:global(.date) {
		@apply flex grow-0 shrink-0 justify-center items-center mr-3 w-12 h-12 rounded-3xl text-sm;
		background-color: var(--day-bg-color, var(--white));
		color: var(--day-font-color, var(--black));
	}
</style>
