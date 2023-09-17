window.addEventListener('load', () => {
	const content = document.querySelector('#content');

	content.append(
		create('h1', {
			className: 'title centered',
			html: 'create()',
			attributes: { style: 'text-transform: capitalize;' },
		}),
		create('div', {
			className: 'paragraphs',
			children: [
				create('p', {
					text: 'This content was generated with create() function.',
				}),
				create('p', {
					html: 'Its <b>configuration options</b> are:',
				}),
				create('table', {
					className: 'centered',
					children: [
						create('tr', {
							children: [create('th', 'Option'), create('th', 'Description')],
						}),
						create('tr', {
							children: [
								create('td', 'attributes'),
								create('td', {
									html: 'Key-Value pairs that will be assigned as attributes for the element.',
									attributes: { title: 'This title was created with title attribute.' },
								}),
							],
						}),
						create('tr', {
							children: [
								create('td', 'children'),
								create('td', {
									html: 'A List of element childs to append. ',
									children: [create('i', 'Like this one')],
								}),
							],
						}),
						create('tr', {
							children: [create('td', 'className'), create('td', { html: 'Style class for the element', className: 'marked' })],
						}),
						create('tr', {
							children: [
								create('td', 'events'),
								create('td', {
									html: 'Key-Value pairs that will be assigned as events for the element. Like clicking ',
									children: [
										create('u', {
											html: 'here',
											events: {
												click: () => alert('This event was generated with create().'),
											},
										}),
									],
								}),
							],
						}),
						create('tr', {
							children: [
								create('td', 'html / text'),
								create('td', 'The html and text keys are equivalent to innerHTML and innerText. If both are provided or the options object is a string, innerHTML will be used.'),
							],
						}),
						create('tr', {
							children: [
								create('td', 'style'),
								create('td', {
									children: [
										create('span', {
											html: 'Option style can add inline-styles',
											style: { fontFamily: 'arial' },
										}),
									],
								}),
							],
						}),
						create('tr', {
							children: [
								create('td', 'Text Node'),
								create('td', {
									children: [create('When no options are provided, a TextNode will be created.')],
								}),
							],
						}),
					],
				}),
			],
		})
	);
});
