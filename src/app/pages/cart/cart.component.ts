import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
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

	protected licensesFor(slug: string) {
		return getTemplateBySlug(slug)?.licenses ?? [];
	}
}
