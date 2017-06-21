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

	this.getCameraInfo = function(cameraID){
		return $.ajax(mainUrl + "/webcams/" + cameraID);
	}

	this.fillTrack = function(trackInfo, track){

	 	trackInfo.track.coordinates.map(c => track.addPoint(c.lat, c.lon));

	}
	//Fills Runner array
	this.fillRunners = function(runnersInfo, runners){

		runnersInfo.runners.map(run => runners.push(this.creator.createRunner(run)));

	}
	//Fills positions Array
	this.fillPositions = function(positionsInfo, positions){

		positionsInfo.positions.map(pos => positions.push(this.creator.createPositions(pos)));

	}
	//Fills camera array
	this.fillCameras = function(cameraInfo, cameras){
		cameraInfo.webcams.map(webC => cameras.push(this.creator.createCamera(webC)));
	}


	//Asociates runners positions
	this.asociatePosition = function(runner, positions){
		//Find runners positions in positions array
		var setPositionRunner = function(runner, positions){
				 for(pos in positions)
						if(positions[pos].runner === runner.id)
							runner.setPositions(positions[pos]);

		}

		runner.map(r => setPositionRunner(r, positions));
	}

}
