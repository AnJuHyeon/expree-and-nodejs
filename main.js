var express = require('express')
var app = express()
var fs = require('fs');
var path = require('path');
var qs = require('querystring');
var sanitizeHtml = require('sanitize-html');
var bodyParser = require('body-parser');
var compression = require('compression');
var topicRoute = require('./routes/topic');
var indexRoute = require('./router/index');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression()); //압축을 시켜주는 미들웨어
app.get('*',function(request,response,next){
  fs.readdir('./data', function(error, filelist){
    request.list = filelist;
    next();
  });
});

app.use('/', indexRoute);
//route, routing
//app.get('/', (req, res) => res.send('Hello World!'))
//fs.readdir : 글 목록을 표현해주는 기능.

 


    app.use(function(req, res, next) {
      res.status(404).send('Sorry cant find that!');
    });

    app.use(function(req, res, next) {
      res.status(404).send('Sorry cant find that!');
    });
    app.use((err, req, res, next) => {
      console.error(err.stack)
      res.status(500).send('Something broke!')
    })
app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
});