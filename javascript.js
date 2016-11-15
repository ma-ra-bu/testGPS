var longitude, latitude;


var showPosition = function(position){
  longitude = position.coords.longitude;
  latitude = position.coords.latitude;
  //window.alert(longitude+' - '+latitude);
  td_lot=document.getElementById("longitude");
  td_lat=document.getElementById("latitude");
  td_lot.innerHTML=longitude;
  td_lat.innerHTML=latitude;
};


navigator.geolocation.getCurrentPosition(showPosition);
