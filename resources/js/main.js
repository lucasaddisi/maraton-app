function bootstrap() {
	
	this.mapa = new Mapa("mapid");
	this.infoGetter = new InfoGetter("https://fastspeedster.herokuapp.com/api");
	this.mapa.init();

	this.track = new Track();

	this.infoGetter.getTrackInfo(42).
	then(info => this.infoGetter.fillTrack(info, this.track)).
	then(r => this.mapa.drawTrack(this.track)).
	then(r => console.log(this.track))

	


}

$(bootstrap);