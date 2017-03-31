var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var port = 9701;

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

var routes = require('./routes');
app.use('/', routes);

app.listen(port, function () {
    console.log("Servidor NodeJs corriendo en el puerto 9701");
});
