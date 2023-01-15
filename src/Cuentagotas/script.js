window.addEventListener('load', () => {
	const titulo = document.querySelector('#titulo');
	const imagen = document.querySelector('#imagen');

	imagen.addEventListener('click', (ev) => {
		let datos = verDatos(ev.target, ev);

		titulo.style.backgroundColor = datos.color;
	});
});
