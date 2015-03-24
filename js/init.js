var Log = function(msg){console.log(msg);}

function hover(d){			// d => 20
	var div = (100 / d); 	// div => 5
	for(z=0;z<=div;z++){
		var logit = z*d;
		Log(logit);
	}
}
