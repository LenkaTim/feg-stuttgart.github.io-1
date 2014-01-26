---
---

<div class="row">
{% for img in site.data.images-Impressum-Statistiken %}
    <div class="col-lg-4">
      <h4>
        {{img.alt}}
      </h4>
      <a href="{{img.link}}" title="{{img.alt}}" data-gallery>
        <img class="img-thumbnail gallery" src="{{img.src}}" alt='{{img.alt}}'/>
      </a>
    </div>
    {% endfor %}
</div>

{% include footer.html %}
