var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server);

server.listen(8080);
app.use(express.bodyParser());

var playerScores = {
	billy : 0,
	bobby : 0,
	braden : 0,
	barret : 0,
	brent : 0
};

app.use("/js", express.static(__dirname + '/js'));
app.use("/css", express.static(__dirname + '/css'));

app.get('/', function (req, res) {
	res.sendfile(__dirname + '/index.html');
});

app.post('/', function (req, res){
	var contents = req.body;
	res.end();

	//update the player's score in the score data
	playerScores[contents.name] += parseInt(contents.value);

	//resend all scores
	io.sockets.emit('score_update', playerScores);
});

io.sockets.on('connection', function (socket) {
	socket.emit('score_update', playerScores);

	socket.on('client_update', function (data) {
		playerScores = data;
		socket.broadcast.emit('score_update', playerScores);
	});
});
