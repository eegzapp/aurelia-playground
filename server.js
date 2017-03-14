
var express = require('express');
var app = express();

app.use(express.static('.'));

app.get('/', function (req, res) {
    res.send('Express handling this directory');
});

app.listen(8080, function () {
    console.log('Listening on port 8080');
});

