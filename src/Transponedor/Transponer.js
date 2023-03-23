function transponer(tableSelector, objetiveSelector) {
	console.time('Transponer');
	const table = document.getElementById(tableSelector);
	const rows = Array.from(table.querySelectorAll('tr'));

	let maxRowLength = Math.max(...rows.map(tr => Array.from(tr.querySelectorAll('td, th')).length));
	let newRows = [];

	let newTable = document.getElementById(objetiveSelector ?? tableSelector);
	newTable.innerHTML = '';

	for (let i = 0; i < maxRowLength; i++) {
		let tr = document.createElement('tr');
		newRows.push(tr);
		newTable.append(tr);
	}

	for (let i = 0; i < rows.length; i++) {
		const row = rows[i];
		const tds = Array.from(row.querySelectorAll('td, th'));

		for (let j = 0; j < tds.length; j++) {
			const td = tds[j];

			newTD = td.cloneNode(true);
			let colspan = td.getAttribute('colspan');
			let rowspan = td.getAttribute('rowspan');
			
			if (rowspan) newTD.setAttribute('colspan', rowspan);
			else newTD.removeAttribute('colspan');

			if (colspan) newTD.setAttribute('rowspan', colspan);
			else newTD.removeAttribute('rowspan');
			
			newRows[j].append(newTD);
		}
	}

	console.timeEnd('Transponer');
}