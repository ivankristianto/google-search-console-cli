import fs from 'fs-extra';
import withSpinner from '../utils/withSpinner';
import Config from '../classes/Config';

/**
 * Run Command
 *
 * @param {object} argv Command params
 * @param {string} argv.format Output format
 * @returns {Promise<void>}
 */
async function runCommand(argv) {
	const { spinner, jsonFile } = argv;

	const keysToCheck = [
		'type',
		'project_id',
		'private_key_id',
		'private_key',
		'client_email',
		'client_id',
		'auth_uri',
		'token_uri',
		'auth_provider_x509_cert_url',
		'client_x509_cert_url',
	];

	let jsonKey = {};

	if (await fs.exists(jsonFile)) {
		jsonKey = await fs.readJson(jsonFile);
	}

	// Validate json
	keysToCheck.forEach(function (key) {
		if (!jsonKey[key] || jsonKey[key].trim().length === 0) {
			throw new Error(`"${key}" key is missing from the json file`);
		}
	});

	await Config.write(jsonKey);

	spinner.text = `Successfully save json key file!`;
}

exports.command = 'config setup';
exports.desc = 'Setup configuration and connect with Google search console and indexing api';
exports.builder = {
	jsonFile: {
		describe: 'JSON key file',
		type: 'string',
		demandOption: true,
	},
};
exports.handler = withSpinner(runCommand);
