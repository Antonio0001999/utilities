/** Type Definitions
 * @typedef {{ attributes: { [x: string]: string }, children: HTMLElement[], className: string, events: Object<string, Function>, html: string, style: string | CSSStyleDeclaration | string, text: string, value: string }} ElementOptions
 */

/**Create element through DOM Manipulation.
 * @param {string} tag HTML tag.
 * @param {string | ElementOptions | null} options Element options.
 * @return {HTMLElement} Reference to created HTMLElement.
 */
function create(tag, options) {
	if (options) {
		const element = document.createElement(tag);
		if (typeof options === 'string') element.innerHTML = options;
		else {
			const { attributes, children, className, events, html, style, text, value } = options;
			if (attributes) {
				const keys = Object.keys(attributes);
				for (let i = 0; i < keys.length; i++) {
					const key = keys[i];
					element.setAttribute(key, attributes[key]);
				}
			}
			if (text) element.innerText = text;
			if (html) element.innerHTML = html;
			if (children) {
				for (let i = 0; i < children.length; i++) {
					const child = children[i];
					element.append(child);
				}
			}
			if (className) element.className = className;
			if (events) {
				const keys = Object.keys(events);
				for (let i = 0; i < keys.length; i++) {
					const key = keys[i];
					element.addEventListener(key, events[key]);
				}
			}
			if (style) {
				if (typeof style === 'string') {
					element.style = style;
				} else {
					for (const key in style) {
						element.style[key] = style[key];
					}
				}
			}
			if (value) element.value = value;
		}
		return element;
	} else {
		const textNode = document.createTextNode(tag);
		return textNode;
	}
}
