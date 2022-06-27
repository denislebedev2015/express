const express = require('express');
let app = express();

app.get('/', function(req, res) {
	res.send('hello server');
});

app.listen(3000, function() {
	console.log('running');
});
//ffg