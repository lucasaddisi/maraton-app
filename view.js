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

		var trackPoints = tracksResponse.track.coordinates.map(p => L.latLng(p.lat, p.lon));//lo dejamos como var por ahora
		var track = L.polygon(trackPoints).addTo(mapa);

		mapa.setView(track.getBounds().getCenter(), 17);

	});

	runnersInfo.done(function(runnersResponse) {
		
		this.runnersIDs = runnersResponse.runners.map(r => r.id);

		this.runnersIDs.forEach(id => $.ajax(URL + "/runners/" + id)
			.done(function (response) {

				this.toAdd = new Runner(response.runner.name, response.runner.positions);

				//TODO: que se meuva el marker, pero no aca, en otro lado del codigo.
				//TODO: ademas, esta bien usar una libreria? o lo tenemos que hacer nosotros?
				//TODO: Usando libreria queda lindo :D

				/*
				if(this.toAdd.name === "Barry"){
					this.recorrido = this.toAdd.historyPositions.map(p => [p.lat, p.lon]);
					this.tiempos = this.toAdd.historyPositions.map(p => 1000);
					console.log(this.recorrido);
					var marker1 = L.Marker.movingMarker(this.recorrido, this.tiempos).addTo(mapa);
					marker1.bindPopup(this.toAdd.name);
					marker1.start();
				}
				*/
				runners.push(this.toAdd);

		}));


	});



}

$(initMap);
