console.log("The bot is starting");

var Twit = require("twit");

var config = require("./config");

var T = new Twit(config);

//Setting up stream
var stream = T.stream("user");

stream.on("follow", followed);

function followed (event) {
	var name = event.source.name;
	var screenName = event.source.screen_name;
	tweetIT('.@' + screenName + ' hello there.')
}

function tweetIT(txt) {
	
	var tweet = {
		status: txt
	}

	T.post('statuses/update', tweet, tweeted);

	function tweeted(err, data, response) {
		if (err){
			console.log("Something went wrong.");
			console.log("//" + err);
		} else {
			console.log("It worked.");
		}
	}
};