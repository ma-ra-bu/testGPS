var x = document.getElementById("demo");
var btn = document.getElementById("btnStart");
var watchID = null;
var distanz = 0;
var save_coords = null;
var startZeit = 0;
var jetzt = 0;

function startGPS() {
    if (navigator.geolocation) {
        watchID=navigator.geolocation.watchPosition(showPosition);
        btn.disabled = true;
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
    startZeit = new Date();
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

  return (12742 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)))/0.62137;
}
    
function showPosition(position) {
	 jetzt = new Date();
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
          'Datum: '             + jetzt.toLocaleString('de-DE')     + '<br>' +
          'Zeit: '              + millisecondsToTime(jetzt-startZeit)+ '<br>' +
          'Diszanz (km): '      + distanz;
}



function millisecondsToTime(milli)
{
      var seconds = Math.floor((milli / 1000) % 60);
      var minutes = Math.floor((milli / (60 * 1000)) % 60);

      return minutes + ":" + seconds;
}



function stopGPS() {
	navigator.geolocation.clearWatch(watchID);
	x.innerHTML = "Distanz (km): "+distanz+"<br>Zeit (min:sec): "+millisecondsToTime(jetzt-startZeit)+
	"<br> Duchschnittsgeschwindigkeit (km/h): "+Math.floor(distanz/(jetzt-startZeit)/3600000);
	btn.disabled = false;
}