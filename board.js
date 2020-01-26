var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var userController = require('./controllers/User_controller.js')
app.use(bodyParser.urlencoded({extended:true}))
// app.get('/*', function(req,res){
//     res.end('welcome to our new project run')
//});
// app.post('/registration', function(req,res){
//     res.end('welcome to our new project registration')
// });


app.post('/registration',userController.validation,userController.hashGen,userController.registerUser )
app.listen(8888);

module.exports = app;