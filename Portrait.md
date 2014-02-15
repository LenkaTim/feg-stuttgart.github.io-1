---
layout: Portrait
---

<script type="text/javascript">
requirejs.config({
    "paths": {
      "jquery": "//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.0/jquery.min"
    }
});
    require(['jquery', 'custom'], function(jQuery){
        ajaxload('Portrait', 'Begruessung');
    });
</script>
