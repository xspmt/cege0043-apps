function closestFormPoint() {
	// measure the distance to user
	// for the closest point show the pop up of that point 
	var minDistance = 100000000000; 
	var closestFormPoint = 0;

	// for this example, use the latitude/longitude of user's location
	var userlat = userLatitude; 
	var userlng = userLongitude;
	formLayer.eachLayer(function(layer) { 
		var distance = calculateDistance(userlat, 
			userlng,layer.getLatLng().lat, layer.getLatLng().lng, 'K'); 
		if (distance < minDistance){ 
			minDistance = distance;
			closestFormPoint = layer.feature.properties.id; 
		} 
	});


	// a proximity alert, the minDistance must be closer than a given distance 
	// show the popup for the closest point 
	formLayer.eachLayer(function(layer) {
		if (layer.feature.properties.id == closestFormPoint){ 
		layer.openPopup();
		} 
	}); 
}