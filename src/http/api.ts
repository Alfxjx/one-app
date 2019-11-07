import { ApiConfig } from '../interface';

const api: ApiConfig = {
	getArticleApi: {
		development: '/mock/getArticle.json',
		production: 'http://www.alfxjx.club/one/api',
	},
};

export default api;
