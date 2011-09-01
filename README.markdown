#PA55WORD – Password Generator Bookmarklet#

A quick bookmarklet for generating random passwords on the fly. Created for those moments when you need a simple and secure password, but don't want to go hunting around the web for a generator. This baby does it all in one click.

##Demo##
Try it out by dragging this link: <a title="Pa55word" href="javascript:(function(){if(typeof didFinishLoading=='undefined'){document.body.appendChild(document.createElement('script')).src='bookmarklet.min.js';}})();">Pa55word</a> onto your bookmarks bar...

#Extend#
The bookmarklet does most of its work out of an external JS file (called bookmarklet.js) which is loaded in when the bookmarklet is invoked. Because the logic is contained inside an external file, the bookmarklet is open to extension and fixes without any irritation.