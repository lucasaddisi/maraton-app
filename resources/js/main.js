function bootstrap() {

	var mapa = new Mapa("mapid");
	var infoGetter = new InfoGetter("https://fastspeedster.herokuapp.com/api");
	mapa.init();

	var track = new Track();
	var runner = [];
	var positions = [];

	var ajax1 = function(){
	 console.log(runner);
	 infoGetter.getTrackInfo(42).
	 then(info => infoGetter.fillTrack(info, track)).
	 then(r => mapa.drawTrack(track))
 }

	var ajax2 = function() {
		infoGetter.getRunnerInfo("").
		then(info => infoGetter.fillRunners(info, runner))
	}

	var ajax3 = function(){
		infoGetter.getPositionInfo("").
		then(info => infoGetter.fillPositions(info, positions)).
		then(pos => infoGetter.asociatePosition(runner, positions)).
		then(r => console.log(runner))
	}

		$.when(ajax1(), ajax2(), ajax3()).done(console.log("Hokus"));
	//Dibujar los corredores
	//Hacer que se muevan
	//Y qué pasa con las cámaras?

}

$(bootstrap);
