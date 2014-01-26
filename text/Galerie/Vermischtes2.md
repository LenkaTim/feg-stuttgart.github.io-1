---
layout: Angular
---
<h3>
  Vermischtes
</h3>
<div id="links">
  <div class="row">
    <div class="col-lg-4" ng-repeat="img in images">
      <a href="{(img.link)}" title="{(img.alt)}" data-gallery>
        <img class="img-thumbnail gallery" src="{(img.src)}" alt='{(img.alt)}'/>
      </a>
      <p>
        {{img.alt}}
      </p>
      <br/>
    </div>
  </div>
</div>
