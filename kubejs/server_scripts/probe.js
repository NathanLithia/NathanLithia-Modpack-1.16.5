function probe(obj) {
	if (typeof obj !== 'undefined') {
		console.log(Object.keys(obj));
	} else {
		console.info('probed object is undefined')
	}
}