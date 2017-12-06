console.log("The bot is starting");

var Twit = require("twit");

var config = require("./config");

var T = new Twit(config);

tweetIT();
setInterval(tweetIT, 1000*20);

function tweetIT() {

	var rnd = Math.floor(Math.random()*100);
	var txt = "Back to twitter " + 99;
	var tweet = {
		status: txt
	}

	T.post('statuses/update', tweet, tweeted);

	function tweeted(err, data, response) {
		if (err){
			console.log("Something went wrong.");
			console.log("//" + err);
		} else {
			console.log("It worked");
		}
	}
};