import templatesData from '../../../data/template/templates.json';
import { Template, TemplateLicenseTier } from './template.interface';

type RawTemplate = Partial<Template>;

export const templates: Template[] = (templatesData as RawTemplate[]).map(_normalizeTemplate);

export function getTemplateBySlug(slug: string): Template | undefined {
	return templates.find((template) => template.slug === slug);
}

function _normalizeTemplate(raw: RawTemplate): Template {
	const licenses = _licenseTiersOrFallback(raw.licenses);
	const license = licenses.length > 0 ? 'paid' : 'free';

	return {
		slug: _stringOrFallback(raw.slug),
		name: _stringOrFallback(raw.name),
		tagline: _stringOrFallback(raw.tagline),
		description: _stringOrFallback(raw.description),
		features: _stringArrayOrFallback(raw.features),
		stack: _stringArrayOrFallback(raw.stack),
		price: license === 'paid' ? Math.min(...licenses.map((tier) => tier.price)) : 0,
		license,
		licenses,
		repoUrl: _stringOrFallback(raw.repoUrl),
		demoUrl: _stringOrFallback(raw.demoUrl),
		previewImage: _stringOrFallback(raw.previewImage),
	};
}

function _licenseTiersOrFallback(
	value: TemplateLicenseTier[] | null | undefined,
): TemplateLicenseTier[] {
	return Array.isArray(value)
		? value
				.filter(
					(tier): tier is TemplateLicenseTier =>
						!!tier &&
						typeof tier.type === 'string' &&
						tier.type.trim().length > 0 &&
						typeof tier.price === 'number' &&
						tier.price >= 0,
				)
				.map((tier) => ({
					type: tier.type.trim(),
					label: _stringOrFallback(tier.label, tier.type.trim()),
					price: tier.price,
				}))
		: [];
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
