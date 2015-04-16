// ajax.js

if($('body').attr('data-type') === 'page') {
	(function() {
		siteEnds();
	})();
}

function siteEnds(){
	console.log('siteEnds');
	var xhr = new XMLHttpRequest();
	xhr.open('GET','includes/', true);
	xhr.send();

	$('span#header').load('includes/_pageElements.html #gdinfo-header');
	$('span#footer').load('includes/_pageElements.html #gdinfo-footer');
}

function itemFooter() {
	var trace = $('body').attr('data-trace');
	var xhr = new XMLHttpRequest();
	xhr.open('GET','../../../includes/', true);
	xhr.send();

	$('span#itemFooter').load('../../../includes/_itemElements.html #itemFooter');
}

if($('body').attr('data-trace')) {
	console.log('data-trace');
	(function() {
		itemFooter();
	})();
}

