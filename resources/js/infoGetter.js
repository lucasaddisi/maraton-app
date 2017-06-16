var InfoGetter = function(mainUrl){

	this.mainUrl = mainUrl;

	this.getTrackInfo = function(trackID){

		return $.ajax(mainUrl + "/tracks/" + trackID);

	}

	this.getRunnerInfo = function(runnerID){

		return $.ajax(mainUrl + "/runners/" + runnerID);

	}

	this.getPositionInfo = function(runnerID){

		return $.ajax(mainUrl + "/positions/" + runnerID);

	}



	this.fillTrack = function(trackInfo, track){

		return  trackInfo.track.coordinates.map(c => track.addPoint(c.lat, c.lon));

	}

	this.fillRunner = function(runnerInfo, runner){

		runner.setId(runnerInfo.runner.id);
		runner.setName(runnerInfo.runner.name);
		runner.setSponsor(runnerInfo.runner.id, runnerInfo.runner.name);
		runner.setSurname(runnerInfo.runner.surname);

	}

	this.fillPositions = function(positionInfo, positionsR){

		positionsR.setRunner(positionInfo.position.runner);
		positionInfo.position.positions.map(pos => positionsR.addPositions(pos.lat, pos.lon));

	}

}
