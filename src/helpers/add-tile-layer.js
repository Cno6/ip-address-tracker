import L from 'leaflet'

export function addTileLayer(map) {
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoid2VhcmVjbm82IiwiYSI6ImNreHluOWM5ZDJnZ3UycG8wYTMwdWIwdG4ifQ.A9Hul-EUbNpgZm5VD6k20Q', {
    attribution: 'Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by <a href="#">Vadim Igumnov (@wearecno6)</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
}).addTo(map);
}