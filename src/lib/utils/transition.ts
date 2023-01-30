type Transition = {
	func: (node: Node, config: SvelteTransitionConfig) => SvelteTransitionReturnType;
	options: SvelteTransitionConfig;
};

export function readTransitions<
	InConfig extends Transition,
	OutConfig extends Transition
>(transitions: { in?: InConfig; out?: OutConfig }) {
	return {
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		inFunc: transitions.in ? transitions.in.func : () => {},
		inOptions: transitions.in ? transitions.in.options : null,
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		outFunc: transitions.out ? transitions.out.func : () => {},
		outOptions: transitions.out ? transitions.out.options : null
	} as {
		inFunc: Transition['func'];
		inOptions: Transition['options'];
		outFunc: Transition['func'];
		outOptions: Transition['options'];
	};
}

export function fadeScale(
	node: HTMLElement,
	{
		delay = 0,
		duration = 200,
		easing = (x) => x,
		baseScale = 0,
		...config
	}: SvelteTransitionConfig & { baseScale?: number }
) {
	const o = +getComputedStyle(node).opacity;
	const m = getComputedStyle(node).transform.match(/scale\(([0-9.]+)\)/);
	const s = m ? parseFloat(m[1]) : 1;
	const is = 1 - baseScale;

	return {
		...config,
		delay,
		duration,
		css: (t: number) => {
			const eased = easing(t);
			return `opacity: ${eased * o}; transform: scale(${eased * s * is + baseScale})`;
		}
	};
}
