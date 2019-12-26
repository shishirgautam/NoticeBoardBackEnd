var express = require('express');
var app = express();
app.get('/*', function(req,res){
    res.end('welcome to our new project')
});
app.listen(3037);