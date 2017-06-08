function initMap (){


	var mapa = L.map('mapid');
	var URL = "https://fastspeedster.herokuapp.com/api/";
	var trackInfo = $.ajax(URL + "tracks/42");
	var runnersInfo = $.ajax(URL + "runners");

	var runners = [];

	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(mapa);


	trackInfo.done(function(tracksResponse){

		var trackPoints = tracksResponse["track"]["coordinates"].map(p => L.latLng(p.lat, p.lon));
		var polygon = L.polygon(trackPoints).addTo(mapa);

		mapa.setView(polygon.getBounds().getCenter(), 17);

	});



}

$(initMap);
