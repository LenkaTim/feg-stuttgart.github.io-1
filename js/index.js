function LoadCSS(a) {
    var b = document.getElementsByTagName("link")[0],
        c = document.createElement("link");
    c.rel = "stylesheet", c.type = "text/css", c.href = a, b.parentNode.insertBefore(c, b)
}

function LoadGallery() {
    LoadJS("//cdnjs.cloudflare.com/ajax/libs/blueimp-gallery/2.11.2/js/blueimp-gallery.min.js"), document.getElementById("links").onclick = function (a) {
        a = a || window.event;
        var b = a.target || a.srcElement,
            c = b.src ? b.parentNode : b,
            d = {
                index: c,
                event: a
            }, e = this.getElementsByTagName("a");
        blueimp.Gallery(e, d)
    }
}

function LoadJS(a) {
    var b = document.getElementsByTagName("script")[0],
        c = document.createElement("script");
    c.type = "text/javascript", c.src = a, c.async = "async", b.parentNode.insertBefore(c, b)
}

function ajaxload(a) {
    zurueck = document.URL, history.pushState(null, null, a), loadContent("/text" + a)
}

function countdown(a, b) {
    var c = new Date(b),
        d = new Date,
        c = c.getTime(),
        d = d.getTime(),
        e = c - d;
    ausgabe = e / 864e5, ausgabe_gerundet = Math.floor(ausgabe), document.write("Noch " + ausgabe_gerundet + " Tag(e) bis " + a)
}

function handleContent() {
    4 == xmlHttpObject.readyState && (document.getElementById("content").innerHTML = xmlHttpObject.responseText)
}

function handleSidebarContent() {
    4 == xmlHttpObject.readyState && (document.getElementById("sidebar").innerHTML = xmlHttpObject.responseText)
}

function highlight(a) {
    $("li").removeClass("active");
    var b = document.getElementById(a);
    b.className = "active"
}

function loadContent(a) {
    return xmlHttpObject.open("get", a), xmlHttpObject.onreadystatechange = handleContent, xmlHttpObject.send(null), !1
}

function loadSidebarContent(a) {
    return xmlHttpObject.open("get", a), xmlHttpObject.onreadystatechange = handleSidebarContent, xmlHttpObject.send(null), !1
}

function sidebarload(a) {
    history.pushState(null, null, a), loadSidebarContent("/sidebar" + a + ".html")
}

function unternavigation(a) {
    $("a").removeClass("active");
    var b = document.getElementById(a);
    b.className = "list-group-item active"
}
var xmlHttpObject = !1;
if ("undefined" != typeof XMLHttpRequest && (xmlHttpObject = new XMLHttpRequest), !xmlHttpObject) try {
    xmlHttpObject = new ActiveXObject("Msxml2.XMLHTTP")
} catch (e) {
    try {
        xmlHttpObject = new ActiveXObject("Microsoft.XMLHTTP")
    } catch (e) {
        xmlHttpObject = null
    }
}
$(function () {
    $("a[href*=#]:not([href=#])").click(function () {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {
            var a = $(this.hash);
            if (a = a.length ? a : $("[name=" + this.hash.slice(1) + "]"), a.length) return $("html,body").animate({
                scrollTop: a.offset().top
            }, 1e3), !1
        }
    })
});
