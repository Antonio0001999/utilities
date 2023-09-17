/**Converts a number to its hex value
 * @param {number} decimal Decimal number to convert
 * @returns {string} String with Hex value
 */
function getHex(decimal) {
	const hex = decimal.toString(16);
	return hex.length === 1 ? '0' + hex : hex;
}

/**Get color and position of an element through MouseEvent
 * @param {HTMLElement} element DOM Element where the dropper will have effect
 * @param {MouseEvent} event Object with information about the event
 * @returns {{ color: string, x: number, y: number }} Color on Hex format and position (x, y) of the event.
 */
function dropper(element, event) {
	const { width, height } = element;
	const canvas = document.createElement('canvas');
	const context = canvas.getContext('2d');

	canvas.width = width;
	canvas.height = height;
	context.drawImage(element, 0, 0, width, height);

	const { x, y } = getPosition(element, event);
	const pixel = context.getImageData(x, y, 1, 1).data;
	const color = `#${getHex(pixel[0])}${getHex(pixel[1])}${getHex(pixel[2])}`;

	return { color, x, y };
}

/**Gets the coordinates of an element
 * @param {HTMLElement} element DOM Element to locate
 * @returns {{ x: number, y: number }} An object with coordinates x and y
 */
function getCoordinates(element) {
	let coordX = 0,
		coordY = 0;

	if (element.offsetParent) {
		do {
			coordX += element.offsetLeft;
			coordY += element.offsetTop;
		} while ((element = element.offsetParent));

		return { x: coordX, y: coordY };
	}

	return { x: null, y: null };
}

/**Gets event coordinates of an element
 * @param {HTMLElement} element DOM Element
 * @param {MouseEvent} event Event object
 * @returns {{ x: number, y: number }} An object with coordinates x and y of event.
 */
function getPosition(element, event) {
	let { x, y } = getCoordinates(element);
	let { pageX, pageY } = event;

	return { x: pageX - x, y: pageY - y };
}
