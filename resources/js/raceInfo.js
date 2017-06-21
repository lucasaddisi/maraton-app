
var Runner = function(){
	this.id = "";
	this.name = "";
	this.sponsor = {id : "", name : ""};
	this.surname = "";
	this.positions = [];

	this.setId = function(id){
		this.id = id;
	}

	this.setName = function(name){
		this.name = name;
	}

	this.setSponsor = function(id, name){
		this.sponsor.id = id;
		this.sponsor.name = name;
	}

	this.setSurname = function(surname){
		this.surname = surname;
	}

	this.setPositions = function(pos){
			pos.positions.map(p => this.positions.push(p));
	}

}

var Track = function(){

	this.points = [];

		this.addPoint = function(latitud, longitud){

			this.points.push({lat:latitud,
							lng: longitud});

		}
	}

var Positions = function(){
	this.runner = "";
	this.positions = [];

	this.setRunner = function(runner){
		this.runner = runner;
	}

	this.addPositions = function(latitud, longitud){
			this.positions.push({lat:latitud, lon:longitud});
	}

}

var Camera = function(){
	this.id = "";
	this.coordinate = "";

	this.setCamera = function(camera){
		this.id = camera.id;
		this.coordinate = camera.coordinate;

	}

}
