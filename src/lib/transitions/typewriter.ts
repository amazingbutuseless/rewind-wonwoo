export const TYPEWRITER_DURATION_FACTOR = 0.01;

export function typewriter(node: Node, { speed = 1, delay = 0 }) {
	const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

	const text = node.textContent;

	if (!valid || !text) {
		throw new Error(`This transition only works on elements with a single text node child`);
	}

	const duration = text.length / (speed * TYPEWRITER_DURATION_FACTOR);

	return {
		delay,
		duration,
		tick: (t: number) => {
			const i = Math.trunc(text.length * t);
			node.textContent = text.slice(0, i);
		}
	};
}
