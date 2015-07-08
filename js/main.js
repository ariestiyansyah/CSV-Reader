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

function processData(csv) {
	var all = csv.split(/\r\n|\n/);
	var lines = [];
	while (all.length) {
		lines.push(all.shift().split(','));
	}
	console.log(lines);
	drawoutput(lines);
}

function errorHandler(evt) {
	if(evt.target.error.name == "NotReadableError") {
		alert("Canno't read file !");
	}
}

function drawOutput(lines){
	document.getElementById("result").innerHTML = "";
	var table = document.createElement("table");
	for (var i = 0; i < lines.length; i++) {
		var row = table.insertRow(-1);
		for (var j = 0; j < lines[i].length; j++) {
			var firstNameCell = row.insertCell(-1);
			firstNameCell.appendChild(document.createTextNode(lines[i][j]));
		}
	}
	document.getElementById("result").appendChild(table);
}