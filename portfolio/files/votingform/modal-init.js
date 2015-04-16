// _modal-init.js
$(document).ready(function(){
	$('body :not(div.modal)').hide(0).delay(250).fadeIn(1500).css('opacity','.25');
	$('form > *, button').attr('disabled','disabled');
});

(function(){
	var $content = $('div.content').html();
	$('.modal').hide(0).delay(250).fadeIn(500);
	$('.modal').detach();
	$(document).ready(function(){
		// $('.modal').css('opacity','1');
		modal.open({content: $content, width: 340, height: 300});
	});
}());

function checkName(){
	var nameStorage = localStorage.getItem("name");
	if(nameStorage){
		console.log("yep");
	}
	else{
		console.log("nope");
	}
	var $text = $('input#nameField').value;
	var set = localStorage.setItem("name", $text);
	if(nameStorage === localStorage.getItem("name")){
		// console.log(localStorage.getItem("name"));
		// console.log(nameStorage);
		// $('div.modal div.content form#namecheck').remove();
		// $('div.modal div.content').append('<p><b>WE DO NOT WANT YOUR TYPE HERE</b></p>');
		// console.log("BAD");
		// $('button.close').attr('disabled','disabled');
	}
	// else{
		// alert("welcome!");
		modal.close();
	// }
}