function bootstrap (){

	var ungsLoc = [-34.5221554, -58.7000067];
	var map = L.map('mapid').setView(ungsLoc, 15);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


var circle = L.circle(ungsLoc, {
	color: '#0000AA',
	fillColor: '#0000CC',
	fillOpacity: 0.2,
	radius: 300
}).addTo(map);

L.polygon ([
	L.latLng (-34.532596, -58.701761),
	L.latLng (-34.527991, -58.707927),
	L.latLng (-34.537671, -58.718153),
	L.latLng (-34.542229, -58.712136),
	]).addTo(map);
}

$(bootstrap);