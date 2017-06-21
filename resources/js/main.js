function bootstrap() {

	var mapa = new Mapa("mapid");
	var infoGetter = new InfoGetter("https://fastspeedster.herokuapp.com/api");
	mapa.init();

	var track = new Track();
	var runner = [];
	var positions = [];
	var cameras = [];
	var movingMarkers = [];

	var ajax1 = function(){
	 return infoGetter.getTrackInfo(42).
	 then(info => infoGetter.fillTrack(info, track)).
	 then(r => mapa.drawTrack(track))
 }

	var ajax2 = function() {
		return infoGetter.getRunnerInfo("").
		then(info => infoGetter.fillRunners(info, runner))
	}

	var ajax3 = function(){
		return infoGetter.getPositionInfo("").
		then(info => infoGetter.fillPositions(info, positions)).
		then(pos => infoGetter.asociatePosition(runner, positions)).
		then(r => console.log(runner))
	}

	var ajax4 = function(){
		 return infoGetter.getCameraInfo(42).
		 then(info => infoGetter.fillCameras(info, cameras)).
		 then(c => console.log(cameras))

	}

		$.when(ajax1(), ajax2(), ajax3(),ajax4()).
		done(p => runner.map(run => mapa.drawRunner(run))).
		done(p => cameras.map(cam => mapa.drawCamera(cam))).
		done(p => runner.map(run =>movingMarkers.push(L.Marker.movingMarker(run.positions, 1000)))).
		done(p=> movingMarkers.map(mm => mm.start()))

	//Hacer que se muevan
	//Y qué pasa con las cámaras?

}

$(bootstrap);
