---
---

### Kollegium

Im Schuljahr 2013/2014 unterrichten rund 50 Lehrerinnen und Lehrer am Friedrich-Eugens-Gymnasium.

{% for img in site.data.images-Portrait-Kollegium %}
  <img class="img-thumbnail gallery" src="{{img.src}}" alt='({{img.alt}})'/>
{% endfor %}
<br />
{{ img.alt }}

{% include footer.html %}
