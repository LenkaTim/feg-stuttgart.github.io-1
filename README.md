---
title: README
layout: README
---

## Webseite: [![](https://travis-ci.org/feg-stuttgart/feg-stuttgart.github.io.png?branch=master)](https://travis-ci.org/feg-stuttgart/feg-stuttgart.github.io)

## Javascript: [![](https://codeclimate.com/github/feg-stuttgart/grunt.png)](https://codeclimate.com/github/feg-stuttgart/grunt) [![](https://travis-ci.org/feg-stuttgart/grunt.png?branch=master)](https://travis-ci.org/feg-stuttgart/grunt)

  <p id="server_name">
  </p>
  
<script data-cfbadgetype="c" data-cfbadgeskin="dkgray" type="text/javascript">
//<![CDATA[
try {
    window.CloudFlare || function () {
        var a = window.document,
            b = a.createElement("script"),
            a = a.getElementsByTagName("script")[0];
        window.CloudFlare = [];
        b.type = "text/javascript";
        b.async = !0;
        b.src = "//ajax.cloudflare.com/cdn-cgi/nexp/cloudflare.js";
        a.parentNode.insertBefore(b, a)
    }(), CloudFlare.push(function (a) {
        a(["cloudflare/badge"])
    })
} catch (e$$5) {
    try {
        console.error("CloudFlare badge code could not be loaded. " + e$$5.message)
    } catch (e$$6) {}
};
//]]>
if(document.domain == 'www.feg-stuttgart.tk'){
$('#server_name').html('You´re hitting the Production-Server');
};
if(document.domain == 'beta.feg-stuttgart.tk'){
$('#server_name').html('You´re hitting our Beta-Server');
};
if(document.domain != 'www.feg-stuttgart.tk' & document.domain != 'beta.feg-stuttgart.tk'){
$('#server_name').html('You´re hitting an unknown Server');
}
  </script>
