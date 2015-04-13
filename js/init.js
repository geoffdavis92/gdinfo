var Log = function(msg){console.log(msg);}

function hover(d){			// d => 20
	var div = (100 / d); 	// div => 5
	for(z=0;z<=div;z++){
		var logit = z*d;
		Log(logit);
	}
}

function print(){
	// Button to print .html page?
}

$('ul li.hv').each(function(){
	var classes = $(this).attr('class');
		classes = classes.split(" ");
	$(this).hover(function(){
		if(classes[1] === "orange"){
			$(this).addClass('bg-orange');
		} else if(classes[1] === "blue"){
			$(this).addClass('bg-blue');
		} else if(classes[1] === "maroon"){
			$(this).addClass('bg-maroon');
		} else if(classes[1] === "gold"){
			$(this).addClass('bg-gold');
		} else if(classes[1] === "green"){
			$(this).addClass('bg-green');
		}
	},function(){
		if(classes[1] === "orange"){
			$(this).removeClass('bg-orange');
		} else if(classes[1] === "blue"){
			$(this).removeClass('bg-blue');
		} else if(classes[1] === "maroon"){
			$(this).removeClass('bg-maroon');
		} else if(classes[1] === "gold"){
			$(this).removeClass('bg-gold');
		} else if(classes[1] === "green"){
			$(this).removeClass('bg-green');
		}
	})
});

$('button.btn.back').click(function(){
	baseURL = $('base').attr('href');
});