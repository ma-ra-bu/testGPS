var longitude, latitude;

var getError = function(error){
   alert(error.message);
};

var showPosition = function(position){
  longitude = position.coords.longitude;
  latitude = position.coords.latitude;
  //window.alert(longitude+' - '+latitude);
  td_lot=document.getElementById("longitude");
  td_lat=document.getElementById("latitude");
  td_lot.innerHTML=longitude;
  td_lat.innerHTML=latitude;
};


navigator.geolocation.getCurrentPosition(showPosition, getError,{enableHighAccuracy: true,timeout : 5000});
