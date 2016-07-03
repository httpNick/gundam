var express = require('express')
  , app = express()
  , router = require('./server/router');

app.engine('html', require('ejs').renderFile);

// use statements
app.use('/', express.static(__dirname + '/public'));
app.use('/', router);

// set statements
app.set('view engine', 'html');
app.set('views', __dirname + '/public');

// get statements
app.get('/', (req, res) => {
  res.render('index');
});

var server = app.listen(process.env.PORT || 3000, () => {

  var host = server.address().address;
  var port = server.address().port;
  console.log('listening at http://%s:%s', host, port);

});