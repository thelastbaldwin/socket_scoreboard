// example usage
// node sendScores david 7
// tells server to add 7 to david's score

var request = require('request');

//TODO: map numeric values to player names

var playerName = process.argv[2];
var playerScore = process.argv[3];

var options = {
	url: 'http://localhost',
	method: 'POST',
	json: {name : playerName, value: playerScore}
};

request(options);