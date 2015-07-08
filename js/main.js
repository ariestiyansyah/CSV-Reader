function handleFiles(files) {
	if (window.FileReader) {
		getAsText(files[0]);
	} else {
		alert('Browser not supported')
	}
}

function getAsText(readFile) {
	var reader = new FileReader();
	reader.onload = loadHandler;
	reader.onerror = errorHandler;
	reader.readAsText(readFile);
}

function loadHandler(event) {
	var csv = event.target.result;
	processData(csv);
}