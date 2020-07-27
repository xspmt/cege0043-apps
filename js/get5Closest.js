
var currentLat;
var currentLng;
var MarkerPurple = L.AwesomeMarkers.icon({ icon: 'play',markerColor: 'purple'});

function getPosition(position) {
	currentLat = position.coords.latitude;
	currentLng = position.coords.longitude;
	alert("Your position is "+currentLat+", "+currentLng);

	$.ajax({url:"https://developer.cege.ucl.ac.uk:"+ httpsPortNumberAPI + "/get5ClosestQ/"+currentLng+"/"+currentLat+"", crossDomain: true, success: 
		function(result){
		load5ClosestQ(result); 
		}}); //end of the AJAX call 
}

function get5ClosestQuestions() {
	alert('getting location');
	navigator.geolocation.getCurrentPosition(getPosition);

}


var closestQuestionsLayer;

function load5ClosestQ(result){
		
			

			closestQuestionsLayer = L.geoJson(result,{
				pointToLayer: function(feature, latlng){
					
					var htmlString = "<DIV id='popup'"+ feature.properties.id + "><h2>";
					htmlString = htmlString + "<h5>"+feature.properties.question_text + "</h5><br>";
					htmlString = htmlString + "<input type='radio' name='answer' id='"+feature.properties.id+"_1'/>"+feature.properties.answer_1+"<br>";
		            htmlString = htmlString + "<input type='radio' name='answer' id='"+feature.properties.id+"_2'/>"+feature.properties.answer_2+"<br>";
		            htmlString = htmlString + "<input type='radio' name='answer' id='"+feature.properties.id+"_3'/>"+feature.properties.answer_3+"<br>";
		            htmlString = htmlString + "<input type='radio' name='answer' id='"+feature.properties.id+"_4'/>"+feature.properties.answer_4+"<br><br>";

		            htmlString = htmlString + "<button onclick='checkA(" +feature.properties.id + ");return false;'>Submit Answer</button>";
		            htmlString = htmlString + "<div id=answer" + feature.properties.id +" hidden>"+feature.properties.correct_answer+"</div>";

		            htmlString = htmlString + "</div>";

						return L.marker(latlng,{icon:MarkerPurple}).bindPopup(htmlString); 
						
				}
			}).addTo(mymap);


			mymap.fitBounds(closestQuestionsLayer.getBounds());

}//end of the function

function checkA(questionID) {
   // get the answer from the hidden div
   // NB - do this BEFORE you close the pop-up as when you close the pop-up the DIV is destroyed
   var answer = document.getElementById("answer"+questionID).innerHTML;
   // now check the question radio buttons
   var correctAnswer = false;
   var answerSelected = 0;
   for (var i=1; i < 5; i++) {
          if (document.getElementById(questionID+"_"+i).checked){
                 answerSelected = i;
}
          if ((document.getElementById(questionID+"_"+i).checked) && (i ==
answer)) {
alert ("Well done");
correctAnswer = true;
} }
if (correctAnswer === false) {
          // they didn't get it right
          alert("Better luck next time");
}
   // now close the popup
   mymap.closePopup();
   // the code to upload the answer to the server would go here
   // call an AJAX routine using the data
   // the answerSelected variable holds the number of the answer
   //that the user picked
}

function removeClosestQuestionsLayer() {
	alert("5 closest questions will be removed");
	try {
	 	 mymap.removeLayer(closestQuestionsLayer);
	}
	catch(err){
		alert("Cannot find any quesition points!");
	}
	mymap.fitBounds(formLayer.getBounds());
}

