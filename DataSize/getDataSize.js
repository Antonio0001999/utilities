/**Gets the value and unit of a string's length or a number.
 * @param {string | number} data The string to get the length from or the number of bytes.
 */
function getDataSize(data) {
	const size = (typeof data === 'string' ? data.length : data) || 0;

	if (size >= 1e9) return { size, value: Math.round(size / 1e9), unit: 'GB' };
	if (size >= 1e6) return { size, value: Math.round(size / 1e6), unit: 'MB' };
	if (size >= 1e3) return { size, value: Math.round(size / 1e3), unit: 'KB' };
	return { size, value: Math.round(size), unit: 'B' };
}

module.exports = getDataSize;