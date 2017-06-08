function initMap (){
	var URL = "https://fastspeedster.herokuapp.com/api/";

	var req1 = $.ajax(URL + "tracks/42");
	var req2 = $.ajax(URL + "runners");

	$.when(req1, req2).done(function(res1, res2){
	      console.log(req1);
	      console.log(req2);
	});

}

$(initMap);
