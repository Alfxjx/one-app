export interface HttpOptions {
	url: string;
	data?: any;
}

export interface ApiConfig {
	[api: string]: {
		[env: string]: string;
	};
}

export interface CardStyle {
	opacity?: number;
	transform?: string;
	zIndex?: number;
	transitionTimingFunction?: string;
	transitionDuration?: string;
}

export interface ArticleItem {
	title: string;
	tags: string[];
	author: string;
	description: string;
	link: string;
}
