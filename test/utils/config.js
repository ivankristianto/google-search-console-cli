/**
 * External dependencies
 */
import { assert } from 'chai';
import fs from 'fs-extra';
import { resolve } from 'path';
import sinon from 'sinon';
import temp from 'temp';

/**
 * Internal dependencies
 */
import Config from '../../lib/classes/config';

describe('utils: config', () => {
	const fixtureDir = resolve(__dirname, '../fixtures');
	let tmp;
	let cwd;
	let sandbox;

	beforeEach(() => {
		cwd = process.cwd();
		tmp = temp.mkdirSync('cf-test-util-config');
		fs.copySync(resolve(fixtureDir, 'config'), tmp);

		process.chdir(tmp);

		sandbox = sinon.createSandbox();
		sandbox.stub(Config, 'getConfigFile').returns(resolve(tmp, 'config.json'));
	});

	afterEach(() => {
		sandbox.restore();
		process.chdir(cwd);
		fs.removeSync(tmp);
	});

	describe('getConfigFile', () => {
		it('should return the path to config file', () => {
			assert.equal(Config.getConfigFile(), resolve(tmp, 'config.json'));
		});
	});

	describe('read', () => {
		it('should read config file', async () => {
			const configValue = { apiToken: 'api-token-sample-here' };
			assert.deepEqual(await Config.read(), configValue);
		});
	});

	describe('get', () => {
		it('should get value from config', async () => {
			const apiTokenValue = 'api-token-sample-here';
			assert.equal(await Config.get('apiToken'), apiTokenValue);
		});
	});

	describe('write', () => {
		it('should write config object to config file', async () => {
			const configValue = { apiToken: 'api-token' };
			await Config.write(configValue);
			assert.equal(await Config.get('apiToken'), 'api-token');
		});
	});

	describe('set', () => {
		it('should set config value to config file', async () => {
			await Config.set('apiToken', 'new-api-token');
			assert.equal(await Config.get('apiToken'), 'new-api-token');
		});
	});

	describe('getAuthToken', () => {
		it('should get auth token from the config file', async () => {
			assert.equal(await Config.getAuthToken(), 'api-token-sample-here');
		});
	});
});
