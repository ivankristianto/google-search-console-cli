import GoogleAPI from './GoogleAPI';

class IndexingAPI extends GoogleAPI {
	static async getNotificationStatus({ credentials = null, targetUrl }) {
		const url = new URL(`https://indexing.googleapis.com/v3/urlNotifications/metadata`);
		url.searchParams.append('url', targetUrl);

		const response = await IndexingAPI.request({ url: url.toString(), credentials });

		if (!response) {
			throw new Error('Cannot get notification metadata');
		}

		return response;
	}

	static async publishUrl({ credentials = null, targetUrl }) {
		const url = new URL(`https://indexing.googleapis.com/v3/urlNotifications:publish`);

		const body = {
			url: targetUrl,
			type: 'URL_UPDATED',
		};

		const response = await IndexingAPI.request({
			url: url.toString(),
			method: 'POST',
			body,
			credentials,
		});

		if (!response) {
			throw new Error('Cannot publish this url');
		}

		return response;
	}
}

export default IndexingAPI;
