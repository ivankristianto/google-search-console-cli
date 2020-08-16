/**
 * External dependencies
 */
import { assert } from 'chai';

/**
 * Internal dependencies
 */
import { validateNotEmpty, validateBool } from '../../lib/utils/promp-validators';

describe('utils: promp-validators', () => {
	describe('validateNotEmpty', () => {
		it('should validate empty value', () => {
			assert.equal(validateNotEmpty('stringNotEmpty'), true);
			assert.equal(validateNotEmpty(''), 'This field is required');
		});
	});

	describe('validateBool', () => {
		it('should validate boolean value', () => {
			assert.equal(validateBool('yes'), 'true');
			assert.equal(validateBool('no'), 'false');
			assert.equal(validateBool('randomText'), 'randomText');
			assert.equal(validateBool(10), 10);
		});
	});
});
