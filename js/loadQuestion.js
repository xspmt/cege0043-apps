var formLayer //question layer
var lastWeekLayer//last week questions layer
var MarkerRed = L.AwesomeMarkers.icon({ icon: 'play',markerColor: 'red'}); //question ponints
var MarkerBlue = L.AwesomeMarkers.icon({ icon: 'play',markerColor: 'blue'});//last week questions
var MarkerGreen = L.AwesomeMarkers.icon({ icon: 'play',markerColor: 'green'}); //correct answers
var MarkerGrey = L.AwesomeMarkers.icon({ icon: 'play',markerColor: 'grey'}); //wrong answers


function getQuestion() {
	$.ajax({url:"https://developer.cege.ucl.ac.uk:"+ httpsPortNumberAPI +
"/getGeoJSON/"+httpsPortNumberAPI,
       crossDomain: true,async : false,
		success: function(result){
            console.log(result);// check that the data is correct
            loadQuestion(result);
    }}); //end of the AJAX call
} 

//load question data and check answer
function loadQuestion(formData){
	// var fromJSON=JSON.parse(formData)	
	formLayer = L.geoJson(formData,{
		pointToLayer: function(feature, latlng){
			var htmlString = "<DIV id='popup'"+ feature.properties.id + "><h2>";
			htmlString = htmlString + "<h5>"+feature.properties.question_text + "</h5><br>";
			htmlString = htmlString + "<input type='radio' name='answer' id='"+feature.properties.id+"_1'/>"+feature.properties.answer_1+"<br>";
		    htmlString = htmlString + "<input type='radio' name='answer' id='"+feature.properties.id+"_2'/>"+feature.properties.answer_2+"<br>";
		    htmlString = htmlString + "<input type='radio' name='answer' id='"+feature.properties.id+"_3'/>"+feature.properties.answer_3+"<br>";
		    htmlString = htmlString + "<input type='radio' name='answer' id='"+feature.properties.id+"_4'/>"+feature.properties.answer_4+"<br><br>";

		    htmlString = htmlString + "<button onclick='checkAnswer(" +feature.properties.id + ");return false;'>Submit Answer</button>";
		    htmlString = htmlString + "<div id=answer" + feature.properties.id +" hidden>"+feature.properties.correct_answer+"</div>";

		    htmlString = htmlString + "</div>";


			return L.marker(latlng,{icon:MarkerRed}).bindPopup(htmlString);
											
		}
	}).addTo(mymap);
	//make view zoom in the question layer
	mymap.fitBounds(formLayer.getBounds());

		
}//end of function


function removeQuestion(){
    alert("remove the Question here");
    mymap.removeLayer(formLayer);
}


//function to track location calculate distance anf load quiz
function loadQuiz(){
	getQuestion();
	trackLocation();

}

//send back to compare answers 
function checkAnswer(questionID){

	var answer = document.getElementById("answer"+questionID).innerHTML;
	var correctAnswer = false;
    var answerSelected = 0;
    for (var i=1; i < 5; i++) {

        if (document.getElementById(questionID+"_"+i).checked){
            answerSelected = i;
		}

        if ((document.getElementById(questionID+"_"+i).checked) && (i ==answer)) {
			alert ("Well done");
			correctAnswer = true;
			formLayer.eachLayer(function(layer) {
       			if (layer.feature.properties.id == questionID){
					layer.setIcon(MarkerGreen);
					layer.addTo(mymap);
				} 
			});
		} 
	}
		if (correctAnswer === false) {
		alert("Better luck next time");
			formLayer.eachLayer(function(layer) {
		        if (layer.feature.properties.id == questionID){
		             layer.setIcon(MarkerGrey);
		             layer.addTo(mymap);
		        } });
			}

   mymap.closePopup();


  
   var postString = "port_id="+httpsPortNumberAPI +"&question_id="+questionID
				+"&answer_selected="+answerSelected+"&correct_answer="+answer;
	// user's lat and lng obtained from trackLocation
	postString = postString +"&latitude=" + userLatitude+ "&longitude=" + userLongitude;
	alert(postString)
	processAnswerData(postString);

// 	//user is told how many questions they have answered correctly when they answer a question
	correctNum()
}


// last week question
function getLastWeek() {
	$.ajax({url:"https://developer.cege.ucl.ac.uk:"+httpsPortNumberAPI+"/getLastQuestion/",
       crossDomain: true,async : false,
	success: function(result){
            console.log(result);// check that the data is correct
            loadLastWeek(result);
    }}); //end of the AJAX call
} // end of the getFormData function

function loadLastWeek(result){
		

			lastWeekLayer = L.geoJson(result,{
				pointToLayer: function(feature, latlng){
					
					var htmlString = "<DIV id='popup'"+ feature.properties.id + "><h2>";
					htmlString = htmlString + "<h5>"+feature.properties.question_text + "</h5><br>";
					htmlString = htmlString + "<input type='radio' name='answer' id='"+feature.properties.id+"_1'/>"+feature.properties.answer_1+"<br>";
		            htmlString = htmlString + "<input type='radio' name='answer' id='"+feature.properties.id+"_2'/>"+feature.properties.answer_2+"<br>";
		            htmlString = htmlString + "<input type='radio' name='answer' id='"+feature.properties.id+"_3'/>"+feature.properties.answer_3+"<br>";
		            htmlString = htmlString + "<input type='radio' name='answer' id='"+feature.properties.id+"_4'/>"+feature.properties.answer_4+"<br><br>";

		            htmlString = htmlString + "<button onclick='checkLastWeekAnswer(" +feature.properties.id + ");return false;'>Submit Answer</button>";
		            htmlString = htmlString + "<div id=answer" + feature.properties.id +" hidden>"+feature.properties.correct_answer+"</div>";

		            htmlString = htmlString + "</div>";

						return L.marker(latlng,{icon:MarkerBlue}).bindPopup(htmlString); 
						
				}
			}).addTo(mymap);


			mymap.fitBounds(lastWeekLayer.getBounds());

}//end of the function

function checkLastWeekAnswer(questionID){
	var answer = document.getElementById("answer"+questionID).innerHTML;
	var correctAnswer = false;
    var answerSelected = 0;
    for (var i=1; i < 5; i++) {

        if (document.getElementById(questionID+"_"+i).checked){
            answerSelected = i;
		}

        if ((document.getElementById(questionID+"_"+i).checked) && (i ==answer)) {
			alert ("Well done");
			correctAnswer = true;
			lastWeekLayer.eachLayer(function(layer) {
       			if (layer.feature.properties.id == questionID){
					layer.setIcon(MarkerGreen);
					layer.addTo(mymap);
				} 
			});
		} 
	}
		if (correctAnswer === false) {
		alert("Better luck next time");
			lastWeekLayer.eachLayer(function(layer) {
		        if (layer.feature.properties.id == questionID){
		             layer.setIcon(MarkerGrey);
		             layer.addTo(mymap);
		        } });
			}
   // now close the popup
   mymap.closePopup();

}

function removeLastWeekLayer(){
    alert("remove Last Week Question here");
    mymap.removeLayer(lastWeekLayer);
    mymap.fitBounds(questionLayer.getBounds());
}
