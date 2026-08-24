import { toSignal } from '@angular/core/rxjs-interop';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MetaService } from '@wawjs/ngx-core';
import { TranslateDirective, TranslateService } from '@wawjs/ngx-translate';
import { ButtonDirective, LinkComponent } from '@wawjs/ngx-ui';
import { CartService } from '../../feature/cart/cart.service';
import { EMPTY_TEMPLATE } from '../../feature/template/template.const';
import { getTemplateBySlug } from '../../feature/template/template.data';

@Component({
	imports: [RouterLink, TranslateDirective, ButtonDirective, LinkComponent],
	templateUrl: './template-profile.component.html',
	styleUrl: './template-profile.component.scss',
})
export class TemplateProfileComponent {
	private readonly _route = inject(ActivatedRoute);
	private readonly _metaService = inject(MetaService);
	private readonly _translateService = inject(TranslateService);

	protected readonly cartService = inject(CartService);
	protected readonly repoLabel = computed(() =>
		this._translateService.translate('Репозиторій')(),
	);
	protected readonly demoLabel = computed(() =>
		this._translateService.translate('Живий приклад')(),
	);

	private readonly _paramMap = toSignal(this._route.paramMap, {
		initialValue: this._route.snapshot.paramMap,
	});

	protected readonly template = computed(() => {
		const slug = this._paramMap().get('slug') ?? '';

		return getTemplateBySlug(slug) ?? EMPTY_TEMPLATE;
	});

	protected readonly found = computed(() => !!this.template().slug);

	private readonly _selectedLicenseType = signal<string | null>(null);
	protected readonly selectedLicenseType = computed(
		() => this._selectedLicenseType() ?? this.template().licenses[0]?.type ?? '',
	);

	constructor() {
		effect(() => {
			const template = this.template();

			if (!template.slug) {
				return;
			}

			this._metaService.applyMeta({
				title: template.name,
				description: template.tagline,
			});
		});

		effect(() => {
			this.template();
			this._selectedLicenseType.set(null);
		});
	}

	protected selectLicenseType(type: string) {
		this._selectedLicenseType.set(type);
	}

	protected addToCart() {
		const template = this.template();

		if (template.licenses.length === 0) {
			return;
		}

		this.cartService.add(template.slug, this.selectedLicenseType());
	}
}
