var express = require('express');
var app = express();




app.use(express.static(__dirname + "/public"));

app.all('/*', function(req, res) {
    res.sendFile(__dirname +'/public/index.html');
  });




app.listen(1000);
console.log('Server running on port 3000');