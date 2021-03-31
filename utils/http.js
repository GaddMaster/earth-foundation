
const request = (method, url, payload, cb) => {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (this.readyState === 4 && this.status === 200) {
			let parsed = JSON.parse(this.response);
			cb(parsed);
		}
	};
	xhr.open(method, url);
	xhr.send(JSON.stringify(payload));
};

const requestAsync = (method, url, payload) => {
	return new Promise(function (resolve, reject) {
		let xhr = new XMLHttpRequest();
		xhr.open(method, url);
		xhr.onload = function () {
			if (this.status >= 200 && this.status < 300) {
				resolve(JSON.parse(xhr.response));
			} else {
				reject({
					status: this.status,
					statusText: xhr.statusText
				});
			}
		};
		xhr.onerror = function () {
			reject({
				status: this.status,
				statusText: xhr.statusText
			});
		};
		xhr.send(JSON.stringify(payload));
	});
};

export default {
	request,
	requestAsync
};
