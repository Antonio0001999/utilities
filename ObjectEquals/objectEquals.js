module.exports = function objectEquals(obj1, obj2) {
	const type1 = Array.isArray(obj1) ? 'array' : obj1 === null ? 'null' : typeof obj1;
	const type2 = Array.isArray(obj2) ? 'array' : obj2 === null ? 'null' : typeof obj2;
	if (type1 !== type2) return false;
	if (!['number', 'array', 'object'].includes(type1)) return obj1 === obj2;
	if (type1 === 'number') {
		if (isNaN(obj1) && isNaN(obj2)) return true;
		return obj1 === obj2;
	}
	if (type1 === 'object') {
		if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
		for (const key in obj1) {
			if (!objectEquals(obj1[key], obj2[key])) return false;
		}
		return true;
	}
	if (type1 === 'array') {
		if (obj1.length !== obj2.length) return false;
		for (let i = 0; i < obj1.length; i++) {
			if (!objectEquals(obj1[i], obj2[i])) return false;
		}
		return true;
	}
	return false;
}
