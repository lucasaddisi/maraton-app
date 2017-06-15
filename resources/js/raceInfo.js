
var Runner = function(name, historyPositions){
	this.name = name;
	this.historyPositions = historyPositions;

}

var Track = function(){

	this.points = [];

	this.addPoint = function(latitud, longitud){

		this.points.push({lat:latitud, 
							lng: longitud});

	}

}

var WebCam = function(){


}
