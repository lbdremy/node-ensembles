var ensembles = require('./../');

var ensemble = [Date.now() - 3600, Date.now()];
var gap = 30;
var timeEnsembles = ensembles([10,1],-5);

console.log(timeEnsembles);
console.log(timeEnsembles.length);