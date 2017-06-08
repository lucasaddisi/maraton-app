function initMap (){


	var mapa = L.map('mapid').setView([-34.5221554, -58.7000067], 13);

	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(mapa);



	var URL = "https://fastspeedster.herokuapp.com/api/";

	var trackInfo = $.ajax(URL + "tracks/42");
	//var runnersInfo = $.ajax(URL + "runners");

	$.when(trackInfo).done(function(tracksResponse){

		console.log(tracksResponse["track"]["coordinates"]);

		var trackPoints = tracksResponse["track"]["coordinates"].map(p => L.latLng(p.lat, p.lon)); //for(point in tracksResponse[0]){}

		console.log(trackPoints);

		L.polygon(trackPoints).addTo(mapa);

	});

//	$.when(req1, req2).done(function(res1, res2){
//	      console.log(req1);
//	      console.log(req2);
//	});

}

$(initMap);
