// Create map
const map = L.map('mapid').setView([-27.216263,-49.6430475], 16);

// Create and add titleLayer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Create icon
const icon = L.icon({
  iconUrl: './public/images/map-marker.svg',
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});


let marker;
// Create and add marker
map.on('click', event => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;
  
  // remove icon 
  marker && map.removeLayer(marker);

  // add icon layer
  marker = L.marker([lat, lng], { icon })
    .addTo(map);
});

