function bootstrap() {

	this.mapa = new Mapa("mapid");
	this.infoGetter = new InfoGetter("https://fastspeedster.herokuapp.com/api");
	this.mapa.init();

	this.track = new Track();
	this.runner = [];
	this.positions = [];

	this.infoGetter.getTrackInfo(42).
	then(info => this.infoGetter.fillTrack(info, this.track)).
	then(r => this.mapa.drawTrack(this.track))

	this.infoGetter.getRunnerInfo("").
	then(info => this.infoGetter.fillRunners(info, this.runner))

	this.infoGetter.getPositionInfo("").
	then(info => this.infoGetter.fillPositions(info, this.positions)).
	then(pos => this.infoGetter.asociatePosition(this.runner, this.positions)).
	then(r => console.log(this.runner))

	$(document).ready(function(){
	    $(document).ajaxStop(function(){
	        console.log("hola");
	    })});

	//Dibujar los corredores
	//Hacer que se muevan
	//Y qué pasa con las cámaras?

}

$(bootstrap);
