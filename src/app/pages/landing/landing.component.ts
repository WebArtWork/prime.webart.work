import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { ButtonDirective } from '@wawjs/ngx-prime/button';
import { Chip } from '@wawjs/ngx-prime/chip';
import { Tag } from '@wawjs/ngx-prime/tag';
import { CartService } from '../../feature/cart/cart.service';
import { templates } from '../../feature/template/template.data';

@Component({
	imports: [RouterLink, TranslateDirective, ButtonDirective, Tag, Chip],
	templateUrl: './landing.component.html',
	styleUrl: './landing.component.scss',
})
export class LandingComponent {
	protected readonly cartService = inject(CartService);
	protected readonly templates = templates;
}
