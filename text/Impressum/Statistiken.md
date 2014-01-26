---
---

<div class="row">
  {% for img in site.data.images-Impressum-Statistiken-1 %}
  <div class="col-lg-4">
    <h4>
      {{img.alt}}
    </h4>
    <img class="img-thumbnail" src="{{img.src}}" alt='{{img.alt}}'/>
  </div>
  {% endfor %}
</div>
<div class="row">
  {% for img in site.data.images-Impressum-Statistiken-2 %}
  <div class="col-lg-4">
    <h4>
      {{img.alt}}
    </h4>
    <img class="img-thumbnail" src="{{img.src}}" alt='{{img.alt}}'/>
  </div>
  {% endfor %}
</div>

{% include footer.html %}
