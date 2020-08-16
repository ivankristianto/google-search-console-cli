/* eslint-disable no-process-exit */
// This code borrowed from @wordpress/env with a few adjustments.

import ora from 'ora';
// Spinner
const withSpinner = (command) => (...args) => {
	const { disableSpinner } = args[0];

	if (disableSpinner) {
		// eslint-disable-next-line no-param-reassign
		args[0].spinner = {};
		return command(...args);
	}

	const spinner = ora().start();
	// eslint-disable-next-line no-param-reassign
	args[0].spinner = spinner;
	let time = process.hrtime();
	return command(...args).then(
		(message) => {
			time = process.hrtime(time);
			spinner.succeed(
				`${message || spinner.text} (in ${time[0]}s ${(time[1] / 1e6).toFixed(0)}ms)`,
			);
			process.exit(0);
		},
		(error) => {
			if (error) {
				// Error is an unknown error. That means there was a bug in our code.
				spinner.fail(typeof error === 'string' ? error : error.message);
				// Disable reason: Using console.error() means we get a stack trace.
				// console.error(error);
				process.exit(1);
			} else {
				spinner.fail('An unknown error occurred.');
				process.exit(1);
			}
		},
	);
};

export default withSpinner;
