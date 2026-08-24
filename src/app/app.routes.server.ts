import { RenderMode, ServerRoute } from '@angular/ssr';
import { templates } from './feature/template/template.data';

export const serverRoutes: ServerRoute[] = [
	{
		path: 'templates/:slug',
		renderMode: RenderMode.Prerender,
		getPrerenderParams: async () => templates.map((template) => ({ slug: template.slug })),
	},
	{
		path: '**',
		renderMode: RenderMode.Prerender,
	},
];
