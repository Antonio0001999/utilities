const objectEquals = require('./objectEquals');

const obj0 = {};
const obj1 = { email: 'johndoe@example.com' };
const obj2 = { user: { name: 'John', age: 40 } };

const values = [
	// Booleans
	{ key: 'true', value: true },
	{ key: 'false', value: false },
	// Numbers
	{ key: '-Infinity', value: -Infinity },
	{ key: 'Number -1', value: -1 },
	{ key: 'Number 0', value: 0 },
	{ key: 'Numebr 1', value: 1 },
	{ key: 'Infinity', value: Infinity },
	// Strings
	{ key: 'Empty String', value: '' },
	{ key: 'String', value: 'Hello' },
	// Nullish expressions
	{ key: 'null', value: null },
	{ key: 'NaN', value: NaN },
	{ key: 'undefined', value: undefined },
	// Objects
	{ key: 'Empty Object', value: obj0 },
	{ key: 'Object', value: obj1 },
	{ key: 'Nested Object', value: obj2 },
	// Arrays
	{ key: '[]', value: [] },
	{ key: 'string[]', value: ['Hello', ' ', 'World'] },
	{ key: 'number[]', value: [1, 2, 3, 4, 5] },
	{ key: 'any[]', value: [1, 'Hello', true, 'World', 5] },
	{ key: 'object[]', value: [obj0, obj1, obj2] },
	{
		key: '[[],[]]',
		value: [
			[obj0, obj1],
			[obj2, 22],
		],
	},
];

const results = {};
for (const v1 of values) {
	const { key: key1, value: value1 } = v1;
	results[key1] = {};
	for (const v2 of values) {
		const { key: key2, value: value2 } = v2;
		const result = objectEquals(value1, value2);
		results[key1][key2] = result;
	}
}

require('fs').writeFileSync(`./results.json`, JSON.stringify(results, null, '\t'), 'utf-8');
// console.log(objectEquals(obj0, obj1));