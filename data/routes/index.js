var express = require('express');
var router = express.Router();
var template = require('../lib/template.js');

app.get('/', function(request, response) { 
    var title = 'Welcome';
    var description = 'Hello, Node.js';
    var list = template.list(request.list);
    var html = template.HTML(title, list,
      `<h2>${title}</h2>${description}
      <img src ="/image/hello.jpg" style="width :200px; display : block; ">
      `,
      
      `<a href="/create">create</a>`
    ); 
    response.send(html);
});

module.exports =router;