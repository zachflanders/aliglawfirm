//Call the Packages
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());





app.use(express.static(__dirname + '/public'));


app.get('*', function(req, res){
  res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'))});
