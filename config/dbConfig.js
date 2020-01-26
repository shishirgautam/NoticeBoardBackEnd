
var Sequelize  = require('sequelize')

var sequelize = new Sequelize('softt','root','Password',{
	host : 'localhost',
	dialect: 'mysql',
	logging:false
});
 sequelize.authenticate()
.then(
function(){ 
	console.log('db connection successfull')
})

.catch(
	function(err){
	console.log(err)
})


module.exports = {
	Sequelize, sequelize
}