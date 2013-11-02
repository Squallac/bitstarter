var express = require('express');
var app = express();
app.use(express.logger());

var index=fs.readFileSync('index.html');
var rectificado=index.toString('utf8');			  

app.get('/', function(request, response) {
  response.send(rectificado);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

