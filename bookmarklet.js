if (typeof jQuery == 'undefined') {
	var jQ = document.createElement('script');
	jQ.type = 'text/javascript';
	jQ.onload=runthis;
	jQ.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';
	document.body.appendChild(jQ);
} else {
	bookmarklet();
}

function bookmarklet() {
	if (typeof jQuery == 'undefined') 
	var b = $('body');
	b.append('<div id="pa55word">The Password</div>');
}