var express = require('express');
 
var app = express();
 
app.get('/', function (req, res) {
  res.send('hello world, fourth.');
});
 
app.listen(process.env.PORT || 5000, function({
	console.log('LISTENING PORT 5000');
});
 
module.exports = app;

 
 
