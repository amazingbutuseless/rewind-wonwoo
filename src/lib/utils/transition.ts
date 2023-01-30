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
