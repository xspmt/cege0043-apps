var mymap;
var userLatitude;
var userLongitude;
var trackLocationLayer = [];
var geoLocationID;


function trackLocation() {

	if (navigator.geolocation) {
		geoLocationID = navigator.geolocation.watchPosition(showPosition);} 
	else {
		document.getElementById('showLocation').innerHTML = "Geolocation is not supported by this browser."; 
	}


}

function showPosition(position) {

	// add the new point into the array
	// the 'push' command just creates another pigeonhole in an array which 
	// will then contain the new marker point 

	trackLocationLayer.push(L.marker([position.coords.latitude,position.coords.longitude]).addTo(mymap));
	console.log(trackLocationLayer);

	//define lat and lng
	userLatitude = position.coords.latitude;
	userLongitude = position.coords.longitude;



	//remove the old point before creating a new one
	removeLocationLayers();
	closestFormPoint();
}


function removeLocationLayers() {

	trackLocationLayer.reverse();


	// now loop through the array and remove any points

	for (var i=trackLocationLayer.length-1; i > 0;i--) {

	console.log("removing point "+i + " which has coordinates "+trackLocationLayer[i].getLatLng());

	mymap.removeLayer(trackLocationLayer[i]);
}
}