/**
 * Module dependencies
 */

var test = require('tap').test,
	ensembles = require('./../');

/**
 * Test suite
 */

test('ensembles([1,10],5)',function(t){
	var series = ensembles([1,10],5);
	t.equal(series[0][0],1);
	t.equal(series[0][1],6);
	t.equal(series[1][0],6);
	t.equal(series[1][1],10);
	t.end();
});

test('ensembles([-10,-1],5)',function(t){
	var series = ensembles([-10,-1],5);
	t.equal(series[0][0],-10);
	t.equal(series[0][1],-5);
	t.equal(series[1][0],-5);
	t.equal(series[1][1],-1);
	t.end();
});

test('ensembles([10,1],-5)',function(t){
	var series = ensembles([10,1],-5);
	console.log('series: ' + series);
	t.equal(series[0][0],10);
	t.equal(series[0][1],5);
	t.equal(series[1][0],5);
	t.equal(series[1][1],1);
	t.end();
});

test('ensembles([-1,-10],-5)',function(t){
	var series = ensembles([-1,-10],-5);
	console.log('series: ' + series);
	t.equal(series[0][0],-1);
	t.equal(series[0][1],-6);
	t.equal(series[1][0],-6);
	t.equal(series[1][1],-10);
	t.end();
});

test('ensembles([1,10],-5)',function(t){
	var series = ensembles([1,10],-5);
	t.equal(series.length,0);
	t.end();
});

test('ensembles([10,1],5)',function(t){
	var series = ensembles([10,1],5);
	t.equal(series.length,0);
	t.end();
});