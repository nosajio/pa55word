/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   @Project: PA55WORD - A simple password generator bookmarklet 
	 @File: bookmarklet.js
	 @Version: 0.1
   
	 Created by Jason Howmans (jasonhowmans.com) 2011.
	 This software is open source, you can use it and improve it as you wish.
	 Fork this project on GitHub: github.com/jasonhowmans/pa55word
	 ----------------------------------------------------------------------
	 This program is free software: you can redistribute it and/or modify
   it under the terms of the GNU General Public License as published by
   the Free Software Foundation, either version 3 of the License
   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

/* Pull in jQuery & Initiate
   -------------------------------------- */
if (typeof jQuery == 'undefined') {
	var jQ = document.createElement('script');
	jQ.type = 'text/javascript';
	jQ.onload=bookmarklet;
	jQ.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';
	document.body.appendChild(jQ);
} else {
	bookmarklet();
}

/* Everything happens through this function
   -------------------------------------- */
function bookmarklet() {
	var bodywidth = $('body').width();
	var modelwidth = 300;
	$('body').append('<div id="pa55word" style="background: black; display: none; font: 14px monospace; height: auto; padding: 30px 0; position: absolute; right: '+((bodywidth/2)-(modelwidth/2))+'px; top: 0px; width: '+modelwidth+'px; z-index: 9999;"><input id="p55Code" style="background: transparent; border: none; color: white; font-size: 18px; outline: none; padding: 0; text-align: center; width: 100%;" value="Generated Password"></div>');
	$('#pa55word').slideDown(200);
	$('#pa55word input#p55Code').val(generatePassword(8));
	$('#pa55word input#p55Code').focus();
	$('#pa55word input#p55Code').select();
}

/* Password Generate Algorithm
   -------------------------------------- */
function generatePassword(passLength) {
	var p = ''; var ch;
	var charHash = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9','0','_','*','!','@','&','^','$','$'];
	for (var i=0; i<=passLength; i++) {
		ch = Math.floor(Math.random()*charHash.length);
		p += String(charHash[ch]);
	}
	return p;
}

// Finish everything off
var didFinishLoading = true;