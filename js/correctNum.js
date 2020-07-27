var correctLayer; //a layer to store correct answers

//to load the number of  correct answers and show it.
function correctNum() {
$.ajax({url:"https://developer.cege.ucl.ac.uk:"+ httpsPortNumberAPI +
"/getCorrectAnswerNum/"+httpsPortNumberAPI,
       crossDomain: true,async : false,success: function(result){
            console.log(result);

        correctLayer = result[0].array_to_json[0].num_questions;

        alert("You have answered "+correctLayer+" questions correctly")

    } 
    }); //end of the AJAX call
}