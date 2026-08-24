import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateDirective, TranslateService } from '@wawjs/ngx-translate';
import { ButtonDirective, InputComponent, LinkComponent } from '@wawjs/ngx-ui';
import { CartService } from '../../feature/cart/cart.service';
import { ContactService } from '../../feature/contact/contact.service';

@Component({
	imports: [RouterLink, TranslateDirective, ButtonDirective, InputComponent, LinkComponent],
	templateUrl: './cart.component.html',
	styleUrl: './cart.component.scss',
})
export class CartComponent {
	protected readonly cartService = inject(CartService);
	private readonly _contactService = inject(ContactService);
	private readonly _translateService = inject(TranslateService);

	protected readonly emailLabel = computed(() => this._translateService.translate('Ваш email')());
	protected readonly email = signal('');
	protected readonly submitting = signal(false);
	protected readonly submitted = signal(false);

	protected async submit() {
		const emailValue = this.email().trim();
		const templates = this.cartService.templates();

		if (!emailValue || templates.length === 0 || this.submitting()) {
			return;
		}

		this.submitting.set(true);

		try {
			const names = templates.map((template) => template.name).join(', ');
			await this._contactService.send(
				`Free template download request from ${emailValue}: ${names}`,
			);
		} catch (error) {
			console.error(error);
		} finally {
			this.submitting.set(false);
			this.submitted.set(true);
		}
	}
}
