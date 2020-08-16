/**
 * Internal dependencies
 */
import yargs from 'yargs';
import log from './utils/logger';

// eslint-disable-next-line consistent-return
function main() {
	try {
		return yargs
			.commandDir('commands')
			.demandCommand()
			.option('disableSpinner', {
				description: 'Disable spinner',
				default: false,
				type: 'boolean',
			})
			.option('credentials', {
				description: 'Use different credentials file',
				type: 'string',
			})
			.help()
			.wrap(Math.min(120, yargs.terminalWidth())).argv;
	} catch (e) {
		log.error(e.toString());
	}
}

main();
