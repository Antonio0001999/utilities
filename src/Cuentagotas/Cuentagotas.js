/**Función para convertir un número a su valor Hexadecimal.
 * @param {number} numero El número a convertir a Hexadecimal.
 * @returns {string} Una cadena con el número convertido a su valor Hexadecimal.
 */
const verHexadecimal = (numero) => {
	const hex = numero.toString(16);
	return hex.length === 1 ? '0' + hex : hex;
};

/**Función para ver el color y la posición sobre el que se ha pulsado un elemento.
 * @param {HTMLElement} elemento El elemento del DOM sobre el que se ha lanzado el evento.
 * @param {MouseEvent} evento El objeto con la información del Evento.
 * @returns {{ color: string, x: number, y: number }} Una cadena con el color en formato Hexadecimal y las coordenadas X e Y del evento.
 */
const verDatos = (elemento, evento) => {
	const { width, height } = elemento;
	const canvas = document.createElement('canvas');
	const contexto = canvas.getContext('2d');

	canvas.width = width;
	canvas.height = height;
	contexto.drawImage(elemento, 0, 0, width, height);

	const { x, y } = verPosicion(elemento, evento);
	const pixel = contexto.getImageData(x, y, 1, 1).data;
	const color = `#${verHexadecimal(pixel[0])}${verHexadecimal(pixel[1])}${verHexadecimal(pixel[2])}`;

	return { color, x, y };
};

/**Función para obtener las coordenadas de un elemento.
 * @param {HTMLElement} elemento El elemento del DOM del cual se quieren obtener las coordenadas.
 * @returns {{ x: number, y: number }} Un objeto con las coordenadas X e Y del elemento.
 */
const verCoordenadas = (elemento) => {
	let coordenadaX = 0,
		coordenadaY = 0;

	if (elemento.offsetParent) {
		do {
			coordenadaX += elemento.offsetLeft;
			coordenadaY += elemento.offsetTop;
		} while ((elemento = elemento.offsetParent));

		return { x: coordenadaX, y: coordenadaY };
	}

	return { x: null, y: null };
};

/**Función para ver las coordenadas de un evento sobre un elemento.
 * @param {HTMLElement} elemento El elemento del DOM sobre el que se ha lanzado el evento.
 * @param {MouseEvent} evento El objeto con la información del Evento.
 * @returns {{ x: number, y: number }} Un objeto con las coordenadas X e Y del elemento.
 */
const verPosicion = (elemento, evento) => {
	let { x, y } = verCoordenadas(elemento);
	let { pageX, pageY } = evento;

	return { x: pageX - x, y: pageY - y };
};
