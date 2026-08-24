export type TemplateLicense = 'free' | 'paid';

export interface Template {
	slug: string;
	name: string;
	tagline: string;
	description: string;
	features: string[];
	stack: string[];
	price: number;
	license: TemplateLicense;
	repoUrl: string;
	demoUrl: string;
	previewImage: string;
}
