<h1>socket_scoreboard</h1>
<p>This is a scoreboard that can be updated from a couple points of entry depending on
where it's hosted. If running on a single machine, the scores can also be updated from an external 
script that makes a POST request to the server.</p>

<h2>Quick start</h2>
<ul>
	<li>Install node from http://nodejs.org/</li>
	<li>Navigate via terminal/command line to the socket_scoreboard directory</li>
	<li>Run npm install to install dependencies locally</li>
	<li>From the still open terminal/command line, run server.js with the command node server.js</li>
	<li>Open a browser window to http://localhost:8080. You should see a window with 5 boxes</li>
	<li>Back in your terminal, run the command node sendScores 1 1</li>
	<li>Return to the browser window and notice that billy's score has increased by 1</li>
</ul>
<h2>Customize</h2>
<p>You can (and should) alter the colors and fonts in the css and update the player images.</p>
<p>To change the player names alter the id's of the player divs in index.html. You'll also need to change 
the values of the keys in playerScores in server.js</p>