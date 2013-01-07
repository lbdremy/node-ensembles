module.exports = ensembles;

/**
 * Return an array of ensembles based on the given `ensemble` and `gap`
 * 
 * @param {Array} ensemble - an array representing an ensemble
 * @param {Number} gap - the maximum interval expected in the array of ensembles returned
 *
 * @return {Array}
 */

function ensembles(ensemble,gap){
	var ensembles = [];
	if(gap > 0 && ensemble[0] > ensemble[1]) return ensembles;
	if(gap < 0 && ensemble[0] < ensemble[1]) return ensembles;
	for(var i = ensemble[0]; gap > 0 ? i < ensemble[1] : i > ensemble[1] ; i = i + gap){
		if((gap > 0 && i + gap < ensemble[1]) || (gap < 0 && i + gap > ensemble[1])){
			ensembles.push([i, i + gap]);
		}else{
			ensembles.push([i, ensemble[1]]);
		}
	}
	return ensembles;
}