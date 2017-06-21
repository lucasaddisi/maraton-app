
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
    var ruta = L.polyline(coordinates, {color: "#F00"}).addTo(this.mapa);
		var ungsLocation = [-34.5221554, -58.7000067];
		this.mapa.setView(ungsLocation, 17);

	}

	this.drawRunner = function(runner){
		L.marker([runner.positions[0].lat, runner.positions[0].lng])
		.addTo(this.mapa);
	}

	this.drawCamera = function(camera){

		var cameraIcon = L.icon({
    iconUrl: '\images\\ic_camera_enhance_black_24dp_1x.png',

    iconSize:     [20, 20], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
		});

		L.marker([camera.coordinate.lat, camera.coordinate.lon], {icon: cameraIcon})
		.addTo(this.mapa);
	}

}
