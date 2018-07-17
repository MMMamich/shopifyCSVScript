var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var port = process.env.PORT || 3000;
var app = express();

app.use(express.static( __dirname + '/CSV_Script' ));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res){

  res.sendFile(path.join(__dirname, 'CSV_Script', 'index.html'));

});

app.get('/csvJosh', function(req, res){
  
  res.sendFile(path.join(__dirname, 'CSV_Script', 'blank.html'));

});

app.listen(port, function(){

  console.log("Server Running On Port 3000!");

});
