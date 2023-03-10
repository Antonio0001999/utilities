const interpolar = require('./Interpolador');

let prueba1 = `Con la función para interpolar es muy fácil añadir una etiqueta de HTML a la cadena de texto, entre otras cosas.
	Sobre todo si la palabra etiqueta se repite varias veces...`;
let resultado1 = interpolar(prueba1, 'etiqueta', { pre: '<b>', pos: '</b>' });

let prueba2 = `También puedes buscar algo dentro de la cadena usando Expresiones Regulares.`;
let resultado2 = interpolar(prueba2, /algo/g, { pre: '"', pos: '"' });

let prueba3 = `Puedes usar ext para rodear externamente e int para rodear internamente.`;
let resultado3 = [
	interpolar(prueba3, /ext\b/, { ext: '-', pre: '>', pos: '<' }),
	interpolar(prueba3, /int\b/, { int: '-', pre: '<', pos: '>' })
];

let prueba4 = [
	'Y si tienes varias cadenas.',
	'También puedes pasarle una lista de cadenas.',
];
let resultado4 = interpolar(prueba4, 'cadenas', { ext: '"' });

console.log({
	resultado1,
	resultado2,
	resultado3,
	resultado4,
});
