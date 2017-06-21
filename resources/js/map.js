
var Mapa = function (mapID) {

	this.mapa = L.map(mapID);

	this.init = function(){

	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(this.mapa);

		this.mapa.setView(L.latLng(0,0), 0);

	}


	this.icon = function(url){
		var ret = L.icon({
		    iconUrl: url,
		    iconSize:     [20, 20], // size of the icon
		    iconAnchor:   [0, 0], // point of the icon which will correspond to marker's location
		    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
				});
		return ret;
	}

	this.drawTrack = function(track){

		var coordinates = track.points.map(p => L.latLng(p.lat, p.lng));
    var ruta = L.polyline(coordinates, {color: "#F00"}).addTo(this.mapa);
		var ungsLocation = [-34.5228554, -58.698];
		this.mapa.setView(ungsLocation, 17);

	}

	this.drawRunner = function(runner){

		var info = "Runner Name: " + runner.name + " " + runner.surname +
							 "\n Sponsor Name: " + runner.sponsor.name;

		L.marker([runner.positions[0].lat, runner.positions[0].lng],
	 	{icon: this.icon('\images\\ic_android_black_24dp_2x.png')})
		.bindPopup(info)
		.addTo(this.mapa);
	}

	this.drawCamera = function(camera){

		var info = "Camera ID: " + camera.id;

		L.marker([camera.coordinate.lat, camera.coordinate.lon],
	 	{icon: this.icon('\images\\ic_camera_enhance_black_24dp_2x.png')})
		.bindPopup(info)
		.addTo(this.mapa);
	}

}
