import IndexingAPI from '../../classes/IndexingAPI';
import withSpinner from '../../utils/withSpinner';
import formatter from '../../utils/formatter';

/**
 * Run Command
 *
 * @param {object} argv Command params
 * @param {string} argv.format Output format
 * @returns {Promise<void>}
 */
async function runCommand(argv) {
	const { credentials, spinner, url } = argv;

	const response = await IndexingAPI.getNotificationStatus({ credentials, targetUrl: url });

	if (response.error) {
		throw new Error(response.error.message);
	}

	const fields = 'url,latestUpdate.type,latestUpdate.notifyTime';

	const results = formatter.mappingField(fields, response);

	formatter.output([results], { fields, format: 'list' });

	spinner.text = `Force update to Google Indexing done!`;
}
exports.command = 'check <url>';
exports.desc = 'Run Google indexing api check status of an url';
exports.builder = {};
exports.handler = withSpinner(runCommand);
