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
	$('body').append('<div id="pa55word">The Password</div>');
}

// Stop the script repeating
var done = true;