var x = document.getElementById("demo");
var btn = document.getElementById("btnStart");
var watchID = null;
var distanz = 0;
var save_coords = null;

function startGPS() {
    if (navigator.geolocation) {
        watchID=navigator.geolocation.watchPosition(showPosition);
        btn.disabled = true;
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function haversine_distance(coords1, coords2) {

     function toRad(x) {
         return x * Math.PI / 180;
    }

  var dLat = toRad(coords2.latitude - coords1.latitude);
  var dLon = toRad(coords2.longitude - coords1.longitude)

  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(toRad(coords1.latitude)) * 
          Math.cos(toRad(coords2.latitude)) *
          Math.sin(dLon / 2) * Math.sin(dLon / 2);

  return 12742 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}
    
function showPosition(position) {
	 var jetzt = new Date();
	 jetzt.setTime(position.timestamp);
	 if (save_coords != null){
	 	distanz = distanz + haversine_distance(save_coords,position.coords);
	 }
	 save_coords = position.coords;
    x.innerHTML='Latitude: '    + position.coords.latitude          + '<br>' +
          'Longitude: '         + position.coords.longitude         + '<br>' +
          'Altitude: '          + position.coords.altitude          + '<br>' +
          'Accuracy: '          + position.coords.accuracy          + '<br>' +
          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '<br>' +
          'Heading: '           + position.coords.heading           + '<br>' +
          'Speed: '             + position.coords.speed             + '<br>' +
          'Time: '              + jetzt.toLocaleString('de-DE')     + '<br>' +
          'Diszanz: '            + distanz;
}

function stopGPS() {
	navigator.geolocation.clearWatch(watchID);
	x.innerHTML = "Distanz: "+distanz;
	btn.disabled = false;
}