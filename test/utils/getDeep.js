/**
 * External dependencies
 */
import { assert } from 'chai';

/**
 * Internal dependencies
 */
import getDeep from '../../lib/utils/getDeep';

describe('utils: getDeep', () => {
	describe('getDeep', () => {
		it('should get value from an object by given string path', () => {
			const obj = {
				level0: {
					key: 'value0',
					level1: {
						key: 'value1',
						level2: {
							key: 'value2',
						},
					},
				},
			};
			assert.equal(getDeep(obj, 'level0.key'), 'value0');
			assert.equal(getDeep(obj, 'level0.level1.key'), 'value1');
			assert.equal(getDeep(obj, 'level0.level1.level2.key'), 'value2');
		});
	});
});
