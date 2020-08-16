import { assert } from 'chai';

/**
 * Internal dependencies
 */
import formatter from '../../lib/utils/formatter';

describe('utils: formatter', () => {
	describe('mappingField', () => {
		it('should filter fields from a json object', () => {
			const fields = 'id,name,status,account.id,account.name,name_servers';
			const obj = {
				id: '123',
				name: 'zone',
				status: 'active',
				account: {
					id: '111',
					name: 'account name',
				},
				name_servers: ['ns1.example.com', 'ns2.example.com'],
				paused: false,
				type: 'full',
				development_mode: -51346952,
				original_name_servers: [
					'ns1.example.com',
					'ns2.example.com',
					'ns3.example.com',
					'ns4.example.com',
				],
				original_registrar: 'example.com, inc.',
			};

			const result = [
				'123',
				'zone',
				'active',
				'111',
				'account name',
				'ns1.example.com,ns2.example.com',
			];

			assert.deepEqual(formatter.mappingField(fields, obj), result);
		});
	});

	describe('mappingFields', () => {
		it('should filter fields from array of json objects', () => {
			const fields = 'id,name,status,name_servers';
			const arrayOfObjs = [
				{
					id: '123',
					name: 'zone',
					status: 'active',
					account: {
						id: '111',
						name: 'account name',
					},
					name_servers: ['ns1.example.com', 'ns2.example.com'],
					paused: false,
					type: 'full',
					development_mode: -51346952,
					original_name_servers: [
						'ns1.example.com',
						'ns2.example.com',
						'ns3.example.com',
						'ns4.example.com',
					],
					original_registrar: 'example.com, inc.',
				},
				{
					id: '456',
					name: 'zone2',
					status: 'active',
					account: {
						id: '222',
						name: 'account name 2',
					},
					name_servers: ['ns1.example.com', 'ns2.example.com'],
					paused: false,
					type: 'full',
					development_mode: -51346952,
					original_name_servers: [
						'ns1.example.com',
						'ns2.example.com',
						'ns3.example.com',
						'ns4.example.com',
					],
					original_registrar: 'example.com, inc.',
				},
			];

			const result = [
				['123', 'zone', 'active', 'ns1.example.com,ns2.example.com'],
				['456', 'zone2', 'active', 'ns1.example.com,ns2.example.com'],
			];

			assert.deepEqual(formatter.mappingFields(fields, arrayOfObjs), result);
		});
	});
});
