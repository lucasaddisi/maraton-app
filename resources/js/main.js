function bootstrap() {

	var mapa = new Mapa("mapid");
	var infoGetter = new InfoGetter("https://fastspeedster.herokuapp.com/api");
	mapa.init();

	var track = new Track();
	var runner = [];
	var positions = [];
	var cameras = [];

	var movingMarkers = [];

	var getTrack = function(){
	 return infoGetter.getTrackInfo(42).
	 then(info => infoGetter.fillTrack(info, track)).
	 then(r => mapa.drawTrack(track))
 	}

	var getRunners = function() {
		return infoGetter.getRunnerInfo("").
		then(info => infoGetter.fillRunners(info, runner))
	}

	var getPositions = function(){
		return infoGetter.getPositionInfo("").
		then(info => infoGetter.fillPositions(info, positions)).
		then(pos => infoGetter.asociatePosition(runner, positions)).
		then(r => console.log(runner))
	}

	var getCameras = function(){
		 return infoGetter.getCameraInfo(42).
		 then(info => infoGetter.fillCameras(info, cameras))

	}

		$.when(getTrack(), getRunners(), getPositions(),getCameras()).
		done(p => runner.forEach(run => movingMarkers.push(mapa.drawRunner(run)))).
		done(p => cameras.forEach(cam => mapa.drawCamera(cam))).
		done(p => movingMarkers.forEach(marker => marker.start()))

	//Hacer que se muevan
	//Y qué pasa con las cámaras?

}

$(bootstrap);
