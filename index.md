---
layout: Startseite
---

<div class="jumbotron">
  <h1>
    Willkomen am FEG!
  </h1>
  <p class="lead">
    Willkommen auf dem Internetportal des Friedrich-Eugens-Gymnasiums in Stuttgart
  </p>
  <p>
    <a class="btn btn-lg btn-success" role="button" id="countdown_button">
      <script type="text/javascript">
        countdown("zu des Faschingsferien", "February 28, 2014 23:59:59 GMT+1");
      </script>
    </a>
    <div class="progress">
      <div id="countdown_bar" class="progress-bar progress-bar-info" role="progressbar">
      </div>
  </div>
  <script type="text/javascript">
    var countdown_bar = document.getElementById("countdown_bar");
    var countdown_button = document.getElementById("countdown_button");
    var dauer = "53";
    var width = (dauer - ausgabe) * ("100" / dauer);
    countdown_bar.style.width =  width + "%";
    if (width >= "50"){
      countdown_bar.className = "progress-bar progress-bar-warning";
      countdown_button.className = "btn btn-lg btn-warning";
    }
    if (width >= "80"){
      countdown_bar.className = "progress-bar progress-bar-danger";
      countdown_button.className = "btn btn-lg btn-danger";
    }
  </script>
</p>
</div>

<div class="row">
  <div class="col-lg-4">
    <h2>
      Aktuelle Termine
    </h2>
    <p>
      Das FEG wünscht Ihnen eine gesegnete Weihnachtszeit und einen Guten Rutsch ins neue Jahr 2014!
    </p>
  </div>
  <div class="col-lg-4">
    <h2>
      Kalender
    </h2>
    <p>
      Hier finden Sie den Terminkalender des Schuljahres:
    </p>
    <br/>
    <p>
      <a class="btn btn-primary" role="button">
        <i class="fa fa-external-link">
        </i>
        Termine
      </a>
    </p>
  </div>
  <div class="col-lg-4">
    <h2>
      Mint
    </h2>
    <p>
      Neues zum Netzwerk “Mathematik – Informatik – Naturwissenschaft – Technik” am FEG
    </p>
    <p>
      <a class="btn btn-primary" role="button">
        <i class="fa fa-external-link">
        </i>
        MINT
      </a>
    </p>
  </div>
  <div class="col-lg-4">
    <h2>
      Beratungslehrer
    </h2>
    <p>
      Seit diesem Schuljahr hat das FEG einen Beratungslehrer
    </p>
    <p>
      <a class="btn btn-primary" role="button">
        <i class="fa fa-external-link">
        </i>
        Beratungslehrer
      </a>
    </p>
  </div>
  <div class="col-lg-4">
    <h2>
      Speisepläne
    </h2>
    <p>
      Die Speisepläne für die Zeit bis Weihnachten sind online
    </p>
    <br/>
    <p>
      <a class="btn btn-primary" role="button">
        <i class="fa fa-external-link">
        </i>
        Speisepläne
      </a>
    </p>
  </div>
  <div class="col-lg-4">
    <h2>
      Vertretungspläne
    </h2>
    <p>
      Die aktuellen Vertretungspläne
    </p>
    <br/>
    <p>
      <a class="btn btn-primary" role="button">
        <i class="fa fa-external-link">
        </i>
        Vertretungspläne
      </a>
    </p>
  </div>
</div>
<div>
  <div>
    <div>
      <div>
