var Log = function(msg){console.log(msg);}

function hover(d){			// d => 20
	var div = (100 / d); 	// div => 5
	for(z=0;z<=div;z++){
		var logit = z*d;
		Log(logit);
	}
}

function printFile(file){
	console.log('printFile: '+file);
	window.open("portfolio/"+file+".html", "_blank");
}
$('button#print').click(function(){
	console.log('print click '+ $(this).attr('data-file'));
	printFile($(this).attr('data-file'));
});

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

$('a.btn.back').click(function(){
	var base = $('base').attr('href');
	var path = window.location.pathname;
	var split = path.split("/");
	split.shift();
	split.splice(2,1);
	var ext = split[0]+"/"+split[1]+".html";
	base = base + ext;
	window.open(base,"_self");
});
$('a.btn.launch').click(function(){
	var url = $('body').attr('data-ref');
	var folder = $('body').attr('data-title');
	window.open(url,"_blank");
	// var url = $('body').attr('data-ref');
	// window.open(url,"_self");
})

// Limit height/width of carousel images

$('div.carousel-innner div.item img').css({
		width: "250px", 
		height: "100px"
});

// ScrollSpy => portfolio.html
$('body').scrollspy({ target: '#navSpy'});