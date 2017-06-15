var InfoGetter = function(mainUrl){

	this.mainUrl = mainUrl;

	this.getTrackInfo = function(trackID){

		return $.ajax(mainUrl + "/tracks/" + trackID);

	}

	this.fillTrack = function(trackInfo, track){

		return trackInfo.track.coordinates.map(c => track.addPoint(c.lat, c.lon));

	}


}