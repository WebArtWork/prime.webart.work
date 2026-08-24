import { toSignal } from '@angular/core/rxjs-interop';
import { Component, computed, effect, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MetaService } from '@wawjs/ngx-core';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { ButtonDirective, LinkComponent } from '@wawjs/ngx-ui';
import { EMPTY_TEMPLATE } from '../../feature/template/template.const';
import { getTemplateBySlug } from '../../feature/template/template.data';

@Component({
	imports: [RouterLink, TranslateDirective, ButtonDirective, LinkComponent],
	templateUrl: './template-guide.component.html',
	styleUrl: './template-guide.component.scss',
})
export class TemplateGuideComponent {
	private readonly _route = inject(ActivatedRoute);
	private readonly _metaService = inject(MetaService);

	private readonly _paramMap = toSignal(this._route.paramMap, {
		initialValue: this._route.snapshot.paramMap,
	});

	protected readonly template = computed(() => {
		const slug = this._paramMap().get('slug') ?? '';

		return getTemplateBySlug(slug) ?? EMPTY_TEMPLATE;
	});

	protected readonly found = computed(() => !!this.template().slug);

	protected readonly repoName = computed(() => {
		const repoUrl = this.template().repoUrl;
		const match = /([^/]+)\/?$/.exec(repoUrl);

		return match ? match[1] : this.template().slug;
	});

	constructor() {
		effect(() => {
			const template = this.template();

			if (!template.slug) {
				return;
			}

			this._metaService.applyMeta({
				title: `${template.name} — Getting started`,
				description: `Clone and run ${template.name} locally.`,
			});
		});
	}
}
