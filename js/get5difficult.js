var most5difficult;

function get5Difficult(position){
	$.ajax({url:"https://developer.cege.ucl.ac.uk:"+ httpsPortNumberAPI + "/get5DifficultQ/",
		crossDomain: true,async : false,success: function(result){
		console.log(result); 
		var features;
          features = result[0].array_to_json;

          // generate a string for the table
          var tableHTML = "<table class=table>";
          tableHTML += "<thead class='thead-dark'>";

          tableHTML += "<tr><th scope='col'>Question Title</th><th scope='col'>Question Text</th><th scope='col'>Answer 1</th><th scope='col'>Answer 2</th><th scope='col'>Answer 3</th><th scope='col'>Answer 4</th></tr></b>";

          for (i=0;i< features.length;i++) {
            // add a new row
            tableHTML += "<tr>";

            // add a new column 
            tableHTML +="<td>";
            // add the table name
            tableHTML +=features[i].question_title;
            // close the column
            tableHTML +="</td>";


            // add a new column 
            tableHTML +="<td>";
            // add the feature type
            tableHTML +=features[i].question_text;
            // close the column
            tableHTML +="</td>";

            // add a new column 
            tableHTML +="<td>";  
            tableHTML +=features[i].answer_1;
            // close the column
            tableHTML +="</td>";
            
            // add a new column 
            tableHTML +="<td>";  
            tableHTML +=features[i].answer_2;
            // close the column
            tableHTML +="</td>";

            // add a new column 
            tableHTML +="<td>";  
            tableHTML +=features[i].answer_3;
            // close the column
            tableHTML +="</td>";

            // add a new column 
            tableHTML +="<td>";  
            tableHTML +=features[i].answer_4;
            // close the column
            tableHTML +="</td>";

            //close the row
            tableHTML +="</tr>";

          } // end of the for loop

          // close the table
          tableHTML +="</table>";

          // update the DIV
          document.getElementById("datatable").innerHTML = tableHTML;

    } //end of the inner fucntion
  }); //end of the AJAX call
}

