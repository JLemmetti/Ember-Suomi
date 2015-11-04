var express = require('express');
var app = express();
var cors = require('cors');

app.use(express.static('public'));
app.use(cors());

// Install middleware for this
//app.use(express.compress());

app.get('/', function (req, res) {
	res.send('Ember Suomen perspuoli');
});

app.get('/articles', function (req, res) {
	res.format({
		'application/vnd.api+json': function () {
			res.sendFile('articles.json', {root: './public/'});
		}
	});
});


var server = app.listen(3000, function () {

	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});