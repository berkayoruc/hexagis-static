import { bro } from "./bro";
import "./styles/main.scss";
// import '@geoman-io/leaflet-geoman-free';
// import '@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css';
// import { L } from 'leaflet'

console.log(bro("lalal"));
var map = L.map("mapid").setView([41, 29], 12);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);
L.marker([41, 29])
  .addTo(map)
  .bindPopup("Alihan kardeşim, taş devri teknolojileri<br>ve webpack kullanarak tekrar başladım")
  .openPopup();
map.pm.addControls({
  position: 'topleft',
  drawCircle: false,
});  
// let denemebutton = document.createElement('button');
// denemebutton.innerHTML = "start"
// denemebutton.onclick = function(){
//   map.pm.enableDraw('Polygon', {  
//     snappable: true,  
//     snapDistance: 20,  
//   }); 
// }
// document.body.appendChild(denemebutton)
