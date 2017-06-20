function bootstrap() {

	this.mapa = new Mapa("mapid");
	this.infoGetter = new InfoGetter("https://fastspeedster.herokuapp.com/api");
	this.mapa.init();

	this.track = new Track();
	this.runner = [];
	this.positions = [];

	this.infoGetter.getTrackInfo(42).
	then(info => this.infoGetter.fillTrack(info, this.track)).
	then(r => this.mapa.drawTrack(this.track)).
	then(r => console.log(this.track))

	this.infoGetter.getRunnerInfo("").
	then(info => this.infoGetter.fillRunners(info, this.runner))

	this.infoGetter.getPositionInfo("").
	then(info => this.infoGetter.fillPositions(info, this.positions)).
	then(p => console.log(this.positions))

	this.infoGetter.asociatePostion(runner, positions);

}

$(bootstrap);
