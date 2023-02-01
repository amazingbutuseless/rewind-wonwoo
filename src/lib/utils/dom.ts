export function toggleBodyScroll() {
	return (enable?: boolean) => {
		const overflow = document.body.style.getPropertyValue('overflow');
		const ableToScroll = overflow !== 'hidden';

		if (enable === false || ableToScroll) {
			document.body.style.setProperty('overflow', 'hidden');
			return;
		}

		document.body.style.removeProperty('overflow');
	};
}
