/**Función para crear referencias a elementos a través de la manipulación del DOM.
 * @param {string} etiqueta Etiqueta HTML del elemento.
 * @param {{ attributes: Object<string, string>, children: HTMLElement[], class: string, events: Object<string, Function>, html: string, style: Object<string, string> | string, text: string, value: string }} config Parámetros del elemento.
 * @return {HTMLElement} Una referencia a HTMLObjectElement.
 */
function crea(etiqueta, config) {
	if (config) {
		const elemento = document.createElement(etiqueta);
		if (typeof config === 'string') elemento.innerHTML = config;
		else {
			if (config.attributes) {
				const keys = Object.keys(config.attributes);
				for (let i = 0; i < keys.length; i++) {
					const key = keys[i];
					elemento.setAttribute(key, config.attributes[key]);
				}
			}
			if (config.text) elemento.innerText = config.text;
			if (config.html) elemento.innerHTML = config.html;
			if (config.children) {
				for (let i = 0; i < config.children.length; i++) {
					const child = config.children[i];
					elemento.append(child);
				}
			}
			if (config.class) elemento.className = config.class;
			if (config.events) {
				const keys = Object.keys(config.events);
				for (let i = 0; i < keys.length; i++) {
					const key = keys[i];
					elemento.addEventListener(key, config.events[key]);
				}
			}
			if (config.style) {
				if (typeof config.style === 'string') {
					elemento.style = config.style;
				}
				else {
					let styleLine = '';
					const styles = Object.keys(config.style);
					for (let i = 0; i < styles.length; i++) {
						const style = styles[i];
						styleLine += style + ':' + config.style[style] + ';';
					}
					elemento.setAttribute('style', styleLine);
				}
			}
		}
		return elemento;
	}
	else {
		const elemento = document.createTextNode(etiqueta);
		return elemento;
	}
}
