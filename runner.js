
var Runner = function(name, historyPositions){
	this.name = name;
	this.historyPositions = historyPositions;
}

var bolt = new Runner("Bolt", [
	{lng: -34.535681, lat: -58.703293},
	{lng:-34.529971, lat:-58.698283},
	{lng: -34.529750, lat: -58.688552}
	]);

var pepe = new Runner ("Pepe!", [
{lng: -34.536680, lat: -58.701930},
{lng:-34.530502, lat: -58.697946},
{lng: -34.526277, lat: -58.683430}
]);

console.log(bolt);
console.log(pepe);
