import { computed, inject, Service, signal } from '@angular/core';
import { StoreService } from '@wawjs/ngx-core';
import { getTemplateBySlug } from '../template/template.data';
import { CartItem } from './cart.interface';

const CART_STORE_KEY = 'cart';

@Service()
export class CartService {
	readonly items = signal<CartItem[]>([]);
	readonly count = computed(() => this.items().length);
	readonly templates = computed(() =>
		this.items()
			.map((item) => getTemplateBySlug(item.slug))
			.filter((template) => template !== undefined),
	);
	readonly total = computed(() =>
		this.templates().reduce((sum, template) => sum + template.price, 0),
	);

	private readonly _store = inject(StoreService);

	constructor() {
		void this._restore();
	}

	has(slug: string) {
		return this.items().some((item) => item.slug === slug);
	}

	add(slug: string) {
		if (this.has(slug)) {
			return;
		}

		this.items.update((items) => [...items, { slug }]);
		void this._persist();
	}

	remove(slug: string) {
		this.items.update((items) => items.filter((item) => item.slug !== slug));
		void this._persist();
	}

	clear() {
		this.items.set([]);
		void this._persist();
	}

	private async _restore() {
		const stored = await this._store.getJson<CartItem[]>(CART_STORE_KEY);

		if (Array.isArray(stored)) {
			this.items.set(stored.filter((item) => !!getTemplateBySlug(item.slug)));
		}
	}

	private async _persist() {
		await this._store.setJson(CART_STORE_KEY, this.items());
	}
}
