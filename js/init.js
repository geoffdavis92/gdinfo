function Log(e){
	var _log = function(){console.log(e)}; 
	_log(e);
}

var db = connect("localhost:27017/users");
console.log(db);
var users = new Mongo().getDB("users");

console.log(users);