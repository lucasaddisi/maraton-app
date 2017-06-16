function bootstrap() {

	this.mapa = new Mapa("mapid");
	this.infoGetter = new InfoGetter("https://fastspeedster.herokuapp.com/api");
	this.mapa.init();

	this.track = new Track();
	this.runner = new Runner();
	this.positions = new Postions();

	this.infoGetter.getTrackInfo(42).
	then(info => this.infoGetter.fillTrack(info, this.track)).
	then(r => this.mapa.drawTrack(this.track)).
	then(r => console.log(this.track))

	this.infoGetter.getRunnerInfo(780).
	then(info => this.infoGetter.fillRunner(info, this.runner)).
	then(r => console.log(this.runner))

	this.infoGetter.getPositionInfo(780).
	then(info => this.infoGetter.fillPositions(info, this.positions)).
	then(p => console.log(this.positions))

}

$(bootstrap);
