export function validateNotEmpty(value) {
	return value.trim().length !== 0 ? true : 'This field is required';
}

export function validateBool(value) {
	const y = new RegExp(/^y(es)?$/i);
	const n = new RegExp(/^no?$/i);

	if (typeof value !== 'string') {
		return value;
	}

	if (value.match(y) !== null) {
		return 'true';
	}
	if (value.match(n) !== null) {
		return 'false';
	}

	return value;
}
