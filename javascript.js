var longitude, latitude;


var showPosition = function(position){
  longitude = postion.coords.longitude;
  latitude = position.coords.latitude;
  document.querySelector('#longitude td').innerHTML(longitude);
  document.querySelector('#latitude td').innerHTML(latitude);
};


navigator.geolocation.getCurrentPosition(showPosition);