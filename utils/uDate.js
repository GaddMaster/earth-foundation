
const getUNow = () => {
	let uNow = new Date().getTime() / 1000;
	return parseInt(uNow.toFixed(0));
};

export default {
	getUNow
};
