var InfoGetter = function(mainUrl){

	this.mainUrl = mainUrl;
	this.creator = new Creator();

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

	 	trackInfo.track.coordinates.map(c => track.addPoint(c.lat, c.lon));

	}

	this.fillRunners = function(runnersInfo, runners){

		runnersInfo.runners.map(run => runners.push(this.creator.createRunner(run)));

	}

	this.fillPositions = function(positionsInfo, positions){

		positionsInfo.positions.map(pos => positions.push(this.creator.createPositions(pos)));

	}


	this.asociatePosition = function(runner, positions){
		//Buscamos las posiciones de un runner
		var setPositionRunner = function(runner, positions){
				 for(pos in positions)
						if(positions[pos].runner === runner.id)
							runner.setPositions(positions[pos]);

		}

		runner.map(r => setPositionRunner(r, positions));
	}

}
