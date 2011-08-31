// Pull in jQuery
if (typeof jQuery == 'undefined') {
	var jQ = document.createElement('script');
	jQ.type = 'text/javascript';
	jQ.onload=bookmarklet;
	jQ.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';
	document.body.appendChild(jQ);
} else {
	bookmarklet();
}

// Everything happens through this function
function bookmarklet() {
	$('body').append('<div id="pa55word" style="background: #444; display: none; height: 100px; position: absolute; right: 50%; top: 0px; width: 200px; z-index: 9999;"><h3 style="color: white; text-align: center;">Generated Password</h3><span id="code"></span></div>');
	$('#pa55word').slideDown();
}

// Stop the script repeating
var done = true;