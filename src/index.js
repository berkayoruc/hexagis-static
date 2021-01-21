import { bro } from "./bro";
import "./styles/main.scss";
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
