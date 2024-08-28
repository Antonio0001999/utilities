const data = {
	en: {
		selector: [
			{ id: 'en', flag: 'gb', label: 'English' },
			{ id: 'es', label: 'Spanish' },
			{ id: 'it', label: 'Italian' },
			{ id: 'pt', label: 'Portuguese' },
		],
		page: {
			greeting: (name) => `Welcome, ${name}!`,
			question: "What's your name?",
			send: 'Send',
			title: 'Translator',
			description: 'Translation Test Page.'
		},
	},
	es: {
		selector: [
			{ id: 'en', flag: 'gb', label: 'Inglés' },
			{ id: 'es', label: 'Español' },
			{ id: 'it', label: 'Italiano' },
			{ id: 'pt', label: 'Portugués' },
		],
		page: {
			greeting: (name) => `¡Bienvenido, ${name}!`,
			question: '¿Cómo te llamas?',
			send: 'Enviar',
			title: 'Traductor',
			description: 'Página de pruebas de Traducción.'
		},
	},
	it: {
		selector: [
			{ id: 'en', flag: 'gb', label: 'Inglese' },
			{ id: 'es', label: 'Espagnolo' },
			{ id: 'it', label: 'Italiano' },
			{ id: 'pt', label: 'Portoghese' },
		],
		page: {
			greeting: (name) => `Benvenuto, ${name}!`,
			question: 'Come ti chiami?',
			send: 'Inviare',
			title: 'Traduttore',
			description: 'Pagina di prova di traduzione.'
		},
	},
	pt: {
		selector: [
			{ id: 'en', flag: 'gb', label: 'Inglês' },
			{ id: 'es', label: 'Espanhol' },
			{ id: 'it', label: 'Italiano' },
			{ id: 'pt', label: 'Português' },
		],
		page: {
			greeting: (name) => `Bem vindo, ${name}!`,
			question: 'Qual o seu nome?',
			send: 'Enviar',
			title: 'Tradutor',
			description: 'Página de teste de tradução.'
		},
	},
};

const langs = Object.keys(data);
const options = Object.values(data);
