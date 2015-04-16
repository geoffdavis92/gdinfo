// script.js

var voteArray = [];
var clubArray = ["Alpha Tau","Beta Omega Chi","Chi Sigma Alpha","Delta Chi Delta","Gamma Sigma Phi","King\'s Men","Knights","Kydoai","Omega Phi","Pi Kappa Epsilon","Sigma Nu Epsilon","Sub-T 16","Titans","TNT"];
var idArray = ['at','box','csa','dxd','gsp','km','kn','ky','ophi','pikes','sne','subt','titans','tnt'];

for(var i = 0; i < clubArray.length; i++){
	$('select#list').append("<option value="+clubArray[i]+">"+clubArray[i]+"</option>");
	voteArray[i] = 0;
	$('tr#names').append("<td id="+idArray[i]+"-header>"+clubArray[i]+"</td>");
	$('tr#votes').append("<td id="+idArray[i]+"-votes>"+voteArray[i]+"</td>")
}

$('select#list').change(function(){
	var selected = $('select#list option:selected').text();
	for(var i = 0; i < clubArray.length; i++){
		if(selected == clubArray[i]){
			$('.preview').removeClass();
			$('tr#votes td').css('border-color','transparent');
			$('td#'+idArray[i]+'-votes').addClass('preview');
		}
	}
});

function vote(){
	var selected = $('select#list option:selected').text();
	// console.log(selected + " is selected.");
	// $('.active').removeClass();
	$('td').removeClass();
	for(var i = 0; i < clubArray.length; i++){
		if(selected == clubArray[i]){
			var indexVote = voteArray[i];
			indexVote += 1;
			voteArray[i] = indexVote;
			$('td#'+idArray[i]+'-votes').text(voteArray[i]).delay(750).fadeIn(1000);
			// console.log('td#'+idArray[i]+'-votes' + " is the destination.");
			console.log(indexVote + " is the vote count for " + clubArray[i]);
			$('td#'+idArray[i]+'-votes').addClass('active votes');
			$('td#'+idArray[i]+'-header').addClass('active header');
		}
	}
}

function reset(){
	var selected = $('select#list option:selected').text();
	// for(var i = 0; i < clubArray.length; i++){
		// if(selected == clubArray[i]){
			$('tr#votes td').text("0");
			$('td').removeClass();
			$('td').addClass('reset');
			console.log("%cR-E-S-E-T",'font-weight: heavy; font-size: 2.5em; text-shadow: 0px 0px 9px red;');
		// }
	// }
}

// Snippet that checks <code> blocks and returns HTML characters as text()
function checkCode(){
	var slice = $('span.code').slice();
	for(var i = 0; i <= slice.length; i++){
		var escaped = $(slice[i]).html();
		$(slice[i]).text(escaped);
	}
}
checkCode();