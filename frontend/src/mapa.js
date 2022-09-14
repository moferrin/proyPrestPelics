let map, infoWindow, coordenadas, marcador;
coordenadas = {
  lat: -34.397,
  lng: 150.644,
};

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: coordenadas,
    zoom: 6,
  });

  marcador = new google.maps.Marker({
    position: coordenadas,
    map: map,
  });

  infoWindow = new google.maps.InfoWindow();

  const trafficLayer = new google.maps.TrafficLayer();
  trafficLayer.setMap(map);

  const locationButton = document.createElement("button");
  locationButton.textContent = "Pan to Current Location";
  locationButton.classList.add("custom-map-control-button");

  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);

  locationButton.addEventListener("click", () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          coordenadas = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          
          infoWindow.setPosition(coordenadas);
          infoWindow.setContent("Tu ubicación");
          infoWindow.open(map);
          
          map.setCenter(coordenadas);

          marcador.setPosition(coordenadas);

        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );

    } else {
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}

window.initMap = initMap;