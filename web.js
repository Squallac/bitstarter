var express = require('express');
var fs = require ('fs');
var app = express();
app.use(express.logger());

	  

app.get('/', function(request, response) {

var indice = fs.readFileSync("index.html");
var buffer = new Buffer(indice);
var index = indice.toString();
//var buffer = new Buffer();
 response.send(index);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

