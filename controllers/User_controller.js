var user = require('../models/User.model.js')

var bcrypt = require('bcryptjs');
function hashGen(req,res,next){
    saltRounds = 10; 
    console.log('in has gen');
    bcrypt.hash(req.body.password,saltRounds)
    .then(function(hash){
        console.log(hash);
        req.userHash = hash;
        next();
    })
    .catch(function(err){
        next('has gen error')
    })
    
    }
    function validation (req,res,next){
        // console.log(req.body.username);
        
        user.findOne({
            where:{username:req.body.username}
        })
        .then(function(result){
        // console.log(result);
        if(result === null){
        
        // res.send('user not found so registeed')
        next();
        
        }
        
        else{
        
        console.log('user was already registered');
        res.status(409);
        res.json({status:409, message:'You are already registered'});
        
        }
        
        
        })
        .catch(function(err){
        
        next(err)
        
        })
        
        }
        function registerUser (req,res,next){

            console.log(req.body);
            user.create({
            username:req.body.username,
            password:req.userHash,
            address:req.body.address
            
            })
            .then(function(result){
            
            // console.log(result);
            res.status(201);
            res.json({
                status:201,
                message:"You have been registered succesfully"
            })
            })
            .catch(function(err){
            console.log(err)
            next(err);
            })
            
            }

            module.exports = {
                registerUser,
                validation,
                hashGen

            }