import templatesData from '../../../data/template/templates.json';
import { Template, TemplateLicense } from './template.interface';

type RawTemplate = Partial<Template>;

export const templates: Template[] = (templatesData as RawTemplate[]).map(_normalizeTemplate);

export function getTemplateBySlug(slug: string): Template | undefined {
	return templates.find((template) => template.slug === slug);
}

function _normalizeTemplate(raw: RawTemplate): Template {
	return {
		slug: _stringOrFallback(raw.slug),
		name: _stringOrFallback(raw.name),
		tagline: _stringOrFallback(raw.tagline),
		description: _stringOrFallback(raw.description),
		features: _stringArrayOrFallback(raw.features),
		stack: _stringArrayOrFallback(raw.stack),
		price: typeof raw.price === 'number' && raw.price >= 0 ? raw.price : 0,
		license: _licenseOrFallback(raw.license),
		repoUrl: _stringOrFallback(raw.repoUrl),
		demoUrl: _stringOrFallback(raw.demoUrl),
		previewImage: _stringOrFallback(raw.previewImage),
	};
}

function _licenseOrFallback(value: TemplateLicense | undefined): TemplateLicense {
	return value === 'paid' ? 'paid' : 'free';
}

function _stringOrFallback(value: string | null | undefined, fallback = ''): string {
	return typeof value === 'string' && value.trim().length > 0 ? value.trim() : fallback;
}

function _stringArrayOrFallback(value: string[] | null | undefined): string[] {
	return Array.isArray(value)
		? value.filter(
				(entry): entry is string => typeof entry === 'string' && entry.trim().length > 0,
			)
		: [];
}
