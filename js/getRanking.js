var rankLayer
function getRanking() {
$.ajax({url:"https://developer.cege.ucl.ac.uk:"+ httpsPortNumberAPI +
"/getRanking/"+httpsPortNumberAPI,
       crossDomain: true,async : false,success: function(result){
            console.log(result);

        rankLayer = result[0].array_to_json[0].rank;

        alert("Ranking: "+rankLayer)

    } 
    }); 
}

function getTop5(){
$.ajax({url:"https://developer.cege.ucl.ac.uk:"+ httpsPortNumberAPI +
"/getScore",
	crossDomain: true,async : false,success: function(result){
		console.log(result);


	var data;
	data = result[0].array_to_json;
  	console.log(data);

  	var tableHTML = "<table class=table table-striped>";
  	tableHTML += "<thead class='thead-dark'>";
	tableHTML += "<tr><th scope='col'>Port_ID</th><th scope='col'>Ranking</th></tr></b>";
	for (i=0;i< data.length;i++) {
            // add a new row
            tableHTML += "<tr>";

            // add a new column 
            tableHTML +="<td>";
            // add the table name
            tableHTML +=data[i].port_id;
            // close the column
            tableHTML +="</td>";

            // add a new column 
            tableHTML +="<td>";
            // add the feature type
            tableHTML +=data[i].rank;
            // close the column
            tableHTML +="</td>";

            //close the row
            tableHTML +="</tr>";

    } // end of the for loop

    // close the table
    tableHTML +="</table>";

    // update the DIV
    document.getElementById("top5table").innerHTML = tableHTML;

  } //end of the inner fucntion
  }); //end of the AJAX call
}

