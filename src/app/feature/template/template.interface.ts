export type TemplateLicense = 'free' | 'paid';

export interface TemplateLicenseTier {
	type: string;
	label: string;
	price: number;
}

export interface Template {
	slug: string;
	name: string;
	tagline: string;
	description: string;
	features: string[];
	stack: string[];
	price: number;
	license: TemplateLicense;
	licenses: TemplateLicenseTier[];
	repoUrl: string;
	demoUrl: string;
	previewImage: string;
}
