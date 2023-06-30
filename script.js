var map = L.map('mapP');

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(map);

L.Control.geocoder().addTo(map);
var marker = null;
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(function(posição) {
  var lat = posição.coords.latitude;
  var lon = posição.coords.longitude;

  map.setView([lat, lon], 13);
  
  L.marker([lat, lon]).addTo(map)
      .bindPopup('Localização atual')
      .openPopup();
  });
} 
map.on('click', function(e) {
    var lat = e.latlng.lat;
    var lon = e.latlng.lng;
  
    map.setView([lat, lon], 13);
    pop([lat, lon])
  });
  function pop([lat, lon]) {
    if (marker) {
      map.removeLayer(marker);
    }
    marker = L.marker([lat, lon]).addTo(map)
    /* .bindPopup(lat+","+lon)
    .openPopup(); */
  }
  const BotaoAI = document.getElementById("AI");
  const ts = document.getElementById("test");
  const mp = document.getElementById("mapP");
  BotaoAI.addEventListener("click", () => {
      openAI();
    });
   function openAI() {
     ts.classList.toggle("open");
     mp.classList.toggle("close")
     BotaoAI.classList.toggle("close")
   }
   function test(){
    lat = Nprob.latitude
    lon = Nprob.longitude
    var txt = Nprob.Texto
    var niP = Nprob.Danger
    var tper = Nprob.Tipo
    var tpr = "indefinido";
    switch(tper){
      case "Bio":
        tpr="Biologico"
          break;
      case "Amb":
        tpr="Ambiental"
          break;
      case "AcTr":
        tpr="Acidente de transito"
          break;
      case "Clim":
        tpr="Climatico"
          break;
      default:
        tpr = "indefinido";
        break;
      }
    L.marker([lat, lon]).addTo(map)
      .bindPopup(`Problema: ${txt}|||||NIvel de perigo: ${niP}|||||Tipo de perigo: ${tpr}`)
      .openPopup();
   }