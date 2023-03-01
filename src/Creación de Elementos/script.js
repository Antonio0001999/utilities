window.addEventListener('load', () => {
	const contenido = document.querySelector('#contenido');

	contenido.append(
		crea('h1', {
			class: 'titulo centrado',
			html: 'función crea()',
			attributes: { style: 'text-transform: capitalize;' }
		}),
		crea('div', {
			class: 'parrafos',
			children: [
				crea('p', {
					text: 'Este contenido ha sido generado desde código usando la función crea().',
				}),
				crea('p', {
					html: 'Sus <b>opciones de configuración</b> son:',
				}),
				crea('table', {
					class: 'tabla centrado',
					children: [
						crea('tr', {
							children: [
								crea('th', 'Opción'),
								crea('th', 'Descripción'),
							],
						}),
						crea('tr', {
							children: [
								crea('td', 'attributes'),
								crea('td', {
									html: 'Objeto cuyas claves se asignarán como atributos, por ejemplo el título de este elemento.',
									attributes: { title: 'Este título se generó al crear el elemento.' }
								}),
							],
						}),
						crea('tr', {
							children: [
								crea('td', 'children'),
								crea('td', {
									html: 'Lista de objetos que se agregarán al final del elemento que se esta creando.',
									children: [crea('b', 'Como por ejemplo este')]
								}),
							],
						}),
						crea('tr', {
							children: [
								crea('td', 'class'),
								crea('td', { html: 'Clase de estilos para el elemento', class: 'marcado' })
							]
						}),
						crea('tr', {
							children: [
								crea('td', 'events'),
								crea('td', {
									html: 'Objeto cuyas claves se asignarán como eventos, por ejemplo al hacer click ',
									children: [
										crea('u', {
											html: 'aquí',
											events: {
												click: () => alert('Este evento se generó al crear el elemento.')
											}
										})
									]
								})
							]
						}),
						crea('tr', {
							children: [
								crea('td', 'html / text'),
								crea('td', 'Las opciones html y text, equivalen a innerHTML e innerText. Al incluir ambas o especificar la configuración como un texto, prevalecerá <b>html</b>')
							]
						}),
						crea('tr', {
							children: [
								crea('td', 'style'),
								crea('td', { children: [
									crea('span', {
										html: 'La opción style permite añadir estilos en línea como string o como objeto',
										style: { 'font-family': 'arial' },
									})
								] })
							]
						}),
						crea('tr', {
							children: [
								crea('td', 'Text Node'),
								crea('td', {
									children: [
										crea('Al no especificar configuración, el primer parámetro generará un nodo de texto')
									]
								})
							]
						})
					],
				}),
			],
		})
	);
});
