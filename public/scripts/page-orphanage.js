const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false
}

// Create map
const map = L.map('mapid', options).setView([-27.216263,-49.6430475], 16);

// Create and add titleLayer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Create icon
const icon = L.icon({
  iconUrl: './public/images/map-marker.svg',
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
});



// Create and add marker
L.marker([-27.216263,-49.6430475], { icon })
  .addTo(map)


/* Image gallery */
function selectImage(event) {
  const button = event.currentTarget;

  const buttons = document.querySelectorAll('.images button');
  buttons.forEach( button => button.classList.remove('active'));

  const image = button.children[0];
  const imageContainer = document.querySelector('.orphange-details > img');

  imageContainer.src = image.src;




  button.classList.add('active');
}