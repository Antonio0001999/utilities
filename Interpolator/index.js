require('./Interpolator');

let text1 = `With interpolate function is easy to add an HTML tag between a string, even if the tag is repeated.`;
let result1 = interpolate(text1, 'tag', { pre: '<b>', pos: '</b>' });

let text2 = `You can also search something with Regular Expression.`;
let result2 = interpolate(text2, /something/g, { pre: '"', pos: '"' });

let text3 = `The ext key sorrounds externally, while int key sorrounds internally.`;
let result3 = [
	interpolate(text3, /ext\b/, { ext: '-', pre: '>', pos: '<' }),
	interpolate(text3, /int\b/, { int: '-', pre: '<', pos: '>' })
];

let text4 = [
	'And if you have an array of string',
	'You can also interpolate every string at once'
];
let result4 = interpolate(text4, 'string', { ext: '"' });

console.log({ result1, result2, result3, result4 });
