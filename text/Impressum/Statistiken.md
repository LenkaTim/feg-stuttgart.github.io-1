---
---

<h3>
  Statistiken (Neue Seite)
</h3>
<div class="row">
  <div class="col-lg-4">
    <h4>
      Uptime
    </h4>
    <img src="//share.pingdom.com/banners/cc86f6d0" alt="Uptime">
    <br>
  </div>
  <div class="col-lg-4">
    <h4>
      Antwortzeiten
    </h4>
    <img src="//share.pingdom.com/banners/f744827a" alt="Antwortzeiten">
    <br>
  </div>
</div>
<br />
<h3>
  Statistiken (Offizielle Seite)
</h3>
<div class="row">
{% for img in site.data.images-Galerie-Vermischtes %}
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
