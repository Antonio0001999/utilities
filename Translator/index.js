const translator = new Translator(langs);

let btnSubmit = null;
let selector = null;
let t = {};
let title = null;
window.addEventListener('load', () => {
	btnSubmit = document.querySelector('#btnSubmit');
	btnSubmit.addEventListener('click', onClickHandler);
	selector = document.querySelector('#selector');
	selector.addEventListener('click', onChangeLanguage);
	title = document.querySelector('#title');

	const search = new URLSearchParams(location.search)
	if (search.get('lang')) translator.changeLanguage(search.get('lang'));
	loadLang();
});

function loadLang() {
	t = translator.view(options);
	document.documentElement.lang = translator.lang;
	document.querySelector('meta[name="description"]').content = t.page.description;
	btnSubmit.innerHTML = t.page.send;
	document.title = t.page.title;
	title.innerHTML = t.page.question;
	selector.innerHTML = t.selector
		.map((item) => {
			let alt = item.label || item.id;
			let className = 'lang';
			let id = item.id;
			let src = `https://flagcdn.com/${item.flag || item.id}.svg`;
			if (translator.lang === item.id) {
				className += ' selected';
			}
			return `<img alt="${alt}" src="${src}" id="${id}" class="${className}" width="32" height="32" />`;
		})
		.join('');
}

function onClickHandler() {
	const name = document.querySelector('#name').value;
	if (name) {
		title.innerHTML = t.page.greeting(name);
	}
}

function onChangeLanguage(e) {
	if (e.target.classList.contains('lang')) {
		let url = new URL(location.href);
		url.searchParams.set('lang', e.target.id);
		location.href = url.href;
	}
}
