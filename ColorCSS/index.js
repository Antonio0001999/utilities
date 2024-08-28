const { generateFilter, hexToRgb } = require('./ColorCSS');

const color = '#224466';

const filter = generateFilter(color);
const values = hexToRgb(color);

console.log({ filter, values });
