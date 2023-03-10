/**Función para interpolar cadenas fácilmente.
 * @param {string} cadena La cadena que se va interpolar.
 * @param {string | RegExp} filtro La cadena o expresión regular que se usará de filtro.
 * @param {{ ext: string, int: string, pos: string, pre: string }} options Un objeto con las claves `ext`, `int`, `pos` y `pre` con el contenido que se colocará en cada posición.
 */
function interpolar(cadena, filtro, options) {
	const { ext = '', int = '', pos = '', pre = '' } = options;
	const previo = ext+''+pre+''+int, posterior = int+''+pos+''+ext;

	const interpolacion = (cadena) => {
		const palabra = cadena.match(filtro);
		const insertable = previo+''+palabra+''+posterior;
		let auxiliar = cadena
			.split(filtro)
			.reduce(
				(completo, texto) => (completo += texto+''+insertable),
				''
			);
		return auxiliar.substring(0, auxiliar.lastIndexOf(insertable));
	};

	if (Array.isArray(cadena))
		return cadena.map((cadena) => interpolacion(cadena));

	return interpolacion(cadena);
}

module.exports = interpolar;
