const http = require('http');
const defaultOptions = { body: undefined, headers: undefined, method: 'GET', timeout: 5000 };

/**
 * @param {string} url 
 * @param {Object<string, any>} options
 */
function request(url, options = defaultOptions) {
	const mixedOptions = {...defaultOptions, ...options};
	const requested = new URL(url);

	return new Promise((resolve, reject) => {
		try {
			const options = {
				headers: mixedOptions.headers,
				host: requested.host,
				hostname: requested.hostname,
				method: mixedOptions.method,
				path: requested.pathname,
				port: requested.port,
				protocol: requested.protocol,
				timeout: mixedOptions.timeout
			};

			let req = http.request(options, (res) => {
				let response = [];
				res.on('data', (chunk) => response.push(chunk));
				res.on('end', () => {
					try {
						resolve(Buffer.concat(response).toString());
					} catch (error) {
						reject(error);
					}
				});
			});

			req.on('error', (error) => reject(error));

			if (mixedOptions.body) {
				req.write(JSON.stringify(mixedOptions.body));
			}

			req.end();
		} catch (error) {
			reject(error);
		}
	});
}

module.exports = request;