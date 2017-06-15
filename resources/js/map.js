
var Mapa = function (mapID) {

	this.mapa = L.map(mapID);
	
	this.init = function(){

	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(this.mapa);

		this.mapa.setView(L.latLng(0,0), 0);

	}

	this.drawTrack = function(track){

		var coordinates = track.points.map(p => L.latLng(p.lat, p.lng));
		console.log(coordinates)
        var ruta = L.polyline(coordinates, {color: "#F00"}).addTo(this.mapa);
		var ungsLocation = [-34.5221554, -58.7000067];
		this.mapa.setView(ungsLocation, 17);

	}

	function drawRunner(){

	}

}