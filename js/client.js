//container for player scores
var scores = { 
	values: {},
	get: function(name){
		if (!name){
			return this.values;
		} else {
			return this.values[name];
		}
	},
	set: function(allScores, broadcast_all){
		var shouldUpdate = false;

		//copy all values
		for (var i in allScores){
			if (allScores.hasOwnProperty(i)){
				if (scores.get[i] != allScores[i]){
					shouldUpdate = true;
				}
			}
		}

		if (shouldUpdate){
			this.values = allScores;
			this.update(broadcast_all);
		}
	},
	setPlayerScore: function(name, score){
		this.values[name] = score;
		this.update(true);
	},
	update: function(broadcast_all){		
		players.forEach(function(player){
			player.updateScore(scores.get(player.name));
		});
		if( broadcast_all){
			socket.emit('client_update', scores.get());
		}
	}
};

var players = []; //necessary to preserve event handlers

//websockets
var socket = io.connect('http://localhost');
	socket.on('score_update', function (serverScores) {
		scores.set(serverScores, false);
});


//player object
$(function(){
	var Player = function(el){
		this.name = el;
		this.el = $('#' + el);
		this.scoreDisplay = this.el.find('h3');
		this.scoreUp = this.el.find('.scoreUp');
		this.scoreDown = this.el.find('.scoreDown');
		var that = this; // 'this' scope lost in event handler

		//bind button actions
		this.scoreUp.on('click', function(){
			var curScore = scores.get(that.name);
			scores.setPlayerScore(that.name, curScore+1);
		});

		this.scoreDown.on('click', function(){
			var curScore = scores.get(that.name);
			scores.setPlayerScore(that.name, curScore-1);
		});
	}

	Player.prototype.updateScore = function(score){
		this.scoreDisplay.text(score);
	}

	$('.player').each(function(index, value){
		players.push(new Player($(value).attr("id")));
	});
})