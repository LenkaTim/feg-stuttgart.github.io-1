---
---

<h3>
  Vermischtes
</h3>
<div id="links">
  <div class="row">
    {% for img in site.data.images-Galerie-Vermischtes-1 %}
    <div class="col-lg-4">
      <a href="{{img.link}}" title="{{img.alt}}" data-gallery>
        <img class="img-thumbnail gallery" src="{{img.src}}" alt='{{img.alt}}'/>
      </a>
      <p>
        {{img.alt}}
      </p>
      <br />
    </div>
    {% endfor %}
  </div>
  <div class="row">
    {% for img in site.data.images-Galerie-Vermischtes-2 %}
    <div class="col-lg-4">
      <a href="{{img.link}}" title="{{img.alt}}" data-gallery>
        <img class="img-thumbnail gallery" src="{{img.src}}" alt='{{img.alt}}'/>
      </a>
      <p>
        {{img.alt}}
      </p>
      <br />
    </div>
    {% endfor %}
  </div>
</div>
{% include footer.html %}
