import { fly } from 'svelte/transition';
import HeartIcon from './assets/ico_heart.png';
import HeartEyesIcon from './assets/ico_heart_eyes.png';
import HeartSmileIcon from './assets/ico_smile_hearts.png';

type EmojiAnimationConfig = {
	maxSize?: number;
	minSize?: number;
	length?: number;
};

export class EmojiAnimation {
	readonly EMOJIS = { '❤️': HeartIcon, '😍': HeartEyesIcon, '🥰': HeartSmileIcon };
	readonly EMOJI_KEYS = Object.keys(this.EMOJIS);
	readonly EMOJI_VALUES = Object.values(this.EMOJIS);

	private _wrapperElm!: HTMLDivElement;
	private _articleElm!: Element;

	protected maxSize: number;
	protected minSize: number;
	protected _length: number;
	protected animationEnded: Array<boolean>;

	constructor(config?: EmojiAnimationConfig) {
		this.maxSize = config?.maxSize ?? 240;
		this.minSize = config?.minSize ?? 80;
		this._length = config?.length ?? 40;
		this.animationEnded = Array(this._length).fill(false);
	}

	set wrapperElm(elm: HTMLDivElement | null) {
		if (elm) this._wrapperElm = elm;
	}

	set articleElm(elm: Element | null) {
		if (elm) this._articleElm = elm;
	}

	get length() {
		return this._length;
	}

	get hasDone() {
		return this.animationEnded.every((done) => done);
	}

	private createRandomStyle() {
		const emojiSize = Math.floor(
			Math.max(Math.random() * this.maxSize, Math.random() * this.minSize)
		);

		return Object.entries({
			width: `${emojiSize}px`,
			top: `calc(${Math.floor(Math.random() * 100)}vh - ${emojiSize / 2}px)`,
			left: `calc(${Math.floor(Math.random() * 100)}vw - ${emojiSize / 2}px)`
			// transform: `rotate(${Math.random() * 360}deg)`
		});
	}

	public pickRandomEmoji(idx: number) {
		const randomKey = idx % this.EMOJI_KEYS.length;

		return {
			src: this.EMOJI_VALUES[randomKey],
			alt: this.EMOJI_KEYS[randomKey],
			style: this.createRandomStyle()
				.map(([key, value]) => `${key}: ${value};`)
				.join(' ')
		};
	}

	public end(idx: number) {
		this.animationEnded[idx] = true;
	}

	public changeBackgroundColor(node: HTMLElement, options?: SvelteTransitionConfig) {
		return {
			...options,
			tick: (t: number) => {
				node.style.setProperty('--bg-color-opacity', t.toString());
			}
		};
	}

	public beforeCompleted() {
		this._articleElm.classList.add('fixed', 'top-0');
	}

	private wrapUp() {
		if (this.hasDone) {
			this._wrapperElm.classList.remove('pt-[50vh]');
			this._articleElm.classList.remove('fixed');
			this._articleElm.scrollIntoView();
			return;
		}

		window.requestAnimationFrame(this.wrapUp.bind(this));
	}

	public afterCompleted() {
		window.requestAnimationFrame(this.wrapUp.bind(this));
	}
}
