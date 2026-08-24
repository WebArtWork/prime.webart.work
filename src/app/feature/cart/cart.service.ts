import { computed, inject, Service, signal } from '@angular/core';
import { StoreService } from '@wawjs/ngx-core';
import { getTemplateBySlug } from '../template/template.data';
import { CartItem, CartLineItem } from './cart.interface';

const CART_STORE_KEY = 'cart';

@Service()
export class CartService {
	readonly items = signal<CartItem[]>([]);
	readonly count = computed(() => this.items().length);
	readonly lineItems = computed<CartLineItem[]>(() =>
		this.items()
			.map((item) => this._toLineItem(item))
			.filter((lineItem): lineItem is CartLineItem => lineItem !== undefined),
	);
	readonly total = computed(() =>
		this.lineItems().reduce((sum, lineItem) => sum + lineItem.price, 0),
	);

	private readonly _store = inject(StoreService);

	constructor() {
		void this._restore();
	}

	has(slug: string) {
		return this.items().some((item) => item.slug === slug);
	}

	add(slug: string, licenseType: string) {
		if (this.has(slug)) {
			return;
		}

		this.items.update((items) => [...items, { slug, licenseType }]);
		void this._persist();
	}

	setLicenseType(slug: string, licenseType: string) {
		this.items.update((items) =>
			items.map((item) => (item.slug === slug ? { ...item, licenseType } : item)),
		);
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

	private _toLineItem(item: CartItem): CartLineItem | undefined {
		const template = getTemplateBySlug(item.slug);

		if (!template || template.licenses.length === 0) {
			return undefined;
		}

		const tier =
			template.licenses.find((candidate) => candidate.type === item.licenseType) ??
			template.licenses[0];

		return {
			slug: template.slug,
			name: template.name,
			tagline: template.tagline,
			repoUrl: template.repoUrl,
			licenseType: tier.type,
			licenseLabel: tier.label,
			price: tier.price,
		};
	}

	private async _restore() {
		const stored = await this._store.getJson<CartItem[]>(CART_STORE_KEY);

		if (Array.isArray(stored)) {
			this.items.set(stored.filter((item) => !!this._toLineItem(item)));
		}
	}

	private async _persist() {
		await this._store.setJson(CART_STORE_KEY, this.items());
	}
}
