import { Routes } from '@angular/router';
import { buildRouteMeta } from '@wawjs/ngx-default';
import { companyProfile } from './feature/company/company.data';

export const routes: Routes = [
	{
		path: '',
		data: {
			meta: {
				...buildRouteMeta(companyProfile, '/'),
				title: 'Angular Templates',
				description:
					'Browse Angular 22 templates from Prime Templates. Free to download, with paid licenses coming soon.',
				titleSuffix: '',
			},
		},
		loadComponent: () =>
			import('./pages/landing/landing.component').then((m) => m.LandingComponent),
	},
	{
		path: 'templates/:slug',
		data: {
			meta: {
				title: 'Template',
				description: 'Template details, preview, features, and license options.',
			},
		},
		loadComponent: () =>
			import('./pages/template-profile/template-profile.component').then(
				(m) => m.TemplateProfileComponent,
			),
	},
	{
		path: 'templates/:slug/guide',
		data: {
			meta: {
				title: 'Getting started',
				description: 'Clone and run this template locally.',
			},
		},
		loadComponent: () =>
			import('./pages/template-guide/template-guide.component').then(
				(m) => m.TemplateGuideComponent,
			),
	},
	{
		path: 'cart',
		data: {
			meta: {
				title: 'Cart',
				description: 'Review selected templates and get your free download links.',
			},
		},
		loadComponent: () => import('./pages/cart/cart.component').then((m) => m.CartComponent),
	},
	{
		path: '**',
		redirectTo: '',
	},
];
