//get the current location
function getLocation(){
	alert('getting location');
	navigator.geolocation.getCurrentPosition(getPosition);
}
//show the current position
function getPosition(position){
	document.getElementById('showLocation').innerHTML="Latitude:"+position.coords.latitude+
	"<br>Longitude: " + position.coords.longitude;
}