import axios from 'axios';
import Qs from 'qs';
// import { HttpOptions } from '../interface';
import api from './api';

// fetchGet('getArticleApi', {}).then((res: any) => {
// 	console.log(res.data);
// });

export async function fetchGet(url: string, params: any): Promise<any> {
	let { reqUrl, data } = await requestHandler(url, params);
	// 如果是开发环境，url就不追加参数，避免取不到mock数据
	if (process.env.NODE_ENV !== 'development') {
		console.log('reqUrl：' + reqUrl);
		try {
			const urlObj = new URL(reqUrl);
			urlObj.search += data;
			reqUrl = urlObj.href;
		} catch (e) {
			// 如果是debug环境，可能没有origin地址，此时直接手动拼接
			if (reqUrl.indexOf('/?') !== -1) {
				reqUrl += data;
			} else {
				reqUrl = reqUrl + '/?' + data; // 拼接参数
			}
		}
		// url encode
		reqUrl = encodeURIComponent(reqUrl);
	}
	return new Promise((resolve, reject) => {
		axios.get(reqUrl).then(
			(res: any) => {
				responseHandler(res, resolve, reject);
			},
			(err: any) => {
				// 走到此处的所有err都进行弹窗展示，并返回错误信息
				console.log('网络请求失败');
				reject(err);
			}
		);
	});
}

export async function fetchPost(url: string, params: any): Promise<any> {
	const { reqUrl, data } = requestHandler(url, params);
	return new Promise((resolve, reject) => {
		axios.post(reqUrl).then(
			(res: any) => {
				responseHandler(res, resolve, reject);
			},
			(err: any) => {
				// 走到此处的所有err都进行弹窗展示，并返回错误信息
				console.log('网络请求失败');
				reject(err);
			}
		);
	});
}

function requestHandler(url: string, params: any) {
	const data = params.data;
	const env = process.env.NODE_ENV;
	const reqUrl = api[url][env];
	return { reqUrl, data };
}

function responseHandler(res: any, resolve: any, reject: any) {
	const { data } = res;
	resolve(res.data);
}
