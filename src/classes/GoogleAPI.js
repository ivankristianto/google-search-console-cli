import { google } from 'googleapis';
import Config from './Config';
import Request from './Request';

class GoogleAPI extends Request {
	/**
	 * Get JWT Authorization access token
	 *
	 * @returns {Promise<*>}
	 */
	static async getAuthToken({ credentials = null }) {
		const key = await Config.getAll({ credentialsFile: credentials });

		const jwtClient = new google.auth.JWT(
			key.client_email,
			null,
			key.private_key,
			['https://www.googleapis.com/auth/indexing'],
			null,
		);

		const tokens = await jwtClient.authorize();

		if (!tokens.access_token) {
			throw new Error('Get Access Token, check your service account json file');
		}

		return tokens;
	}

	static async request({
		url,
		method = 'GET',
		body = null,
		headersOpt = {},
		credentials = null,
	}) {
		const token = await GoogleAPI.getAuthToken({ credentials });
		const headers = {
			Authorization: `Bearer ${token.access_token}`,
			...headersOpt,
		};
		const response = await Request.requestInterface({ url, method, body, headersOpt: headers });

		if (response === false) {
			return response;
		}

		return response.json();
	}
}

export default GoogleAPI;
