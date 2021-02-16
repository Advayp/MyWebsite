var jsonInDisplay = false;

const fetchApi = () => {
	// Some vars to reduce method chaining
	display = document.getElementById('api-display');
	inputURL = document.getElementById('api-url').value;

	// Fetching and Displaying
	fetch(inputURL)
		.then((response) => response.json())
		.then(
			(data) =>
				(display.innerHTML = JSON.stringify(
					data.results ? data.results : data,
					null,
					2
				))
		)
		.catch((err) => (display.innerHTML = 'Invalid API'));

	document.getElementById('api-url').value = '';
};

const clearResults = () => {
	display = document.getElementById('api-display');

	display.innerHTML = 'JSON will display here';
	document.getElementById('api-url').value = '';
};

const copyJSON = (id) => {
	jsonText = document.getElementById('api-display');

	if (
		jsonText.innerHTML === 'Invalid API' ||
		jsonText.innerHTML === 'JSON will display here'
	) {
		alert('Nothing to copy!');
	} else {
		var r = document.createRange();

		r.selectNode(document.getElementById(id));

		window.getSelection().removeAllRanges();

		window.getSelection().addRange(r);

		document.execCommand('copy');

		window.getSelection().removeAllRanges();

		alert('Copied JSON!');
	}
};
