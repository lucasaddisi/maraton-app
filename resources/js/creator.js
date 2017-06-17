var Creator = function(){

  this.createRunner = function(runner){
		var ret = new Runner();

		ret.setId(runner.id);
		ret.setName(runner.name);
		ret.setSponsor(runner.sponsor.id, runner.sponsor.name);
		ret.setSurname(runner.surname);

		return ret;
	}

  this.createPositions = function(positions){
		ret = new Positions();
		ret.setRunner(positions.runner);
		positions.positions.map(pos => ret.addPositions(pos.lat, pos.lon));

		return ret;
	}

}
