// example usage
// node sendScores 1 2
// tells server to add 2 to billy's score

var request = require('request');

//TODO: map numeric values to player names
var map = [
	'billy',	// 1
	'bobby',	// 2
	'braden',	// 3
	'barret',	// 4
	'brent'];	// 5


var playerName = map[process.argv[2]-1]; //entering 1 will get index 0. This can be changed to an explicit name
var scoreIncrement = process.argv[3];

// var options = {
// 	uri: 'http://localhost',
// 	method: 'POST',
// 	port: '8080',
// 	json: data
// };

// request(options, function(e, r, body){
// 	console.log(e, r, body);
// });

// only method working in ubuntu
request.post({uri: 'http://localhost:8080', json: {name: playerName, value: scoreIncrement}});
