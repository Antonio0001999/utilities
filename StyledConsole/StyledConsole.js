/** Type Definitions
 * @typedef {"bgBlack" | "bgRed" | "bgGreen" | "bgYellow" | "bgBlue" | "bgMagenta" | "bgCyan" | "bgWhite"} BgColor
 * @typedef {"txtGray" | "txtRed" | "txtGreen" | "txtYellow" | "txtBlue" | "txtMagenta" | "txtCyan" | "txtWhite"} Color
 * @typedef {"normal" | "bold" | "cursive" | "hidden" | "lineThrough" | "underline"} Style
 * @typedef {BgColor | Color | Style} LineStyle
 * @typedef {[String, LineStyle]} Line
 */

//#region GLOBAL VARIABLES
const consoleStyle = {
	none: '\x1b[0m',
	bold: '\x1b[1m',
	normal: '\x1b[2m',
	cursive: '\x1b[3m',
	underline: '\x1b[4m',
	hidden: '\x1b[8m',
	lineThrough: '\x1b[9m',
	txtGray: '\x1b[30m',
	txtRed: '\x1b[31m',
	txtGreen: '\x1b[32m',
	txtYellow: '\x1b[33m',
	txtBlue: '\x1b[34m',
	txtMagenta: '\x1b[35m',
	txtCyan: '\x1b[36m',
	txtWhite: '\x1b[37m',
	bgBlack: '\x1b[40m',
	bgRed: '\x1b[41m',
	bgGreen: '\x1b[42m',
	bgYellow: '\x1b[43m',
	bgBlue: '\x1b[44m',
	bgMagenta: '\x1b[45m',
	bgCyan: '\x1b[46m',
	bgWhite: '\x1b[47m',
};
//#endregion

class StyledConsole {
	/**Constructor for StyledConsole class.
	 * @param {string} joiner
	 * @param {LineStyle} defaultStyle
	 */
	constructor(joiner = '', defaultStyle = '') {
		this.joiner = joiner;
		const style = defaultStyle
			.split(' ')
			.map((name) => consoleStyle[name])
			.join('');
		this.defaultStyle = style;
	}

	/**Prints to console when `condition` is a truthy expression.
	 * @param {boolean} condition
	 * @param {Line[]} lines
	 * @example ```js
	 * assert(true, ['Asserted text', 'txtMagenta']);
	 * ```
	 */
	assert(condition = false, ...lines) {
		const { result, text } = this.create(...lines);
		console.assert(condition, result);
		return text;
	}

	/**Creates string with Console Style
	 * @param {Line[]} lines
	 * @example ```js
	 * create(['Cursive gray text', 'cursive txtGray']);
	 * ```
	 */
	create(...lines) {
		const result = [];
		const text = [];

		for (let i = 0; i < lines.length; i++) {
			const line = lines[i];
			let styledLine = '';
			if (typeof line === 'string') {
				styledLine = this.defaultStyle + line;
				text.push(line);
			} else {
				const lineString = line[0] || '';
				const lineStyle = line[1] ? line[1].split(' ') : [];
				const style = lineStyle.length > 0 ? lineStyle.map((name) => consoleStyle[name]).join('') : this.defaultStyle;
				styledLine = style + lineString + consoleStyle.none;
				text.push(lineString);
			}

			result.push(styledLine);
		}

		return {
			result: result.join(this.joiner),
			text: text.join(this.joiner)
		};
	}

	/**Prints to console at Debug level.
	 * @param {Line[]} lines
	 * @example ```js
	 * debug(['Debug text', 'lineThrough']);
	 * ```
	 */
	debug(...lines) {
		const { result, text } = this.create(...lines);
		console.debug(result);
		return text;
	}

	/**Prints to console at Error level
	 * @param {Line[]} lines
	 * @example ```js
	 * error(['Error text', 'txtRed']);
	 * ```
	 */
	error(...lines) {
		const { result, text } = this.create(...lines);
		console.error(result);
		return text;
	}

	/**Prints to console at Info level
	 * @param {Line[]} lines
	 * @example ```js
	 * create(['Info text', 'txtBlue']);
	 * ```
	 */
	info(...lines) {
		const { result, text } = this.create(...lines);
		console.info(result);
		return text;
	}

	/**Default log to console function.
	 * @param {Line[]} lines
	 * @example ```js
	 * log(['Some text', 'normal']);
	 * ```
	 */
	log(...lines) {
		const { result, text } = this.create(...lines);
		console.log(result);
		return text;
	}

	/**Sets default style to apply on lines without styling specifications.
	 * @param {LineStyle} style
	 */
	setDefaultStyle(style) {
		const styles = style.split(' ');
		this.defaultStyle = styles.map((name) => consoleStyle[name]).join('');
	}

	/**Sets the global joiner that will be used to join lines at `create` function.
	 * @param {string} newJoiner
	 */
	setJoiner(newJoiner = '') {
		this.joiner = newJoiner;
	}

	/**Prints to console at Warn level
	 * @param {Line[]} lines
	 * @example ```js
	 * create(['Warn text', 'txtYellow']);
	 * ```
	 */
	warn(...lines) {
		const { result, text } = this.create(...lines);
		console.warn(result);
		return text;
	}
}

const styled = new StyledConsole('', 'normal');

globalThis.styled = styled;
