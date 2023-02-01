<script>
	import '../../app.css';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Leckerli+One&family=Noto+Sans+KR&display=swap"
		rel="stylesheet"
	/>
	<link href="https://fonts.googleapis.com/css2?family=Bree+Serif&text=Wonw" rel="stylesheet" />
</svelte:head>

<slot />

<style lang="postcss">
	:root {
		--blue: #5782bb;
		--green: #64d7d6;
		--purple: #c4aff0;
		--white: #fffeec;
		--black: #000000;

		--header-height: 6rem;
	}

	:global(html) {
		font-size: 10px;
	}

	:global(body) {
		margin: 0 auto;
		min-width: 390px;
		max-width: 1024px;
	}

	:global(cite.photo-credits) {
		@apply text-[var(--white)] not-italic text-sm opacity-50;
	}

	:global(cite.photo-credits::before) {
		content: 'credits: ';
	}
</style>
