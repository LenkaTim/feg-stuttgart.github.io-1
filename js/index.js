function LoadCSS(a){var b=document.getElementsByTagName("link")[0],c=document.createElement("link");c.rel="stylesheet",c.type="text/css",c.href=a,b.parentNode.insertBefore(c,b)}function LoadGallery(){LoadJS("//cdnjs.cloudflare.com/ajax/libs/blueimp-gallery/2.11.2/js/blueimp-gallery.min.js"),document.getElementById("links").onclick=function(a){a=a||window.event;var b=a.target||a.srcElement,c=b.src?b.parentNode:b,d={index:c,event:a},e=this.getElementsByTagName("a");blueimp.Gallery(e,d)}}function LoadJS(a){var b=document.getElementsByTagName("script")[0],c=document.createElement("script");c.type="text/javascript",c.src=a,c.async="async",b.parentNode.insertBefore(c,b)}function ajaxload(a,b,c){unternavigation(b),zurueck=document.URL,url="/"+a+"/"+b+"/",history.pushState(null,null,url),load="/text/"+url,$("#content").load(load,function(){"1"==c&&LoadGallery()})}function ajaxnavigation(a){return highlight("Navigation_"+a),url="/"+a+"/",history.pushState(null,null,url),load="/static/sidebar/"+a+".html",$("#sidebar").load(load),0}function countdown(a,b){var c=new Date(b),d=new Date,c=c.getTime(),d=d.getTime(),e=c-d;ausgabe=e/864e5,ausgabe_gerundet=Math.floor(ausgabe),document.write("Noch "+ausgabe_gerundet+" Tag(e) bis "+a)}function highlight(a){$("li").removeClass("active");var b=document.getElementById(a);b.className="active"}function unternavigation(a){$("a").removeClass("active");var b=document.getElementById(a);b.className="list-group-item active"}$(function(){$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")||location.hostname==this.hostname){var a=$(this.hash);if(a=a.length?a:$("[name="+this.hash.slice(1)+"]"),a.length)return $("html,body").animate({scrollTop:a.offset().top},1e3),!1}})});
