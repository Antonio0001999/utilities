/**Function for String Interpolation.
 * @param {string} string The string text to interpolate.
 * @param {string | RegExp} search The string or regex to interpolate on.
 * @param {{ ext: string, int: string, pos: string, pre: string }} options An object with keys: `ext`, `int`, `pos` y `pre` with the content of each position.
 */
function interpolate(string, search, options) {
	const { ext = '', int = '', pos = '', pre = '' } = options;
	const before = ext+''+pre+''+int, after = int+''+pos+''+ext;

	const interpolation = (text) => {
		const word = text.match(search);
		const insertable = before+''+word+''+after;
		let auxiliary = text
			.split(search)
			.reduce(
				(full, text) => (full += text+''+insertable),
				''
			);
		return auxiliary.substring(0, auxiliary.lastIndexOf(insertable));
	};

	if (Array.isArray(string))
		return string.map((text) => interpolation(text));

	return interpolation(string);
}

globalThis.interpolate = interpolate;
