// load the map 
var mymap; //global variable to store the map

//create some custom marker as a global variable
var newMarker=null;

var popup=L.popup();
//red marker for question added
var MarkerRed =L.AwesomeMarkers.icon({
					icon:'play',
					markerColor:'red'
				});
//pink marker for setting question
var MarkerPink = L.AwesomeMarkers.icon({
					icon:'play',
					markerColor:'pink'
				});


function onMapClick(e){

	if(newMarker!=null)
		newMarker.remove();



	newMarker=L.marker(e.latlng,{icon:MarkerPink,draggable:true});
	newMarker.addTo(mymap);


	document.getElementById('latitude').value = e.latlng.lat;
	document.getElementById('longitude').value = e.latlng.lng;
}

function loadLeafletMap(){
	
	mymap = L.map('mapid').setView([51.505, -0.09], 13);
		
	// load the tiles 
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18, 
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>contributors, ' + 
		'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,' + 'Imagery © <a href="http://mapbox.com">Mapbox</a>', 
		id: 'mapbox.streets'
		}).addTo(mymap);


	//now add the click event decetor to the map
	mymap.on('click',onMapClick)
	

}//end code to add the leaflet map


