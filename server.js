var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server);

server.listen(80);
app.use(express.bodyParser());


var playerScores = {
	billy : 0,
	bobby : 0,
	braden : 0,
	barret : 0,
	brent : 0
};

app.get('/', function (req, res) {
	res.sendfile(__dirname + '/index.html');
});

app.post('/', function (req, res){
	var contents = req.body;
	res.send(200);

	//update the player's score in the score data

	//resend all scores
	io.sockets.emit('score_update', playerScores);
});

io.sockets.on('connection', function (socket) {
	socket.emit('score_update', playerScores);

	// socket.on('score_update', function (data) {
	// 	//update the scores stored on server
	// 	console.log(data);
	// });
});
