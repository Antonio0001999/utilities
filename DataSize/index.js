const getDataSize = require('./getDataSize');

const size1KB = getDataSize(1_000);
const size1MB = getDataSize(1_000_000);
const size1GB = getDataSize(1_000_000_000);
const sizeString = getDataSize('Hello World');

console.log({
	size1KB,
	size1MB,
	size1GB,
	sizeString,
});
