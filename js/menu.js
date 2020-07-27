//load different content when clicking different buttons

function startPage(){
	// document.getElementById('form').style.display= 'none';
	// document.getElementById('mapid').style.display= 'none';
	// document.getElementById('mapContainer').style.display= 'none';
	document.getElementById('helpPage').style.display= 'none';
	document.getElementById('form').style.display= 'none';
	document.getElementById("top5table").style.display= 'none';
	document.getElementById('UserPar').style.display= 'none';
	document.getElementById('AllPar').style.display= 'none';
	document.getElementById('removeLastWeekQuestion').style.display= 'none';
	document.getElementById('closest5').style.display= 'none';
	document.getElementById('removeClosest5').style.display= 'none';
	document.getElementById('datatable').style.display= 'none';
	document.getElementById('removeLastQuestion').style.display= 'none';
	}




function loadMap() {
	document.getElementById('form').style.display= 'block';
	document.getElementById('mapid').style.display= 'block';
	// document.getElementById('mapContainer').style.display= 'block';
	document.getElementById('helpPage').style.display= 'none';
	document.getElementById("top5table").style.display= 'none';
	document.getElementById('UserPar').style.display= 'none';
	document.getElementById('AllPar').style.display= 'none';
	document.getElementById('removeLastWeekQuestion').style.display= 'none';
	document.getElementById('closest5').style.display= 'none';
	document.getElementById('removeClosest5').style.display= 'none';
	document.getElementById('datatable').style.display= 'none';
	document.getElementById('removeLastQuestion').style.display= 'none';
	
  getPorts();
  loadLeafletMap()
}

function help(){
	document.getElementById('form').style.display= 'none';
	document.getElementById('mapid').style.display= 'none';
	document.getElementById('helpPage').style.display= 'block';
	document.getElementById("top5table").style.display= 'none';
	document.getElementById('UserPar').style.display= 'none';
	document.getElementById('AllPar').style.display= 'none';
	document.getElementById('removeLastWeekQuestion').style.display= 'none';
	document.getElementById('closest5').style.display= 'none';
	document.getElementById('removeClosest5').style.display= 'none';
	document.getElementById('datatable').style.display= 'none';
	document.getElementById('removeLastQuestion').style.display= 'none';
}

function loadQuizMap(){
	document.getElementById('form').style.display= 'none';
	document.getElementById('mapid').style.display= 'block';
	document.getElementById('helpPage').style.display= 'none';
	document.getElementById("top5table").style.display= 'none';
	document.getElementById('UserPar').style.display= 'none';
	document.getElementById('AllPar').style.display= 'none';
	document.getElementById('removeLastWeekQuestion').style.display= 'none';
	document.getElementById('closest5').style.display= 'block';
	document.getElementById('removeClosest5').style.display= 'block';
	document.getElementById('datatable').style.display= 'none';
	document.getElementById('removeLastQuestion').style.display= 'none';
	loadQuiz();
  	getPorts();

  	loadLeafletMap();

  	
}

function Top5Scorers(){
	document.getElementById('form').style.display= 'none';
	document.getElementById('mapid').style.display= 'none';
	document.getElementById('helpPage').style.display= 'none';
	document.getElementById("top5table").style.display= 'block';
	document.getElementById('UserPar').style.display= 'none';
	document.getElementById('AllPar').style.display= 'none';
	document.getElementById('removeLastWeekQuestion').style.display= 'none';
	document.getElementById('closest5').style.display= 'none';
	document.getElementById('removeClosest5').style.display= 'none';
	document.getElementById('datatable').style.display= 'none'
	document.getElementById('removeLastQuestion').style.display= 'none';
	getTop5();
}

function UserParRate(){
	document.getElementById('form').style.display= 'none';
	document.getElementById('mapid').style.display= 'none';
	document.getElementById('helpPage').style.display= 'none';
	document.getElementById("top5table").style.display= 'none';
	document.getElementById('UserPar').style.display= 'block';
	document.getElementById('AllPar').style.display= 'none';
	document.getElementById('removeLastWeekQuestion').style.display= 'none';
	document.getElementById('closest5').style.display= 'none';
	document.getElementById('removeClosest5').style.display= 'none';
	document.getElementById('datatable').style.display= 'none';
	document.getElementById('removeLastQuestion').style.display= 'none';
	getUserParticipation();
}

function AllParRate(){
	document.getElementById('form').style.display= 'none';
	document.getElementById('mapid').style.display= 'none';
	document.getElementById('helpPage').style.display= 'none';
	document.getElementById("top5table").style.display= 'none';
	document.getElementById('UserPar').style.display= 'none';
	document.getElementById('AllPar').style.display= 'block';
	document.getElementById('removeLastWeekQuestion').style.display= 'none';
	document.getElementById('closest5').style.display= 'none';
	document.getElementById('removeClosest5').style.display= 'none';
	document.getElementById('datatable').style.display= 'none';
	document.getElementById('removeLastQuestion').style.display= 'none';
	getAllParticipation();
}

function lastWeekQuestion(){
	document.getElementById('form').style.display= 'none';
	document.getElementById('mapid').style.display= 'block';
	document.getElementById('helpPage').style.display= 'none';
	document.getElementById("top5table").style.display= 'none';
	document.getElementById('UserPar').style.display= 'none';
	document.getElementById('AllPar').style.display= 'none';
	document.getElementById('removeLastWeekQuestion').style.display= 'block';
	document.getElementById('closest5').style.display= 'none';
	document.getElementById('datatable').style.display= 'none';
	document.getElementById('removeLastQuestion').style.display= 'none';
	
	getLastWeek();
	// loadLeafletMap();
}


function getdiffcultQ(){
	document.getElementById('form').style.display= 'none';
	document.getElementById('mapid').style.display= 'none';
	document.getElementById('helpPage').style.display= 'none';
	document.getElementById("top5table").style.display= 'none';
	document.getElementById('UserPar').style.display= 'none';
	document.getElementById('AllPar').style.display= 'none';
	document.getElementById('removeLastWeekQuestion').style.display= 'none';
	document.getElementById('closest5').style.display= 'none';
	document.getElementById('removeClosest5').style.display= 'none';
	document.getElementById('datatable').style.display= 'block';
	document.getElementById('removeLastQuestion').style.display= 'none';
	get5Difficult();
}

function getlastQ(){
	document.getElementById('form').style.display= 'none';
	document.getElementById('mapid').style.display= 'block';
	document.getElementById('helpPage').style.display= 'none';
	document.getElementById("top5table").style.display= 'none';
	document.getElementById('UserPar').style.display= 'none';
	document.getElementById('AllPar').style.display= 'none';
	document.getElementById('removeLastWeekQuestion').style.display= 'none';
	document.getElementById('closest5').style.display= 'none';
	document.getElementById('removeClosest5').style.display= 'none';
	document.getElementById('datatable').style.display= 'none';
	document.getElementById('removeLastQuestion').style.display= 'block';

	// loadLeafletMap();
	getLast5Q();
	
}
