let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat:32.0926146, lng: 34.8927701,},
    zoom: 8,
  });
}

window.initMap = initMap;