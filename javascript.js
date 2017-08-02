var x = document.getElementById("demo");
var btn = document.getElementById("btnStart");
var watchID = null;

function startGPS() {
    if (navigator.geolocation) {
        watchID=navigator.geolocation.watchPosition(showPosition);
        btn.disabled = true;
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
    
function showPosition(position) {
	 var jetzt = new Date();
	 jetzt.setTime(position.timestamp);
    x.innerHTML='Latitude: '          + position.coords.latitude          + '<br>' +
          'Longitude: '         + position.coords.longitude         + '<br>' +
          'Altitude: '          + position.coords.altitude          + '<br>' +
          'Accuracy: '          + position.coords.accuracy          + '<br>' +
          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '<br>' +
          'Heading: '           + position.coords.heading           + '<br>' +
          'Speed: '             + position.coords.speed             + '<br>' +
          'Time: '              + jetzt.toLocaleString('de-DE');
}

function stopGPS() {
	navigator.geolocation.clearWatch(watchID);
	x.innerHTML = "Ende";
	btn.disabled = false;
}