var longitude, latitude;


var showPosition = function(position){
  longitude = position.coords.longitude;
  latitude = position.coords.latitude;
  window.alert(longitude+' - '+latitude);
  document.querySelector('#longitude td').innerHTML(longitude);
  document.querySelector('#latitude td').innerHTML(latitude);
};


navigator.geolocation.getCurrentPosition(showPosition);
