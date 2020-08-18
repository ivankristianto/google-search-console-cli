import os from 'os';
import path from 'path';
import fs from 'fs-extra';

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
}

export default Config;
