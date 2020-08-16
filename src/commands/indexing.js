import log from '../utils/logger';

exports.command = 'indexing';
exports.desc = 'Run Google Indexing API command';
exports.builder = function (yargs) {
	return yargs.commandDir('indexing_cmd');
};
exports.handler = async function () {
	log.info('Use --help argument to get available subcommands');
};
