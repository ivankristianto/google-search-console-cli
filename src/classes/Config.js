import os from 'os';
import path from 'path';
import fs from 'fs-extra';
import yargs from 'yargs';
import log from '../utils/logger';

class Config {
	static getConfigFile() {
		return path.join(os.homedir(), '.google-search-console-cli');
	}

	static defaultConfig() {
		return {};
	}

	static async write(config) {
		await fs.writeJson(Config.getConfigFile(), config);
	}

	static async read({ credentialsFile = null }) {
		let readConfig = {};

		const configFile = credentialsFile === null ? Config.getConfigFile() : credentialsFile;
		if (await fs.exists(configFile)) {
			readConfig = await fs.readJson(configFile);
		}

		return { ...readConfig };
	}

	static async get(key) {
		const defaults = Config.defaultConfig();
		const config = await Config.read();

		return typeof config[key] === 'undefined' ? defaults[key] : config[key];
	}

	static async getAll({ credentialsFile = null }) {
		const defaults = Config.defaultConfig();
		const config = await Config.read({ credentialsFile });

		return Object.assign(defaults, config);
	}

	static async set(key, value) {
		const config = await Config.read();

		config[key] = value;

		await Config.write(config);
	}

	/**
	 * Get auth token.
	 *
	 * @returns {Promise<boolean|*>}
	 */
	static async getAuthToken() {
		let token = await Config.get('apiToken');
		const { useToken } = yargs.argv;

		if (useToken) {
			const config = await Config.getAll();
			const accounts = config.accounts.filter(function (account) {
				return account.name === useToken;
			});

			if (accounts.length === 0) {
				log.warning('Token not found');
				return false;
			}

			token = accounts[0].apiToken;
		}

		if (!token) {
			log.warning('Please run cf config setup');
			return false;
		}

		return token;
	}
}

export default Config;
