//Call the Packages
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var config = require('./config');
var path = require('path');


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.use(morgan('dev'));


app.use(express.static(__dirname + '/public'));


app.get('*', function(req, res){
  res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.listen(config.port);
console.log('App running on port' + config.port);
