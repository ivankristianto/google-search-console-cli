/**
 * External dependencies
 */
import { assert } from 'chai';

/**
 * Internal dependencies
 */
import columnWidth from '../../lib/utils/column-width';

describe('utils: columnWidth', () => {
	describe('columnWidth', () => {
		it('should return column width based on given argument', () => {
			assert.equal(columnWidth('type'), 10);
			assert.equal(columnWidth('content'), 20);
			assert.equal(columnWidth('name_servers'), 50);
			assert.equal(columnWidth('notexist'), 20);
		});
	});
});
