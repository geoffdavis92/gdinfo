// ajax.js

var xhr = new XMLHttpRequest();
xhr.open('GET','includes/', true);
xhr.send();

$('span#header').load('includes/_pageElements.html #gdinfo-header');
$('span#footer').load('includes/_pageElements.html #gdinfo-footer');