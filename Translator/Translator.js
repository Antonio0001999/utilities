class Translator {
	constructor(langs = []) {
		this.list = langs;
		this.lang = langs[0];
	}

	changeLanguage = (lang) => {
		this.lang = lang;
	}

	view = (options = []) => {
		return options[this.list.indexOf(this.lang)] || options?.[0];
	};
}
