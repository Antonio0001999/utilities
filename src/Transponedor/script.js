window.addEventListener('load', main);

function main() {
	let btn = document.querySelector('#btnTransponer');
	btn.addEventListener('click', () => {
		transponer('tabla');
	});
}