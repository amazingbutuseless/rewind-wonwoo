<script lang="ts">
	export let month: string;
</script>

<section class="px-8">
	<h2 class="p-0 m-0 mb-6 font-heading text-lg">{month}</h2>
	<slot />
</section>

<style lang="postcss">
	h2 {
		color: var(--month-font-color, --black);
	}
</style>
