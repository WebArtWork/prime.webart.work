export interface CartItem {
	slug: string;
	licenseType?: string;
}

export interface CartLineItem {
	slug: string;
	name: string;
	tagline: string;
	repoUrl: string;
	licenseType: string;
	licenseLabel: string;
	price: number;
}
