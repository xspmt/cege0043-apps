function getLast5Q() {
$.ajax({url:"https://developer.cege.ucl.ac.uk:"+ httpsPortNumberAPI +"/getLast5Q/"+httpsPortNumberAPI,
       crossDomain: true,async : false,
success: function(result){
            console.log(result);// check that the data is correct
            loadLast5Q(result);
    }}); //end of the AJAX call
} // end of the function

var last5QLayer;
var MarkerGreen = L.AwesomeMarkers.icon({icon: 'play',markerColor: 'green'});//correct answered
var MarkerOrange = L.AwesomeMarkers.icon({icon: 'play',markerColor: 'orange'});//wrong answeres

function loadLast5Q(result){	

			

			last5QLayer = L.geoJson(result,{
				pointToLayer: function(feature, latlng){

					var htmlString = "<DIV id='popup'"+ feature.properties.id + "><h2>";
					htmlString = htmlString + "<h5>"+feature.properties.question_text + "</h5><br>";
					htmlString = htmlString + "<input type='radio' name='answer' id='"+feature.properties.id+"_1'/>"+feature.properties.answer_1+"<br>";
		            htmlString = htmlString + "<input type='radio' name='answer' id='"+feature.properties.id+"_2'/>"+feature.properties.answer_2+"<br>";
		            htmlString = htmlString + "<input type='radio' name='answer' id='"+feature.properties.id+"_3'/>"+feature.properties.answer_3+"<br>";
		            htmlString = htmlString + "<input type='radio' name='answer' id='"+feature.properties.id+"_4'/>"+feature.properties.answer_4+"<br><br>";

		            htmlString = htmlString + "<h5> Result: "+feature.properties.answer_correct + "</h5><br>";
		            htmlString = htmlString + "</div>";

		            if(feature.properties.answer_correct == true){
		            	return L.marker(latlng,{icon:MarkerGreen}).bindPopup(htmlString);
		            }
					if(feature.properties.answer_correct == false){
		            	return L.marker(latlng,{icon:MarkerOrange}).bindPopup(htmlString);
		            }
											
				}
			}).addTo(mymap);

		
}//end of function

function removeLastAnswered() {
		alert("Last 5 answered questions will be removed");
		try {
			mymap.removeLayer( last5QLayerLayer );
		}
		catch(err){
			alert("Cannot find any question points!");
		}
	}