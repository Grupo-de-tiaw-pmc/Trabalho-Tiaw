var map2 = L.map('map');
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(map2);

    L.Control.geocoder().addTo(map2);
var select   = document.getElementById("nivPer");
var variavel = '';
select.onchange = function selectColor(){
    variavel = this.value;
    switch(variavel){
    case "Baixo":
        document.getElementsByClassName("color")[0].style.backgroundColor = 'greenyellow'
        document.getElementsByClassName("color")[0].style.color = 'black'
        break;
    case "Medio":
        document.getElementsByClassName("color")[0].style.backgroundColor = 'yellow'
        document.getElementsByClassName("color")[0].style.color = 'black'
        break;
    case "Alto":
        document.getElementsByClassName("color")[0].style.backgroundColor = 'red'
        document.getElementsByClassName("color")[0].style.color = 'white'
        break;
    case "Urgente":
        document.getElementsByClassName("color")[0].style.backgroundColor = 'black'
        document.getElementsByClassName("color")[0].style.color = 'white'
        break;
    }
    return variavel
}
var select2   = document.getElementById("TypePer");
var variavel2 = '';
select2.onchange = function selectColor2(){
    variavel2 = this.value;
    switch(variavel2){
    case "Bio":
        document.getElementsByClassName("color2")[0].style.backgroundColor = 'purple'
        document.getElementsByClassName("color2")[0].style.color = 'yellow'
        break;
    case "Amb":
        document.getElementsByClassName("color2")[0].style.backgroundColor = 'green'
        document.getElementsByClassName("color2")[0].style.color = 'whitesmoke'
        break;
    case "AcTr":
        document.getElementsByClassName("color2")[0].style.backgroundColor = 'rgb(189, 189, 0)'
        document.getElementsByClassName("color2")[0].style.color = 'rgb(47, 47, 51)'
        break;
    case "Clim":
        document.getElementsByClassName("color2")[0].style.backgroundColor = 'rgb(80, 198, 99)'
        document.getElementsByClassName("color2")[0].style.color = 'black'
        break;
    }
    return variavel2
}



const BotaoSub = document.getElementById("BotaoSub");
const BotaoSelec = document.getElementById("BotaoSelec");
const mapa = document.getElementById("mapa");
BotaoSub.addEventListener("click", () => {
    openMapa();
  });
BotaoSelec.addEventListener("click", () => {
    openMapa();
  });
 function openMapa() {
   var lat = parseFloat(info.innerHTML.split(',')[0]);
   var lon = parseFloat(info.innerHTML.split(',')[1]);
 
   sel(lat, lon);
   mapa.classList.toggle("open");
 }

var info = document.getElementById('info');
var marker2 = null;

 if ("geolocation" in navigator) {
   navigator.geolocation.getCurrentPosition(function (posição) {
     var lat = posição.coords.latitude;
     var lon = posição.coords.longitude;
 
     map2.setView([lat, lon], 13);
     pop2([lat, lon]);
   });
 }

map2.on('click', function(e) {
  var lat = e.latlng.lat;
  var lon = e.latlng.lng;
  map2.setView([lat, lon], 13);
  pop2([lat, lon])
});

function pop2([lat, lon]) {
  
  if (marker2) {
    map2.removeLayer(marker2);
  }
  marker2 = L.marker([lat, lon]).addTo(map2);
  info.innerHTML = lat + ', ' + lon;
}
var Nprob = {
  "Texto": "indefinido",
  "latitude": 0,
  "longitude": 0,
  "Danger": "indefinido",
  "Tipo": ""
};
  function sel(lat, lon) {
   var problemText = document.getElementById('problText').value;
   Nprob = {
    "Texto": problemText,
    "latitude": lat,
    "longitude": lon,
    "Danger": variavel,
    "Tipo": variavel2
  };
 }
