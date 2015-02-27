function Log(e){
	var _log = function(){console.log(e)}; 
	_log(e);
}

function start(e){
	if(!e){
		e = "none";
		console.log(e);
	}
	else{
		console.log(e);
	}
}