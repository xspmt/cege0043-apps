function startDataUpload() {

	alert("start data upoad");
//store value of question form
var question_title = document.getElementById("question_title").value;
var question_text = document.getElementById("question_text").value;
var answer_1 = document.getElementById("answera").value;
var answer_2= document.getElementById("answerb").value;
var answer_3 = document.getElementById("answerc").value;
var answer_4 = document.getElementById("answerd").value;
var correct_answer = document.getElementById("correct").value;

// alert(question + " "+ correctAnswer);

var postString = "question_title="+question_title +
				 "&question_text="+question_text +
				 "&answer_1="+answer_1 +
				 "&answer_2="+answer_2 +
				 "&answer_3="+answer_3 +
				 "&answer_4="+answer_4 +
				 "&correct_answer="+correct_answer;

var latitude = document.getElementById("latitude").value;
var longitude = document.getElementById("longitude").value;
postString = postString + "&latitude=" + latitude + "&longitude=" + longitude;


// add the port id
postString = postString +"&port_id="+httpsPortNumberAPI;

alert(postString);

//make sure the question form are filled and choose the correct answer
if ((question_title!='' &&question_text!='' && answer_1!='' && answer_2!='' && answer_3!='' && answer_4!='')&&
  (correct_answer=='1' || correct_answer=='2' || correct_answer=='3' || correct_answer=='4'))
  {processData(postString);}

else
  {alert("Error: Please fill in all the required fields and choose the correct answer");}
}
// end of the startDataUpload function


function processData(postString) {
	var serviceUrl= "https://developer.cege.ucl.ac.uk:"+ httpsPortNumberAPI+"/insertQuestion"
   $.ajax({
    url: serviceUrl,
    crossDomain: true,
    type: "POST",
    success: function(data){console.log(data); dataUploaded(data);},
    data: postString
}); 
}

// create the code to process the response from the data server
function dataUploaded(data) {
 
    document.getElementById("dataUploadResult").innerHTML = JSON.stringify(data);
}


// function deleteRecord() {
// 	var deleteID = document.getElementById("deleteID").value;
// 	var deleteString = "id="+deleteID + "&port_id="+httpsPortNumberAPI;
// 	var serviceUrl= "https://developer.cege.ucl.ac.uk:"+ httpsPortNumberAPI+"/deleteFormData";
// 	$.ajax({
// 	    url: serviceUrl,
// 	    crossDomain: true,
// 	    type: "POST",
// 	    success: function(data){console.log(data); dataDeleted(data);},
// 	    data: deleteString
// });	
// }

// function dataDeleted(data){
//     document.getElementById("dataDeleteResult").innerHTML = JSON.stringify(data);
// }

//upload answers
function processAnswerData(postString) {
	// client =new XMLHttpRequest();
	var serviceUrl= "https://developer.cege.ucl.ac.uk:"+httpsPortNumberAPI+"/insertAnswer";
	$.ajax({
		url: serviceUrl,
		crossDomain: true,
		type: "POST",
		success: function(data){console.log(data); }, 
		data: postString
	});
}

// function deleteAnswers() {
// 	var deleteA = document.getElementById("deleteAnswer").value;
// 	var deleteString = "id="+deleteA + "&port_id="+httpsPortNumberAPI; 
// 	var serviceUrl= "https://developer.cege.ucl.ac.uk:"+httpsPortNumberAPI+"/deleteAnswerData";
// $.ajax({
// url: serviceUrl,
// crossDomain: true,
// type: "POST",
// success: function(data){console.log(data); dataDeleted(data);}, 
// data: deleteString
// });
// }
