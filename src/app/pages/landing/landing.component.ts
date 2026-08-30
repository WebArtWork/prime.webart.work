import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { ButtonDirective } from '@wawjs/ngx-prime/button';
import { Card } from '@wawjs/ngx-prime/card';
import { Chip } from '@wawjs/ngx-prime/chip';
import { Divider } from '@wawjs/ngx-prime/divider';
import { SelectButtonDirective, SelectButtonOptionDirective } from '@wawjs/ngx-prime/selectbutton';
import { Tag } from '@wawjs/ngx-prime/tag';
import { CartService } from '../../feature/cart/cart.service';
import { templates } from '../../feature/template/template.data';
import { TemplateFramework } from '../../feature/template/template.interface';

type FrameworkFilter = 'all' | TemplateFramework;

@Component({
	imports: [
		RouterLink,
		TranslateDirective,
		ButtonDirective,
		Card,
		Divider,
		Tag,
		Chip,
		SelectButtonDirective,
		SelectButtonOptionDirective,
	],
	templateUrl: './landing.component.html',
	styleUrl: './landing.component.scss',
})
export class LandingComponent {
	protected readonly cartService = inject(CartService);
	protected readonly templates = templates;

	protected readonly frameworkOptions: { value: FrameworkFilter; label: string }[] = [
		{ value: 'all', label: 'Усі' },
		{ value: 'ngx', label: 'Ngx' },
		{ value: 'react', label: 'React' },
		{ value: 'vue', label: 'Vue' },
	];

	protected readonly frameworkFilter = signal<FrameworkFilter>('all');

	protected readonly filteredTemplates = computed(() => {
		const framework = this.frameworkFilter();

		return framework === 'all'
			? this.templates
			: this.templates.filter((template) => template.framework === framework);
	});
}
