
var Runner = function(){
	this.id = "";
	this.name = "";
	this.sponsor = {id : "", name : ""};
	this.surname = "";

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

}

var Track = function(){

	this.points = [];

		this.addPoint = function(latitud, longitud){

			this.points.push({lat:latitud,
							lng: longitud});

		}
	}

var Postions = function(){
	this.runner = "";
	this.positions = [];

	this.setRunner = function(runner){
		this.runner = runner;
	}

	this.addPositions = function(latitud, longitud){
			this.positions.push({lat:latitud, lng:longitud});
	}

}

var WebCam = function(){}
