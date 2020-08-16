/**
 * External dependencies
 */
import chalk from 'chalk';

const colorScheme = {
	success: chalk.green,
	info: chalk.white,
	warning: chalk.yellow,
	error: chalk.red,
	debug: chalk.blue,
};

function log(scheme, ...args) {
	console.log(...args.map((arg) => colorScheme[scheme](arg)));
}

function success(...args) {
	log('success', ...args);
}

function info(...args) {
	log('info', ...args);
}

function warning(...args) {
	log('warning', ...args);
}

function error(...args) {
	log('error', ...args);
}

function debug(...args) {
	log('debug', ...args);
}

export default {
	success,
	info,
	warning,
	debug,
	error,
};
