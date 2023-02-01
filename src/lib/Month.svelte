<script lang="ts">
	export let month: string;
</script>

<section class="z-0">
	<h2 class="sticky top-0 m-0 p-8 mb-6 font-heading text-lg z-[1]">{month}</h2>
	<slot />
</section>

<style lang="postcss">
	h2 {
		color: var(--month-font-color, --black);
	}
</style>
