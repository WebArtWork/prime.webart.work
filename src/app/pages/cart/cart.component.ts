import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { ButtonDirective } from '@wawjs/ngx-ui';
import { getTemplateBySlug } from '../../feature/template/template.data';
import { CartService } from '../../feature/cart/cart.service';

@Component({
	imports: [RouterLink, TranslateDirective, ButtonDirective],
	templateUrl: './cart.component.html',
	styleUrl: './cart.component.scss',
})
export class CartComponent {
	protected readonly cartService = inject(CartService);

	constructor() {
		// `?template=<slug>` (e.g. from ngx-prime's "Buy License" button) has no
		// license tier attached yet, so this page can't add it to the cart on
		// its own — forward to the template's own page where a tier can
		// actually be picked. Once license selection is passed along too, add
		// it to the cart here directly instead of redirecting.
		const route = inject(ActivatedRoute);
		const router = inject(Router);
		const slug = route.snapshot.queryParamMap.get('template');

		if (slug) {
			router.navigate(['/templates', slug]);
		}
	}

	protected licensesFor(slug: string) {
		return getTemplateBySlug(slug)?.licenses ?? [];
	}
}
